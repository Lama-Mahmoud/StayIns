
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    
    const Navigate= useNavigate();
    const [email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [tokens,setToken]=useState([]);


    const handleClick=(event)=>{
        event.preventDefault();
        if(email==="" ||Password===""){
            alert(`please fill all feilds`);
        }
        else{
            const auth=async()=>{    
            try{
                console.log("I'm here")
                const res=await fetch("http://127.0.0.1:3001/api/user/auth/login",{
                method:"POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email:email,
                    password:Password
                }),
                });
                const data=await res.json();
                const x=await res.status;
                console.log("ansr",data);
                if(x!==200){
                    alert("Email or Password is wrong kindly try again");
                }
                else{
                    Navigate("addStay")
                }
                console.log(await data.authToken);
                console.log(await data.id);
                setToken(await data.authToken);
                console.log(tokens)
            }
            catch(err){
                console.log("err1",err);
            }
        }
        auth();
        
    }
}

    return ( <div className="Hero"> 
        <div>
            <label>Email</label><br/>
            <input type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </div> 
        <br/>
        <div>
            <label>Password</label><br/>
            <input type="password" 
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
            <button onClick={handleClick}>login</button>
        </div>
        );
    }

 
export default Login;