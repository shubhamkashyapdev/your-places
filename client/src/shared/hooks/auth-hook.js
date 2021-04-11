import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const useAuth = () => {
  const [isToken, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [tokenExpDate, setTokenExpDate] = useState();

  const loginUser = useCallback((history, uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpDate = new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpDate(tokenExpDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: expirationDate || tokenExpDate.toISOString(),
      })
    );
    if (history) {
      history.push("/");
    }
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.token &&
      new Date(userData.expiration) > new Date()
    ) {
      loginUser(
        null,
        userData.userId,
        userData.token,
        new Date(userData.expiration)
      );
    }
  }, [loginUser]);

  useEffect(() => {
    if (isToken && tokenExpDate) {
      const remainingTime = tokenExpDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [isToken, logout, tokenExpDate]);

  return {
    token: isToken,
    login: loginUser,
    logout,
    userId,
  };
};

export default useAuth;
