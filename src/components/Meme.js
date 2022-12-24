import styles from "../Styles/Meme.module.css";
import memeData from "../memeData";

const Meme = () => {
  function handleClick() {
    const memesArray = memeData.data.memes;
    const randomindex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomindex].url;
    console.log(url);
  }
  return (
    <main>
      <div className={styles.form}>
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
        <button onClick={handleClick} className={styles.form_button}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
};

export default Meme;
