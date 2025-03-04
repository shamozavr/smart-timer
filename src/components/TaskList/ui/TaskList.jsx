import { useEffect, useState } from "react";
import styles from "../styles/TaskList.module.css";
function TaskList({ className, tasks, isControlsDisplayed }) {
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
          console.log(isActive);
          return (
            <li
              key={task.id}
              className={styles.listItem}
              style={{
                background: `linear-gradient(to right, cyan ${Math.floor(
                  ((task.end - timeStamp) / (task.end - task.start)) * 100
                )}%, white 0%)`,
              }}
            >
              <span>{task.name}</span>
              {isControlsDisplayed && isActive && <div>timer</div>}
              {isControlsDisplayed && isActive && (
                <div>
                  <button>done</button>
                  <button>play/pause</button>
                  <button>cancel</button>
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
