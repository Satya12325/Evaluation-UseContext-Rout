import {useState,useContext} from 'react'
import {AppContext} from "../Context/AppContextProvider"
import {useHistory} from "react-router-dom"

export default function Registration(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {handleLogin} = useContext(AppContext);
    const history = useHistory();
    const onSubmit = ()=>{
        handleLogin(name)
        history.push("/")
    }

    return(
        <>
        <div>
            <lable>Enter your Full Name : </lable>
            <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Full Name"

            />
            <label>Email :</label>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            />
            <label>Password :</label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            />
        </div>
        <button onClick ={onSubmit}>Submit</button>
        </>
    )

}