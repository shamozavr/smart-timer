import styles from "../styles/AddTaskForm.module.css";

function AddTaskForm() {
  return (
    <>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Введи название задачи" />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <input type="number" id="hours" min={0} max={24} />
            <label htmlFor="hours">час</label>
          </div>
          <div className={styles.wrapper}>
            <input type="number" id="min" min={0} max={60} />
            <label htmlFor="min">мин</label>
          </div>
          <div className={styles.wrapper}>
            <input type="number" id="sec" min={0} max={60} />
            <label htmlFor="sec">сек</label>
          </div>
        </div>
        <button>Добавить</button>
      </form>
    </>
  );
}

export default AddTaskForm;
