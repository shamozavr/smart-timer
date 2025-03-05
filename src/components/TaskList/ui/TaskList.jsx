import { useEffect, useState } from "react";
import styles from "../styles/TaskList.module.css";

function TaskList({ className, tasks, completeTask, cancelTask }) {
  const [timeStamp, setTimeStamp] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(
      () => setTimeStamp(new Date().getTime()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={className}>
      <ul className={styles.taskList}>
        {tasks.map((task) => {
          const isActive = task.status === "active";
          // console.log(isActive);
          let deltaTimeSeconds = Math.trunc((task.end - timeStamp) / 1000);
          let hours = Math.trunc(deltaTimeSeconds / 3600);
          let minutes = Math.trunc((deltaTimeSeconds - hours * 60) / 60);
          let seconds = Math.trunc(
            deltaTimeSeconds - (hours * 60 + minutes * 60)
          );

          return (
            <li
              key={task.id}
              className={styles.listItem}
              style={
                isActive
                  ? {
                      background: `linear-gradient(to right, cyan ${Math.ceil(
                        ((task.end - timeStamp) / (task.end - task.start)) * 100
                      )}%, white 0%)`,
                    }
                  : {
                      background: "white",
                    }
              }
            >
              <span>{task.name}</span>
              {isActive && (
                <div>
                  {`${hours > 0 ? `${hours}hh ` : ""}` +
                    `${minutes > 0 ? `${minutes}mm ` : ""}` +
                    `${seconds > 0 ? `${seconds}s ` : "0s"}`}
                </div>
              )}
              {isActive && (
                <div>
                  <button
                    onClick={() => {
                      completeTask(task.id);
                    }}
                  >
                    done
                  </button>
                  <button>play/pause</button>
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
        })}
      </ul>
    </div>
  );
}

export default TaskList;
