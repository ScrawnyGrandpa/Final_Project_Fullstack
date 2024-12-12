import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import UserModel from "../../models/UserModel";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import { useLoadCallback, usePageUI } from "../../providers/PageUIProvider";
import PageContent from "../../components/layout/PageContent";
import Form from "../../components/Form/Form";
import { ROUTES } from "../../router";
import LoginSchema from "../../schema/LoginSchema";
import { useSearch } from "../../providers/SearchProvider";

export default function RegisterPage() {
    const [defaultValue, setDefaultValue] = useState(new UserModel().toObject());
    const schema = useMemo(() => new LoginSchema(), []);
    const { user, login } = useAuthentication();
    const { setNotification } = usePageUI();
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();

    const onCancel = useCallback(() => {
        console.log("Clicked Cancel");
        navigate(ROUTES.ROOT)
    }, []);

    const onSubmit = useLoadCallback(async ({ email, password }) => {
        setDefaultValue({ email, password });
        await login(email, password);
        setNotification({ message: "Logged In", severity: "info" });
    }, []);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <PageContent>
            {user && <Navigate to={ROUTES.ROOT} replace />}
            {!user &&
                <div className="max-w-4xl mx-auto p-6 w-[90vw]">
                    <Form title="Login" {...{ defaultValue, schema, onCancel, onSubmit }}
                    />
                </div>
            }
        </PageContent>
    );
}