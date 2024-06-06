import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProviderRegister() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [companyname, setcompanyname] = useState("");
    const navigate = useNavigate();

    const checkPass = () => {
        if (password !== confirmPassword) {
            alert("Your passwords don't match");
            setPassword("");
            setConfirmPassword("");
        }
    };

    const addProviderDetail = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const providerData = {
            name,
            username,
            email,
            number,
            password,
            companyname
        };

        try {
            const response = await fetch("http://localhost:5000/providerregister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(providerData),
            });

            if (response.ok) {
                alert("User added successfully");
                navigate('/');
                setName("");
                setUsername("");
                setEmail("");
                setNumber("");
                setPassword("");
                setConfirmPassword("");
                setcompanyname("");
            } else {
                const errorData = await response.json();
                alert(errorData.error || "User not added");
            }
        } catch (error) {
            alert("User not added");
        }
    };

    return (
        <div className="registration">
            <div className="reg-img">
                <img src="register.png" alt="Registration" />
            </div>
            <div className="input-fields">
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
                <input
                    type="text"
                    placeholder="Enter Company Name"
                    value={companyname}
                    onChange={(e) => setcompanyname(e.target.value)}
                />
                <button onClick={addProviderDetail}>Register</button>
            </div>
        </div>
    );
}
