import styles from "./index.module.scss";
import Image from "next/image";

export const TeamCircle = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} alt="Team Circle" className={styles.teamImage} />
      <h2 className={styles.teamCircleTitle}>{props.name}</h2>
    </div>
  );
};
