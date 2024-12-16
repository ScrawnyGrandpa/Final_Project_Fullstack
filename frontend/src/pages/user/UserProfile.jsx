import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import EditUserSchema from '../../schema/EditUserSchema';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useLoadCallback, usePageUI } from '../../providers/PageUIProvider';
import Form from '../../components/Form/Form';
import PageContent from '../../components/layout/PageContent';
import { ROUTES } from '../../router';
import { useSearch } from "../../providers/SearchProvider";

export default function UserProfile() {
    const { user } = useAuthentication();
    const [defaultValue, setDefaultValue] = useState();
    const schema = useMemo(() => new EditUserSchema(), []);
    const { setNotification } = usePageUI();
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();

    const onCancel = useCallback(() => navigate(ROUTES.ROOT), []);

    const onSubmit = useLoadCallback(async data => {
        setDefaultValue(data);
        await user.beforeSubmit(data).save();
        setNotification({ message: "Profile updated", severity: "info" });
    }, [user]);

    useEffect(() => {
        setDefaultValue(user?.cleanup());
    }, [user]);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <PageContent>
            {defaultValue &&
                <div>
                    <p className='text-4xl font-bold md:text-4xl lg:text-4xl mb-10'>{user.nickName}</p>
                    <p>Welcome to your profile page {user.nickName}. Here you may edit your basic info.</p>
                    <p>Currently logged in email - <span className="font-bold text-cyan-500">{user.email}</span></p>
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 py-10">
                        <div className="flex justify-center items-center flex-1">
                            <img
                                src={user?.avatarImgURL || "https://d.furaffinity.net/art/khatmedic/1598338509/1598338509.khatmedic_random.png"}
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
        </PageContent>
    );
}
