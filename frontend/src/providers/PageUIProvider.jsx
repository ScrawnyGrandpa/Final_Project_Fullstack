import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageUIContext = createContext();

export default function PageUIProvider({ children }) {
    const location = useLocation();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [notification, setNotification] = useState();
    const [loadingCount, setLoadingCount] = useState(0);

    const isLoading = useMemo(() => loadingCount > 0, [loadingCount]);
    const setIsLoading = useCallback(value => {
        if (value) {
            setLoadingCount(prev => prev + 1);
        } else {
            setLoadingCount(prev => Math.max(0, prev - 1));
        }
    }, []);

    const ctx = useMemo(() => ({
        isLoading,
        setIsLoading,
        setLoadingCount,
        notification,
        setNotification,
    }), [isLoading, notification]);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            setLoadingCount(0);
        }
    }, [location]);

    return (
        <PageUIContext.Provider value={ctx}>
            {children}
        </PageUIContext.Provider>
    );
}

export function usePageUI() {
    const ctx = useContext(PageUIContext);
    if (!ctx) throw new Error("usePageUI must be used within a PageUIProvider");
    return ctx;
}

export function useErrorCallback(callback, deps) {
    const { setNotification } = usePageUI();

    return useCallback(async (...args) => {
        try {
            await callback(...args);
        } catch (e) {
            setNotification({ message: e.message, severity: "error" });
        }
    }, deps);
}

export function useLoadCallback(callback, deps) {
    const { setIsLoading } = usePageUI();
    const errorCallback = useErrorCallback(callback, deps);

    return useCallback(async (...args) => {
        setIsLoading(true);
        await errorCallback(...args);
        setIsLoading(false);
    }, deps);
}

export function useLoadEffect(effect, deps) {
    const callback = useLoadCallback(effect, deps);

    useLayoutEffect(() => {
        callback();
    }, deps);
}