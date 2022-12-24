import styles from "../Styles/Meme.module.css";

const Meme = () => {
  return (
    <div>
      <form className={styles.form}>
        <input
          className={styles.form_input}
          type="text"
          placeholder="Top Text"
        />
        <input
          className={styles.form_input}
          type="text"
          placeholder="Bottom Text"
        />
        <button className={styles.form_button}>Get a new meme image 🖼</button>
      </form>
    </div>
  );
};

export default Meme;
