import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Url";
export default function Useregister() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const checkPass = () => {
    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      setPassword("");
      setConfirmPassword("");
    }
  };
  const addUserDetail = async () => {
    // Create the data object
    const addUserData = {
      name,
      email,
      username,
      number,
      password,
    };
  
    try {
      const response = await fetch(`${baseURL}/userregister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(addUserData), // Convert object to JSON
      });
  
      if (response.ok) {
        alert("User added successfully");
        navigate('/');
        setName("");
        setEmail("");
        setPassword("");
        setNumber("");
        setUsername("");
        setConfirmPassword("");
      } else {
        const result = await response.json(); // Get error message from server
        alert(result.error || "User not added");
      }
    } catch (error) {
      alert("An error occurred. User not added");
    }
  };
  
  return (
    <>
      <div className="registration" >
        <div className="reg-img">
          <img src="register.png" alt="" />
        </div>
        <div className="input-fields">
          {/* Input fields */}
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={username}
        placeholder="Set username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={checkPass}
      />
      <input
        type="number"
        placeholder="Enter your Mobile no."
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* Profile image input */}
      {/* <input type="file" onChange={handleProfileImageChange} /> */}
      <button onClick={addUserDetail}>Register</button>
        </div>
      </div>
    </>
  );
}
