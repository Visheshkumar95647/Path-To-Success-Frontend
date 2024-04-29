import React, { useState } from 'react'

export default function Postjob() {
    const [jobtype , setjobtype] = useState("");
    const [joblocation , setjoblocation] = useState("");
    const [jobmode , setjobmode] = useState("");
    const [jobtitle , setjobtitle] = useState("");
    const [techskill , settechskill] = useState("");
    const [jobdescription , setjobdescription] = useState("");
    const [jobduration , setjobduration] = useState("");
    const [joblink , setjoblink] = useState("");
    const handlesubmit = async (e)=>{
        e.preventDefault()
        const addjobdetail = {
            jobtype,
            joblocation,
            jobmode,
            jobtitle,
            techskill,
            jobdescription,
            jobduration,
            joblink,
          };
        const response = await fetch("http://localhost:5000/addjob" , {
            method : "POST",
            body :JSON.stringify(addjobdetail),
            headers : { 
                "Content-Type" : "application/json",
    
            }
        });
        const result = await  response.json();
        if(!response.ok){
            console.log(result.error);
        }else{
            console.log(result)
        }
    }
    return (
    <>
      <input type="text" placeholder='jobtype' value={jobtype} onChange={(e)=>{setjobtype(e.target.value)}}/>
      <input type="text" placeholder='joblocation' value={joblocation} onChange={(e)=>{setjoblocation(e.target.value)}}/>  
      <input type="text" placeholder='jobmode' value={jobmode} onChange={(e)=>{setjobmode(e.target.value)}}/>
      <input type="text" placeholder='jobtitle' value={jobtitle} onChange={(e)=>{setjobtitle(e.target.value)}}/>
      <input type="text" placeholder='techskill' value={techskill} onChange={(e)=>{settechskill(e.target.value)}}/>
      <input type="text" placeholder='jobdescription' value={jobdescription} onChange={(e)=>{setjobdescription(e.target.value)}}/>
      <input type="text" placeholder='jobduration' value={jobduration} onChange={(e)=>{setjobduration(e.target.value)}}/>
      <input type="text" placeholder='joblink' value={joblink} onChange={(e)=>{setjoblink(e.target.value)}}/>
      <button onClick={handlesubmit}>submit</button>
    </>
  )
}
