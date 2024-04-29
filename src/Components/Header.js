import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Components/App.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Header() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const [typewriter] = useTypewriter({
    words: [" Achieve Success", " for Success"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="logo-back" data-aos="slide-right">
        <img src="bg-final.png" alt="" />
      </div>
      <div className="start">
        <div className="left">
          <div className="logo" data-aos="zoom-in">
            <img src="pathe.jpg" alt="" />
          </div>
          <div className="slogan" data-aos="zoom-in">
            <h1>
              Get Ready
              <span style={{ color: "rgba(232,120,0,255)" }}>{typewriter}</span>
              <span style={{ color: "rgba(232,120,0,255)" }}>
                <Cursor />
              </span>
            </h1>
          </div>
          <div className="man" data-aos="zoom-in">
            <img src="mmm.jpeg" alt="" />
          </div>
        </div>
        <div className="right" data-aos="zoom-out">
          <div className="cart" data-aos-duration="2000">
            <div>
              <h1>Climbing the Career Ladder</h1>
            </div>
            <div>
              <h5>
                Success is not the key to happiness. Happiness is the key to
                success. If you love what you are doing, you will be successful.
                Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle.True
                success is often born out of resilience in the face of
                adversity. It's the ability to adapt, evolve, and turn setbacks
                into stepping stones towards achieving one's goals.
              </h5>
            </div>
            <div className="write-by">
              <p>- Albert Schweitzer</p>
              <hr />
            </div>
          </div>
          <div className="cup">
            <img src="cup.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
