import { AppContext } from "../Context/AppContextProvider";
import {useContext} from "react"



export default function Navebar(){

    const {isAuth,token} = useContext(AppContext)
    return(
        <>
         <div style={{ background:"blue", height:"40px", width:"100%"}}>
            <h3 style={{ color:"white",textAlign: "center"}}>
            {isAuth ? `user is ${token}` : "user is Not logged in"}
            </h3>
        </div>
        </>
    )
}