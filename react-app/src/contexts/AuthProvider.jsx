import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFakeLogin from "../hooks/useFakeLogin";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginErr, setLoginErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { fakeLogin, generateToken } = useFakeLogin();

  const login = useCallback(
    async (from) => {
      setLoginErr(null);
      setIsLoading(true);
      try {
        const response = await fakeLogin();
        setUser({ ...response.data, accessToken: generateToken() });

        //refreshToken is stored in local storage here, but should be in a secure/http only cookies(
        //prevent js from accessing)
        localStorage.setItem("refreshToken", `refresh: ${generateToken()}`);
        console.log("set user on first log in");
        navigate(from, { replace: true });
      } catch (error) {
        setLoginErr(error);
      } finally {
        setIsLoading(false);
      }
    },
    [generateToken, navigate, fakeLogin]
  );

  const logout = useCallback(() => {
    //typically Post to /logout endpoint
    localStorage.removeItem("refresh token");
    setUser(null);
    navigate("/");
  }, [navigate]);

  const value = {
    user,
    setUser,
    login,
    logout,
    loginErr,
    setLoginErr,
    isLoading,
    setIsLoading,
  };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export default AuthProvider;


// What happens when user clicks on login  and what useeffect does the role in and the authentication 
// authentication compoenent has many components