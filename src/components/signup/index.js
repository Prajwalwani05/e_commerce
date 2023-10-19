import React ,{useState,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {TokenContext} from '../../context/TokenContext';
import "./style.css";
import Header from "../Common/Header";

const Signup = () => {
    const [user , setUser] = useState({
        fName : "",
        email:"",
        password : "",
    })
    const [error , setError] = useState(null);
    const [success , setSuccess] = useState(null);
    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext);

    function addUser(e) {
        e.preventDefault();
        
        if(!user.username || !user.password || !user.email){
            setError("Please fill all the fields!");
            setSuccess(null);
        }

        const userData = {
            fName: user.fName,
            email: user.email,
            password:user.password
        }

        localStorage.setItem('userData' , JSON.stringify(userData));
        const generatedToken = generateToken();  
        setToken(generatedToken);
        localStorage.setItem("token",JSON.stringify( generatedToken));
        setError("");
        setSuccess("Successfully signin")
        setSuccess("User registered successfully!");
        navigate("/");   
        
        function generateToken() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          }
    }
    


  return (
    <div className="mainSignup">
    <div className="signup">
      <div className="container">
        <h3>Welcome back!👋</h3>
        <h1>Sign in to your account</h1>
        <br />
        <form onSubmit={addUser}>
         <div>
         <label htmlFor="fName">Name</label>
          <input type="text" name="fName" id="fName" onChange={(e)=>{setUser({...user , fName : e.target.value})}} />
         </div>
          <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e)=>{setUser({...user , email : e.target.value})}} />
          </div>
          <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e)=>{setUser({...user , password : e.target.value})}} />
          </div>

          <button className="submitBtn" type="submit">Continue</button>
        </form>
        {setError && <h4 className="error">{error}</h4>}
        {setSuccess && <h4 className="success">{success}</h4>}
      </div>
    </div>
    </div>
  );
};

export default Signup;