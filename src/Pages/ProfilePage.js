import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../components/Common/Header";
import { NavLink,useNavigate } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";

const ProfilePage = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
  useEffect(() =>{
    if(token){
      const user = JSON.parse(localStorage.getItem('userData'));
      setName(user.fName)
      setEmail(user.email)
    }
    else{
      navigate('/signup')
    }
  }, [token])
  
  return (
    <>
      <Header isHeaderBg={true}/>
    <div  className="profile">
      <h1>{name}</h1>
      <h1>{email}</h1>
     {!token && <NavLink to={'/signup'}>Login</NavLink>}
      
    </div>
    </>
  );
};

export default ProfilePage;
