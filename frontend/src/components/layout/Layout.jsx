import Header from "./Header";
import Footer from "./Footer";
import MainBody from "./MainBody";
import BackToTopButton from "../helpers/BackToTop";
import { useCallback, useEffect, useState } from "react";
import { usePageUI } from "../../providers/PageUIProvider";
import { Alert, Snackbar } from "@mui/material";
import SearchProvider from "../../providers/SearchProvider";

export default function Layout({ children }) {
    const { notification } = usePageUI();
    const [showNotification, setShowNotification] = useState(false);
    const closeNotification = useCallback(() => setShowNotification(false), []);

    useEffect(() => {
        setShowNotification(Boolean(notification));
    }, [notification]);

    return (
        <SearchProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <MainBody>{children}</MainBody>
                <Footer />
                <BackToTopButton />
            </div>
            <Snackbar
                key={notification?.message}
                open={showNotification}
                autoHideDuration={3000}
                onClose={closeNotification}
                sx={{ marginBottom: 5 }}
            >
                <Alert
                    onClose={closeNotification}
                    severity={notification?.severity}
                    variant="filled"
                    sx={{ width: "100%", color: "white" }}
                >
                    {notification?.message}
                </Alert>
            </Snackbar>
        </SearchProvider>
    );
}