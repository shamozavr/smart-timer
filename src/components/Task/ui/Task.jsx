import React, { useEffect, useState } from "react";
import styles from "../styles/Task.module.css";

function Task({ task, completeTask, cancelTask, failTask }) {
  const [timeStamp, setTimeStamp] = useState(new Date().getTime());
  const [isActive, setIsActive] = useState(task.status === "active");
  const [isPaused, setIsPaused] = useState(false);
  let deltaTimeSeconds = Math.trunc((task.end - timeStamp) / 1000);
  let hours = Math.trunc(deltaTimeSeconds / 3600);
  let minutes = Math.trunc((deltaTimeSeconds - hours * 3600) / 60);
  let seconds = Math.trunc(deltaTimeSeconds - (hours * 3600 + minutes * 60));

  useEffect(() => {
    if (!isPaused) {
      let timer = setTimeout(() => {
        setTimeStamp((timeStamp) => timeStamp + 1000);
        if (isActive && task.end - timeStamp < 0) {
          setIsActive(false);
          failTask(task.id);
          clearTimeout(timer);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, timeStamp, isPaused]);

  return (
    <li
      className={styles.listItem}
      style={
        isActive && !isPaused
          ? {
              background: `linear-gradient(to right, cyan ${Math.floor(
                ((task.end - timeStamp) / (task.end - task.start)) * 100
              )}%, white 0%)`,
            }
          : isActive && isPaused
          ? {
              background: "grey",
              color: "white",
            }
          : {
              background: "white",
            }
      }
    >
      <span>{task.name}</span>
      {isActive && !isPaused && (
        <div>
          {`${hours > 0 ? `${hours}h ` : ""}` +
            `${minutes > 0 ? `${minutes}m ` : ""}` +
            `${seconds > 0 ? `${seconds}s ` : "0s"}`}
        </div>
      )}
      {isActive && isPaused && (
        <div>
          <span>Paused</span>
        </div>
      )}
      {isActive && (
        <div>
          <button
            onClick={() => {
              setIsActive(false);
              completeTask(task.id);
            }}
          >
            done
          </button>
          <button
            onClick={() => {
              setIsPaused((prev) => !prev);
            }}
          >
            play/pause
          </button>
          <button
            onClick={() => {
              cancelTask(task.id);
            }}
          >
            cancel
          </button>
        </div>
      )}
    </li>
  );
}

export default Task;
