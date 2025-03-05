import { useState } from "react";
import TaskList from "../../TaskList/ui/TaskList";
import AddTaskForm from "../../AddTaskForm/ui/AddTaskForm";

import appStyles from "../styles/App.module.css";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Задача 1",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 100,
      status: "active",
    },
    {
      id: 2,
      name: "Задача 2",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 4,
      status: "active",
    },
    {
      id: 3,
      name: "Задача 3",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 200,
      status: "failed",
    },
    {
      id: 4,
      name: "Задача 4",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 100,
      status: "done",
    },
    {
      id: 5,
      name: "Задача 5",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 50,
      status: "failed",
    },
    {
      id: 6,
      name: "Задача 6",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 200,
      status: "done",
    },
    {
      id: 7,
      name: "Задача 7",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 100,
      status: "done",
    },
    {
      id: 8,
      name: "Задача 8",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 50,
      status: "active",
    },
    {
      id: 9,
      name: "Задача 9",
      start: new Date().getTime(),
      end: new Date().getTime() + 1000 * 200,
      status: "active",
    },
  ]);

  function completeTask(id) {
    let newTasks = [...tasks];
    newTasks[newTasks.findIndex((el) => el.id === id)].status = "done";
    setTasks(newTasks);
  }

  function cancelTask(id) {
    let newTasks = [...tasks];
    const index = newTasks.findIndex((el) => el.id === id);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function failTask(id) {
    let newTasks = [...tasks];
    newTasks[newTasks.findIndex((el) => el.id === id)].status = "failed";
    setTasks(newTasks);
  }

  return (
    <div className={appStyles.container}>
      <h1 className={appStyles.header}>Smart Timer</h1>
      {/* <NameInput />
      <TimeInput />
      <AddTaskButton /> */}
      <AddTaskForm />
      <TaskList
        className={appStyles.list}
        tasks={tasks.filter((el) => el.status === "active")}
        isControlsDisplayed={true}
        completeTask={completeTask}
        cancelTask={cancelTask}
        failTask={failTask}
      />
      <div className={appStyles.listsWrapper}>
        <div className={appStyles.listWrapper}>
          <h2 className={appStyles.header}>Выполненные</h2>
          <TaskList
            className={appStyles.listDone}
            tasks={tasks.filter((el) => el.status === "done")}
          />
        </div>
        <div className={appStyles.listWrapper}>
          <h2 className={appStyles.header}>Проваленные</h2>
          <TaskList
            className={appStyles.listFailed}
            tasks={tasks.filter((el) => el.status === "failed")}
          />
        </div>
      </div>
    </div>
  );
}
