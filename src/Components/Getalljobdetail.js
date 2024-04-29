import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useNavigate } from "react-router-dom";
export default function Getalljobdetail() {
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [allJobTitles, setAllJobTitles] = useState([]);
  const [prodata, setProdata] = useState(null); // Changed from undefined to null
  const navigate = useNavigate();

  // handle log out
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const getalljob = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/getalljob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          jobtitle: searchdata,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        setData(result["ALL-JOb DATA"]);
        // Update all job titles after updating data
        setAllJobTitles(result["ALL-JOb DATA"].map((job) => job.jobtitle));
      } else {
        console.log("DATA not fetched");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  const profiledata = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProdata(data.user);
      } else {
        console.error("Error fetching profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };
  useEffect(() => {
    profiledata();
    getalljob();
    Aos.init({
      duration: 2000,
    });
  }, []);
  const distinct = [...new Set(allJobTitles)];
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getalljob();
    }
  };
  return (
    <>
      <div className="jobs">
        <div className="sticky-parent">
          <div className="left-job">
            <div className="search">
              <input
                type="text"
                className="search-job"
                value={searchdata}
                onChange={(e) => setSearchdata(e.target.value)}
                onKeyPress={handleKeyPress} // Call handleKeyPress on key press
                list="jobtitles"
              />
              <button onClick={getalljob}>Search</button>
            </div>
            <div className="search-box">
              <div className="title-heading">
                <h1>
                  <u>Job-Titles</u>
                </h1>
              </div>
              {distinct.map((searchtitle) => (
                <div className="title" key={searchtitle}>
                  {searchtitle}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-job" data-aos="zoom-in">
          <ul>
            {data.map((job) => (
              <li key={job._id}>
                <div className="before" data-aos="zoom-in">
                  <div className="container">
                    <h1 className="job-title">{job.jobtitle}</h1>
                    <br />
                    <h2 className="job-type">
                      <u>Job-Type</u> : {job.jobtype}
                    </h2>
                    <br />
                    <h3 className="job-mode">
                      {" "}
                      <u>Job-Mode</u> : {job.jobmode}
                    </h3>
                    <br />
                    <h4 className="job-des">
                      {" "}
                      <u>Job-Description</u> : {job.jobdescription}
                    </h4>
                    <br />
                    <h4 className="job-tech">
                      <u>Skills</u> : {job.techskill}
                    </h4>
                    <br />
                    <div className="job-apply">
                      <div className="job-time">
                        <h4>{job.jobduration}</h4>
                        <h4>{job.joblocation}</h4>
                      </div>
                      <div className="job-link">
                        <h4>
                          <button>
                            <a
                              href="http://www.facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Apply
                            </a>
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Profile">
        {prodata && (
          <>
            {prodata.profileImage && (
              <img src={prodata.profileImage} alt="Profile" />
            )}
            <div className="name">{prodata.name}</div>
            <div className="username">{prodata.username}</div>
          </>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}