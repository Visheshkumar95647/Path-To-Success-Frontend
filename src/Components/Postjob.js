import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Url";
export default function Postjob() {
  const [jobtype, setjobtype] = useState("");
  const [joblocation, setjoblocation] = useState("");
  const [jobmode, setjobmode] = useState("");
  const [jobtitle, setjobtitle] = useState("");
  const [techskill, settechskill] = useState("");
  const [jobdescription, setjobdescription] = useState("");
  const [jobduration, setjobduration] = useState("");
  const [jobcompany , setjobcompany] = useState("");
  const [joblink, setjoblink] = useState("");
  const [prodata, setProdata] = useState(null);
  const navigate = useNavigate();
  const providertoken = localStorage.getItem("providertoken");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const addjobdetail = {
      jobtype,
      joblocation,
      jobmode,
      jobtitle,
      techskill,
      jobdescription,
      jobduration,
      jobcompany,
      joblink,
    };
    const response = await fetch(`${baseURL}/addjob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": providertoken,
      },
      body: JSON.stringify(addjobdetail),
    });
    const result = await response.json();
    if (!response.ok) {
     alert("Some Error occured while Adding")
    }else{
      alert("Job Details Added Successfully")
    }
  };
  const handleLogout = () => {
    const result = window.confirm("Are You Sure for Log Out");
    if (result) {
      localStorage.clear();
      navigate("/");
    }
  };
  const profiledata = async () => {
    try {
      const response = await fetch(`${baseURL}/providerprofile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": providertoken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProdata(data.provider);
      }else{
        alert("User Does Not Exists")
        navigate("/")
      }
    } catch (error) {
      console.log({"Error fetching profile data:": error});
    }
  };
  const profile = () => {
    const profiledrop = document.querySelector(".profile-cross img");
    const profiledetails = document.querySelector(".pro-data");
    const profilebutton = document.querySelector(".profile-button");
    const profilecross = document.querySelector(".profile-cross");
    profilebutton.addEventListener("click", () => {
      profiledetails.style.display = "flex";
      profilebutton.style.display = "none";
      profiledrop.style.display = "block";
    });
    profilecross.addEventListener("click", () => {
      profiledetails.style.display = "none";
      profiledrop.style.display = "none";
      profilebutton.style.display = "block";
    });
  };
  useEffect(() => {
    profiledata();
  }, []);
  return (
    <>
      <div className="main-post">
        <div className="post-head">
          <h1 className="post-head">
            <u>:Enter Job Details</u>
          </h1>
        </div>
        <div className="input-fields">
          <input
            type="text"
            placeholder="jobtype"
            value={jobtype}
            onChange={(e) => {
              setjobtype(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="joblocation"
            value={joblocation}
            onChange={(e) => {
              setjoblocation(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="jobmode"
            value={jobmode}
            onChange={(e) => {
              setjobmode(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="jobtitle"
            value={jobtitle}
            onChange={(e) => {
              setjobtitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="techskill"
            value={techskill}
            onChange={(e) => {
              settechskill(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="jobdescription"
            value={jobdescription}
            onChange={(e) => {
              setjobdescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="jobduration"
            value={jobduration}
            onChange={(e) => {
              setjobduration(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={jobcompany}
            onChange={(e) => {
              setjobcompany(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="joblink"
            value={joblink}
            onChange={(e) => {
              setjoblink(e.target.value);
            }}
          />
          <button onClick={handlesubmit}>submit</button>
        </div>
      </div>
      {/* Profile */}

      <div className="Profile">
        <div className="profile-section">
          <button className="profile-cross">
            <img src="cross-pro.png" alt="" />
          </button>
          <div>
            <button onClick={profile} className="profile-button">
              <img src="profile.png" alt="" />
            </button>
          </div>
        </div>
        <div className="pro-data">
          <div>
            <img src="user.png" alt="" className="user-profile" />
          </div>
          {prodata && (
            <div>
              <div className="name">{prodata.name}</div>

              <div className="username">
                <u>{prodata.username}</u>
              </div>
            </div>
          )}
          <div className="Button">
            <button className="changepass">Change Password</button>
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
