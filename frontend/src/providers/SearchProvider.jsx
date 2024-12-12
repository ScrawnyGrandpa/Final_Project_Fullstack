import debounce from "debounce";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [searchText, setSearchText] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const setSearchTextDebounced = useCallback(debounce(setSearchText, 400), []);
    const location = useLocation();

    useEffect(() => {
        setSearchText("");
    }, [location]);

    const ctx = useMemo(() => ({
        searchText,
        setSearchText,
        showSearch,
        setShowSearch,
        setSearchTextDebounced
    }), [searchText, showSearch]);

    return (
        <SearchContext.Provider value={ctx}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useSearch must be used within a SearchContext");
    return ctx;
}