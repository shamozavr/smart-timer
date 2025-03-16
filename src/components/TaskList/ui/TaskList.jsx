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
  );
}

export default TaskList;
