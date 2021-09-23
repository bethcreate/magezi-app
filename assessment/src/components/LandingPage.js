// function LandingPage() {
//     // const handleClick = () =>{
//     //     console.log('button clicked')
//     // }
//     return (
//         <form className="my-form">
//         <div className="magezi">
//             <h1>MAGEZI FAMILY</h1>
//             <img src="/images/magezi.jpg"alt="Logo" />
//             <h3 className="rota">Task Rota App</h3>
//             {/* <button onClick={handleClick()}>Register/Login</button> */}
//             <button>
//                
//             </button>
//         </div>
//         </form>
//     )
// }


// export default LandingPage

import {useState,useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import '../App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function LandingPage() {

const [taskList,settaskList]=useState([]);

let history = useHistory();

useEffect(()=>{
Axios.get("http://localhost:5000/api/get").then((data)=>{
settaskList(data.data)
});
},[])

return (
    <form className="my-form">
        <div className="magezi">
            <h1>MAGEZI FAMILY</h1>
            <img src="/images/magezi.jpg" />
            <h3 className="rota">Task Rota App</h3>

            <button>
            <Link to= "/Register" className="btn">Register/Login</Link>
            </button>
            {/* {taskList.map((val,key)=>{
                return(
                    <div className="magezi" >
            
           <h1 className="child-name" onClick={()=>(history.push(`/child/${val.id}`))}>{val.name}</h1>
            <p>{val.post_text.length > 300 ? val.post_text.substring(0,300)+ " ..." : val.child_text}</p>
            <h4>{val.name}</h4> */}

        
            </div>
           {/* )  })}  
          </div>     */}
        
        </form>
    )}
    

export default LandingPage

