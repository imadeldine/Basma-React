import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        const result = await fetch("http://localhost:8000/api/AddCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email: email,
                phone: phone,
                password: password,
            }),
        });
        if(result.status === 200){
            navigate('/home');
        }
    }
  return (
    <div className="main_container">
      <div className="center_filed">
          <h1>Basma</h1>
          <form method="POST" onSubmit={async (e) => await register(e)}>
              <div className="txt_field">
                  <input type="text" name="firstname" required value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                  <span></span>
                  <label>firstname</label>
              </div>
              <div className="txt_field">
                  <input type="text" name="lastname" required value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                  <span></span>
                  <label>lastname</label>
              </div>
              <div className="txt_field">
                  <input type="email" name="email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  <span></span>
                  <label>Email</label>
              </div>
              <div className="txt_field">
                  <input type="Phone" name="Phone" required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                  <span></span>
                  <label>Phone</label>
              </div>
              <div className="txt_field">
                  <input type="password" name="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                  <span></span>
                  <label>Password</label>
              </div>
              
              <input name="submit" type="Submit" value="Sign Up"/>
              <div className="signup_link">
              </div>
          </form>
      </div>
  </div>
  );
}
