import { useState } from "react";
import styles from "../styles/AddTaskForm.module.css";

function AddTaskForm({ addTask }) {
  const [nameValue, setNameValue] = useState("");
  const [hoursValue, setHoursValue] = useState(0);
  const [minutesValue, setMinutesValue] = useState(0);
  const [secondsValue, setSecondsValue] = useState(0);

  function clickHandler(evt) {
    evt.preventDefault();
    if (nameValue && (hoursValue || minutesValue || secondsValue)) {
      const totalStamp =
        new Date().getTime() +
        (hoursValue * 3600 + minutesValue * 60 + secondsValue * 1) * 1000;
      addTask(nameValue, totalStamp);
      setNameValue("");
      setHoursValue(0);
      setMinutesValue(0);
      setSecondsValue(0);
      document.getElementById("taskName").focus();
    }
  }

  return (
    <>
      <form action="" className={styles.form}>
        <input
          onChange={(e) => setNameValue(e.target.value)}
          autoComplete="off"
          id="taskName"
          type="text"
          required
          value={nameValue}
          placeholder="Введи название задачи"
        />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <input
              onChange={(e) => setHoursValue(e.target.value)}
              type="number"
              value={hoursValue}
              id="hours"
              min={0}
            />
            <label htmlFor="hours">час</label>
          </div>
          <div className={styles.wrapper}>
            <input
              onChange={(e) => setMinutesValue(e.target.value)}
              type="number"
              value={minutesValue}
              id="min"
              min={0}
              max={59}
            />
            <label htmlFor="min">мин</label>
          </div>
          <div className={styles.wrapper}>
            <input
              onChange={(e) => setSecondsValue(e.target.value)}
              type="number"
              value={secondsValue}
              id="sec"
              min={0}
              max={59}
            />
            <label htmlFor="sec">сек</label>
          </div>
        </div>
        <button type="submit" onClick={(evt) => clickHandler(evt)}>
          Добавить
        </button>
      </form>
    </>
  );
}

export default AddTaskForm;
