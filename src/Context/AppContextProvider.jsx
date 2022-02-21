import {useState,createContext} from "react";


export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false)
    const [token, setToken] = useState("abcdef");
    const handleLogin = (username) => {
        setIsAuth(true);
        setToken( username);
      };
    
      const value = { token,isAuth, handleLogin };
      return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
    };
    
    export { AppContextProvider };
