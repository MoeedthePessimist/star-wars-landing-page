import { HeroText } from "./components/HeroText";
import styles from "./index.module.scss";

export const TextSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.textContainer}>
        <HeroText />
      </div>
    </div>
  );
};
