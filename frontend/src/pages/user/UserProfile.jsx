import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import EditUserSchema from '../../schema/EditUserSchema';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useLoadCallback, usePageUI } from '../../providers/PageUIProvider';
import Form from '../../components/Form/Form';
import PageContent from '../../components/layout/PageContent';
import { ROUTES } from '../../router';

export default function UserProfile() {
    const { user } = useAuthentication();
    const [defaultValue, setDefaultValue] = useState();
    const schema = useMemo(() => new EditUserSchema(), []);
    const { setNotification } = usePageUI();
    const navigate = useNavigate();

    const onCancel = useCallback(() => navigate(ROUTES.ROOT), []);

    const onSubmit = useLoadCallback(async data => {
        setDefaultValue(data);
        await user.beforeSubmit(data).save();
        setNotification({ message: "Profile updated", severity: "success" });
    }, [user]);

    useEffect(() => {
        setDefaultValue(user?.cleanup());
    }, [user]);

    return (
        <PageContent>
            {defaultValue &&
                <div>
                    <p className='text-center text-5xl font-bold md:text-5xl lg:text-5xl mb-10'>User Profile Page</p>
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 py-10">
                        <div className="flex justify-center items-center flex-1">
                            <img
                                src={user?.avatarImgURL}
                                alt="User Avatar"
                                className="w-4/5 h-auto object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <Form title="" {...{ defaultValue, schema, onCancel, onSubmit }} />
                        </div>
                    </div>
                </div>
            }
            {!user && <Navigate to={ROUTES.ROOT} replace />}
        </PageContent>
    );
}
