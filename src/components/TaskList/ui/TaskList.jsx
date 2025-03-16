import styles from "../styles/TaskList.module.css";
import Task from "../../Task/ui/Task";

function TaskList({ className, tasks, completeTask, cancelTask, failTask }) {
  return (
    <div className={className}>
      <ul className={styles.taskList}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              completeTask={completeTask}
              cancelTask={cancelTask}
              failTask={failTask}
            />
          );
        })}
      </ul>
    </div>
    // <div className={className}>
    //   <ul className={styles.taskList}>
    //     {tasks.map((task) => {
    //       const isActive = task.status === "active";
    //       let deltaTimeSeconds = Math.trunc((task.end - timeStamp) / 1000);
    //       let hours = Math.trunc(deltaTimeSeconds / 3600);
    //       let minutes = Math.trunc((deltaTimeSeconds - hours * 3600) / 60);
    //       let seconds = Math.trunc(
    //         deltaTimeSeconds - (hours * 3600 + minutes * 60)
    //       );
    //       return (
    //         <li
    //           key={task.id}
    //           className={styles.listItem}
    //           style={
    //             isActive
    //               ? {
    //                   background: `linear-gradient(to right, cyan ${Math.ceil(
    //                     ((task.end - timeStamp) / (task.end - task.start)) * 100
    //                   )}%, white 0%)`,
    //                 }
    //               : {
    //                   background: "white",
    //                 }
    //           }
    //         >
    //           <span>{task.name}</span>
    //           {isActive && (
    //             <div>
    //               {`${hours > 0 ? `${hours}h ` : ""}` +
    //                 `${minutes > 0 ? `${minutes}m ` : ""}` +
    //                 `${seconds > 0 ? `${seconds}s ` : "0s"}`}
    //             </div>
    //           )}
    //           {isActive && (
    //             <div>
    //               <button
    //                 onClick={() => {
    //                   completeTask(task.id);
    //                 }}
    //               >
    //                 done
    //               </button>
    //               <button>play/pause</button>
    //               <button
    //                 onClick={() => {
    //                   cancelTask(task.id);
    //                 }}
    //               >
    //                 cancel
    //               </button>
    //             </div>
    //           )}
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}

export default TaskList;
