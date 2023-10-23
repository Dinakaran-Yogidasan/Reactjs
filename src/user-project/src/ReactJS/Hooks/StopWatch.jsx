import React from "react";
import { useState, useEffect } from "react";

const StopWatch = ({ name, handleSubmit }) => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <b>{name}</b>
      <button onClick={handleSubmit}>NAME</button>
      <h1>{formatTime(time)}</h1>
      {!isRunning ? (
        <button type="button" onClick={handleStart}>
          START
        </button>
      ) : (
        <button type="button" onClick={handlePause}>
          PAUSE
        </button>
      )}
      <button type="button" onClick={handleReset}>
        RESET
      </button>
    </>
  );
};
export default StopWatch;
