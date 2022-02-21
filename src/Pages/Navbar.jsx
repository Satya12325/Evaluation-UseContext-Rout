import { AppContext } from "../Context/AppContextProvider";
import {useContext} from "react"
import {Link} from "react-router-dom";


export default function Navebar(){

    const {isAuth,token} = useContext(AppContext)
    return(
        <>
         <div style={{ background:"blue", height:"60px", width:"100%",display:"flex",justifyContent:"center", }}>
             <Link to="/" style={{color:"white"}}>Home</Link>
            <h3 style={{ color:"white",textAlign: "center",paddingBottom: "10px", marginLeft: "50px"}}>
            {isAuth ? `user is ${token}` : "user is Not logged in"}
            </h3>
        </div>
        </>
    )
}