import React, { useState } from "react";
import styles from "./TestTask.module.scss";

function TestTask() {
  const [start, setStart] = useState("Go!");
  const [counter, setCounter] = useState(1);
  const [changeColor, setChangeColor] = useState(true);

  const changeCouter = () => {
    setStart("");
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 2000);
    setTimeout(() => {
      setStart("Go!");
      setCounter(1);
    }, 3000);
  };

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: changeColor ? "white" : "rgb(62, 118, 213)" }}
      >
        <div
          className={styles.pentagon}
          onClick={changeCouter}
          onMouseEnter={() => setChangeColor(false)}
          onMouseLeave={() => setChangeColor(true)}
        >
          {start ? (
            <div className={styles.start}> {start} </div>
          ) : (
            <div className={styles.counter}>{counter}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default TestTask;
