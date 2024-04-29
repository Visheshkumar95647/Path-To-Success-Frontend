import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./App.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); 

  const validateUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: pass,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        navigate("/getalljob");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred");
    }
  };

  useEffect(() => {
    // Remove the token from localStorage if it exists
    const token = localStorage.getItem('token');
    if (token && window.location.href === localStorage.getItem('currentUrl')) {
      localStorage.removeItem('token');
      console.log("Token removed from localStorage");
    }

    // Store the current URL in localStorage
    localStorage.setItem('currentUrl', window.location.href);
  }, []);

  return (
    <>
      <main>
        <div className="form" data-aos="flip-right">
          <h1>User-Login</h1>

          <hr />
          <div className="username">
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <hr />
          <div className="pass">
            <input
              type="password"
              placeholder="Enter Your Password "
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>

          <hr />
          <div className="forgot">
            <a href="#">Forgot Account Details ?</a>
          </div>
          <div className="given-captcha">
            <div className="captcha">7f34</div>
            <div className="refresh">
              <img src="refresh.png" alt="" />
            </div>
          </div>

          <hr />
          <div className="enter-captcha">
            <input type="text" placeholder="Enter Captcha" />
          </div>

          <hr />

          <div className="sign">
            <div className="have">
              <button onClick={validateUser}>SIGN IN</button>
            </div>
            <div className="not-have">
              <button>
                {" "}
                <Link style={{ color: "rgba(232,120,0,255)" }} to="/adduser">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="agent" data-aos="flip-left">
          <h1>Agent-Login</h1>

          <hr />
          <div className="username">
            <input type="text" placeholder="User Name" />
          </div>

          <hr />
          <div className="pass">
            <input type="password" placeholder="Enter Your Password " />
          </div>

          <hr />
          <div className="forgot">
            <a href="#">Forgot Account Details ?</a>
          </div>
          <div className="given-captcha">
            <div className="captcha">7f34</div>
            <div className="refresh">
              <img src="refresh.png" alt="" />
            </div>
          </div>

          <hr />
          <div className="enter-captcha">
            <input type="text" placeholder="Enter Captcha" />
          </div>

          <hr />

          <div className="sign">
            <div className="have">
              <button>SIGN IN</button>
            </div>
            <div className="not-have">
              <button>Register</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
