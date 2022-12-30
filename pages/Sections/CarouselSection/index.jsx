import styles from "./index.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ImageContainer } from "./components/ImageContainer";
import TeamImage1 from "../../../public/team-circle-1.jpg";
import TeamImage2 from "../../../public/team-circle-2.jpg";
import TeamImage3 from "../../../public/team-circle-3.jpg";
import CardImage1 from "../../../public/team-card-2.jpg";
import { useEffect, useState } from "react";

export const CarouselSection = () => {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState([
    {
      id: 1,
      image: TeamImage1,
      name: "TEAM 1",
      active: true,
    },
    {
      id: 2,
      image: TeamImage2,
      name: "TEAM 2",

      active: false,
    },
    {
      id: 3,
      image: TeamImage3,
      name: "TEAM 3",

      active: false,
    },
    {
      id: 4,
      image: CardImage1,
      name: "TEAM 4",
      active: false,
    },
  ]);

  useEffect(() => {
    onArrowPress(count);
  }, [count]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  const onArrowPress = (id) => {
    setImages((prevState) => {
      return prevState.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            active: true,
          };
        } else {
          return {
            ...image,
            active: false,
          };
        }
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.imagesContainer}>
        <FaArrowLeft
          className={styles.arrow}
          onClick={() => {
            setCount((prevState) => {
              return prevState === 0 ? 0 : prevState - 1;
            });
          }}
        />
        {images.map((image) => {
          return (
            <ImageContainer
              key={image.id}
              name={image.name}
              image={image.image}
              active={image.active}
              id={image.id}
              onImagePress={onArrowPress}
            />
          );
        })}
        <FaArrowRight
          className={styles.arrow}
          onClick={() => {
            setCount((prevState) => {
              return prevState === images.length ? 0 : prevState + 1;
            });
          }}
        />
      </div>
    </div>
  );
};
