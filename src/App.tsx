import React, { useState, useEffect } from "react";
import "./assets/fonts/fonts.css";
import "./App.css";
import logo from "./assets/images/logo.png";
import arrowSVG from "./assets/images/arrow.png";

const App: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(24 * 60 * 60 * 1000);
  const [microseconds, setMicroseconds] = useState<number>(999999);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
        setMicroseconds((microseconds) => (microseconds - 1 + 1000000) % 1000000);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [timeRemaining]);
  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
 
  const formatMicroseconds = (microseconds: number): string => {
    return microseconds.toString().padStart(6, "0");
  };
  const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
  };

  return (
    <div className="App">
      {/* <h1>24-Hour Timer</h1>  */}
      <p className="custom-text">Join our community </p>
      <svg
        className="arrow"
        width="119"
        height="8"
        viewBox="0 0 119 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118.354 4.35355C118.549 4.15829 118.549 3.84171 118.354 3.64645L115.172 0.464466C114.976 0.269204 114.66 0.269204 114.464 0.464466C114.269 0.659728 114.269 0.976311 114.464 1.17157L117.293 4L114.464 6.82843C114.269 7.02369 114.269 7.34027 114.464 7.53553C114.66 7.7308 114.976 7.7308 115.172 7.53553L118.354 4.35355ZM0 4.5H118V3.5H0V4.5Z"
          fill="#FAF0CA"
        />
      </svg>

      <img src={logo} alt="G" className="logo" />
      <h2>
        {formatTime(timeRemaining)}
       
      </h2>
      <h3> {formatMicroseconds(microseconds)}</h3>
      <h4>{formatMicroseconds(microseconds)}</h4>
    </div>
  );
};

export default App;
