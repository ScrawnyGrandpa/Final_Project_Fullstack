import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import UserModel from "../../models/UserModel";
import RegisterSchema from "../../schema/RegisterSchema";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { useLoadCallback, usePageUI } from "../../providers/PageUIProvider";
import PageContent from "../../components/layout/PageContent";
import Form from "../../components/Form/Form";
import { ROUTES } from "../../router";
import { useSearch } from "../../providers/SearchProvider";

export default function RegisterPage() {
    const [defaultValue, setDefaultValue] = useState(new UserModel().toObject());
    const schema = useMemo(() => new RegisterSchema(), []);
    const { user, login } = useAuthentication();
    const { setNotification } = usePageUI();
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();

    const onCancel = useCallback(() => {
        console.log("Clicked Cancel");
        navigate(ROUTES.ROOT)
    }, []);

    const onSubmit = useLoadCallback(async data => {
        const user = new UserModel(data);
        setDefaultValue(data);

        const newUser = user.cleanup();
        console.log("saved newUser", newUser);

        await newUser.save();
        console.log("Saving to Databse");


        setNotification({ message: "Registration complete", severity: "info" });
        await login(newUser.email, newUser.password);
    }, []);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <PageContent>
            {user && <Navigate to={ROUTES.ROOT} replace />}
            {!user &&
                <div className="max-w-4xl mx-auto p-6 w-[90vw]">
                    <Form title="Register" {...{ defaultValue, schema, onCancel, onSubmit }}
                    />
                </div>
            }
        </PageContent>
    );
}