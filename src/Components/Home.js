import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [providerusername, setproviderusername] = useState("");
  const [providerpass, setproviderpass] = useState("");
  const navigate = useNavigate();

  const validateUser = async () => {
    const usergivencap = document.querySelector('.enter-user-captcha input').value;
    const userentercap = document.querySelector('.user-captcha').textContent;
    if (usergivencap === userentercap) {
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
          alert("Invalid credentials");
         usercaptcha(); 
        }
      } catch (error) {
        console.log({"Error fetching profile data:": error});
      }
    } else {
      alert("Enter Valid Captcha");
      document.querySelector('.enter-user-captcha input').value = ""; 
      usercaptcha(); 
    }
  };
  
  const validateProvider = async () => {
    const providergivencap = document.querySelector('.enter-provider-captcha input').value;
    const providerentercap = document.querySelector('.provider-captcha').textContent;
    if(providergivencap === providerentercap){
      try {
        const response = await fetch("http://localhost:5000/providerlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: providerusername,
            password: providerpass,
          }),
        });
        const result = await response.json();
        if (response.ok) {
          localStorage.setItem("providertoken", result.token);
          navigate("/postjob");
        } else {
          alert("Invalid credentials");
          providercaptcha();
        }
      } catch (error) {
        console.log({"Error fetching profile data:": error});
        
      }
    }else{
      alert("Enter Valid Captcha");
      document.querySelector('.enter-provider-captcha input').value = ""; 
      providercaptcha(); 
    }
  };
  const usercaptcha = () => {
    let s = ""; 
    const array = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
        '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    for (let i = 0; i < 6; i++) { 
        let a = Math.floor(Math.random() * array.length); 
        s += array[a];
    }
  const userc = document.querySelector('.user-captcha');
  userc.textContent = s;  
};
const providercaptcha = () => {
  let s = ""; 
  const array = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
      '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  for (let i = 0; i < 6; i++) { 
      let a = Math.floor(Math.random() * array.length); 
      s += array[a];
  }
  const providerc = document.querySelector('.provider-captcha');
  providerc.textContent = s;
};

  useEffect(() => {
    usercaptcha();
    providercaptcha();
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
          {/* <div className="forgot"><a href="">Forgot account details?</a></div> */}
          <div className="given-captcha">
            <div className="user-captcha"></div>
            <button className="refresh" onClick={usercaptcha}>
              <img src="refresh.png" alt="" />
            </button>
          </div>

          <hr />
          <div className="enter-user-captcha">
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
            <input
              type="text"
              placeholder="User Name"
              value={providerusername}
              onChange={(e) => {
                setproviderusername(e.target.value);
              }}
            />
          </div>

          <hr />
          <div className="pass">
            <input
              type="password"
              placeholder="Enter Your Password "
              value={providerpass}
              onChange={(e) => {
                setproviderpass(e.target.value);
              }}
            />
          </div>

          <hr />
          {/* <div className="forgot"><a href="">Forgot account details?</a></div> */}
          <div className="given-captcha">
            <div className="provider-captcha"></div>
            <button className="refresh" onClick={providercaptcha}>
              <img src="refresh.png" alt="" />
            </button>
          </div>

          <hr />
          <div className="enter-provider-captcha">
            <input type="text" placeholder="Enter Captcha" />
          </div>

          <hr />

          <div className="sign">
            <div className="have">
              <button onClick={validateProvider}>SIGN IN</button>
            </div>
            <div className="not-have">
              <button>
                <Link
                  style={{ color: "rgba(232,120,0,255)" }}
                  to="/addprovider"
                >
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
