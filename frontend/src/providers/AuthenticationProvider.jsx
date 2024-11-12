import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import UserModel from "../models/UserModel";
import { jwtDecode } from "jwt-decode";
import API from "../services/API";
import UsersAPI from "../services/UsersAPI";
import { useLoadEffect } from "./PageUIProvider";

const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [token, setToken] = useState(API.storedToken);
  const [user, setUser] = useState();

  const login = useCallback(async (email, password) => {
    const token = await UsersAPI.login({ email, password });
    setToken(token);
  }, []);

  const logout = useCallback(() => setToken(null), []);

  const ctx = useMemo(() => ({ user, login, logout }), [user]);

  useLoadEffect(async () => {
    API.storedToken = token;

    if (token) {
      const { _id } = jwtDecode(token);
      const user = await UserModel.load(_id);
      setUser(user);
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <AuthenticationContext.Provider value={ctx}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const ctx = useContext(AuthenticationContext);
  if (!ctx) throw new Error("useAuthentication must be used within a AuthenticationProvider");
  return ctx;
}