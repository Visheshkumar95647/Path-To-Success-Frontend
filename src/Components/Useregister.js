import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Useregister() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null); // State to store the selected profile image
  const navigate = useNavigate();
  const checkPass = () => {
    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      setPassword("");
      setConfirmPassword("");
    }
  };
  const addUserDetail = async () => {
    const formData = new FormData(); // Create a FormData object to send file data
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("number", number);
    formData.append("password", password);
    // formData.append("profileImage", profileImage); // Append the profile image to FormData

    try {
      const response = await fetch("http://localhost:5000/userregister", {
        method: "POST",
        body: formData, // Send FormData instead of JSON.stringify(addUserData)
      });
      if (response.ok) {
        alert("User added successfully");
        navigate('/')
        setName("");
        setEmail("");
        setPassword("");
        setNumber("");
        setUsername("");
        setConfirmPassword("");
        setProfileImage(null); // Reset profile image state after successful submission
      } else {
        alert("User not added");
      }
    } catch (error) {
      alert("User not added");
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
