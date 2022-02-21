import {useState} from "react"
import {useHistory} from "react-router-dom"


export default function Prerequsite() {
    const [attend,setAttend] = useState(false)
    const [laptop,setLaptop] = useState(false);
    const history = useHistory();
    const HandleClick = ()=>{
        if(attend === true && laptop === true) {
            history.push("/registeration")

        }
    }
  return (
    <>
      <div style={{width: "40%", margin:"auto", border: "1px solid black",marginTop:"30px"}}>
        <div>
        <input
          checked={attend}
          onChange={(e) => setAttend(e.target.checked)}          
          type="checkbox"
        />
        <label>Can you attend 90% of the Calss</label>
      </div>
      <div>
      <input
          checked={laptop}
          onChange={(e) => setLaptop(e.target.checked)}        
          type="checkbox"
        />
        <label>Do You have a laptop</label>
      </div>
      <button onClick={HandleClick}>
          Continue
          </button>
     </div>
    </>
  );
}
