import Image from "next/image";
import styles from "./index.module.scss";

export const UserInfo = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.image} className={styles.image} alt={"users image"} />
      <div className={styles.textContainer}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
