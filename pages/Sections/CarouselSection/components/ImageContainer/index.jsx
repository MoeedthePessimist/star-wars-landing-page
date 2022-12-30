import styles from "./index.module.scss";
import Image from "next/image";

export const ImageContainer = (props) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.onImagePress(props.id);
      }}
    >
      <div className={props.active && styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.name}
          className={props.active ? styles.image : styles.isNotActive}
        />
      </div>
      <h2>{props.name}</h2>
    </div>
  );
};
