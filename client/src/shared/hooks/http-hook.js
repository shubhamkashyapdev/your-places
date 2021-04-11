import React, { useState, useCallback, useRef, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../shared/context/authContext";

export const useHttpClient = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const activeHttpRequest = useRef([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const authToken = {
    headers: {
      "x-auth-token": token,
    },
  };

  const sendRequest = useCallback(async (url, reqMethod, body = null) => {
    setLoading(true);
    // @todo -> HttpAbortController
    try {
      let res;
      if (reqMethod === "post") {
        res = await axios.post(url, body, config);
      } else if (reqMethod === "get") {
        res = await axios.get(url);
      } else if (reqMethod === "patch") {
        res = await axios.patch(url, body, config);
      } else if (reqMethod === "delete") {
        res = await axios.delete(url, authToken);
        console.log(res);
      } else {
        console.log("no request match");
      }
      setLoading(false);
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      setLoading(false);
      setError(err.response.data.message);
      throw err.response.data;
    }
  }, []);
  const clearError = () => {
    setError(null);
  };
  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};
