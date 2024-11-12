import { Box, CircularProgress } from "@mui/material";
import { usePageUI } from "../../providers/PageUIProvider";
import { useEffect, useState } from "react";

export default function PageContent({ children }) {
    const [initialLoading, setInitialLoading] = useState(true);
    const { isLoading } = usePageUI();

    useEffect(() => {
        setInitialLoading(false);
    }, []);

    return (
        initialLoading || isLoading ?
            <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box display="flex" flexDirection="column" flexGrow="1" justifyContent="center" alignItems="center">
                    <CircularProgress size={72} />
                </Box>
            </div> :
            children
    );
}