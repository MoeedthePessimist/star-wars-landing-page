import styles from "./index.module.scss";
import Image from "next/image";

export const UserCard = (props) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.onSelectImage(props.id);
      }}
    >
      <div className={props.active && styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.name}
          className={props.active ? styles.image : styles.isNotActive}
        />
      </div>
    </div>
  );
};
