import styles from "../Styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftside}>
        <img
          src="/images/Troll Face.png"
          alt="memeface"
          className={styles.image}
        />
        <h1 className={styles.lefth1}>MemeGenerator</h1>
      </div>
      <div>
        <h2 className={styles.lefth2}>React Course - Project 3</h2>
      </div>
    </div>
  );
};

export default Header;
