import React from 'react'
import '../Components/App.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div className="up">
          <div className="foot-img">
            <img src="pp.png" alt="" />
          </div>
          <div>
            <h4>
              This Platform help in providing opportunities to you for your
              carrer.In this platfrom you will act as a job seeker as well as a
              job provider.Get Success . . .
            </h4>
          </div>
        </div>
        <div className="down">
          <div className="img">
            <div className="img-1">
              <img src="insta.png" alt="" />
            </div>
            <div className="img-2">
              <img src="facebook.png" alt="" />
            </div>
            <div className="img-3">
              <img src="twitter.png" alt="" />
            </div>
          </div>
          <div className="copy">
            <p>copyright @ 2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}
