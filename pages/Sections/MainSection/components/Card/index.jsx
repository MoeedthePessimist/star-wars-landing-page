import styles from "./index.module.scss";
import Image from "next/image";

export const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={props.image}
          alt="Card image"
          className={styles.image}
          style={{ width: `${props.width}px`, height: `${props.height}px` }}
        />
      </div>
      <h2>{props.name}</h2>
    </div>
  );
};
