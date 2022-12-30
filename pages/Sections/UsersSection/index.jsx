import styles from "./index.module.scss";
import { UserCard } from "./components/UserCard";
import { UserInfo } from "./components/UserInfo";
import User1 from "../../../public/user1.jpg";
import User2 from "../../../public/user2.jpg";
import User3 from "../../../public/user3.jpg";
import User4 from "../../../public/user4.jpg";
import { useState } from "react";

export const UsersSection = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      image: User1,
      name: "User 1",
      active: true,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaeratincidunt mollitia sit odio. Iste dolorem sed omnis aliasnecessitatibus soluta commodi corrupti vero beatae nisi, magnamdignissimos laborum architecto sapiente! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Quae fugit, dolore autem, aliquamitaque neque doloremque tempore porro beatae sit omnis accusantiumnostrum et exercitationem placeat dolores. Obcaecati, temporenecessitatibus? Lorem ipsum dolor sit amet consectetur adipisicingelit. Unde, tempore non earum facilis illo officiis labore, distinctiodolorem vitae consequuntur, dolorum deleniti. Consequatur beataeprovident vel architecto iure placeat assumenda.",
    },
    {
      id: 2,
      image: User2,
      name: "User 2",
      active: false,

      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaeratincidunt mollitia sit odio. Iste dolorem sed omnis aliasnecessitatibus soluta commodi corrupti vero beatae nisi, magnamdignissimos laborum architecto sapiente! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Quae fugit, dolore autem, aliquamitaque neque doloremque tempore porro beatae sit omnis accusantiumnostrum et exercitationem placeat dolores. Obcaecati, temporenecessitatibus? Lorem ipsum dolor sit amet consectetur adipisicingelit. Unde, tempore non earum facilis illo officiis labore, distinctiodolorem vitae consequuntur, dolorum deleniti. Consequatur beataeprovident vel architecto iure placeat assumenda.",
    },
    {
      id: 3,
      image: User3,
      active: false,
      name: "User 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaeratincidunt mollitia sit odio. Iste dolorem sed omnis aliasnecessitatibus soluta commodi corrupti vero beatae nisi, magnamdignissimos laborum architecto sapiente! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Quae fugit, dolore autem, aliquamitaque neque doloremque tempore porro beatae sit omnis accusantiumnostrum et exercitationem placeat dolores. Obcaecati, temporenecessitatibus? Lorem ipsum dolor sit amet consectetur adipisicingelit. Unde, tempore non earum facilis illo officiis labore, distinctiodolorem vitae consequuntur, dolorum deleniti. Consequatur beataeprovident vel architecto iure placeat assumenda.",
    },
    {
      id: 4,
      image: User4,
      active: false,
      name: "User 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaeratincidunt mollitia sit odio. Iste dolorem sed omnis aliasnecessitatibus soluta commodi corrupti vero beatae nisi, magnamdignissimos laborum architecto sapiente! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Quae fugit, dolore autem, aliquamitaque neque doloremque tempore porro beatae sit omnis accusantiumnostrum et exercitationem placeat dolores. Obcaecati, temporenecessitatibus? Lorem ipsum dolor sit amet consectetur adipisicingelit. Unde, tempore non earum facilis illo officiis labore, distinctiodolorem vitae consequuntur, dolorum deleniti. Consequatur beataeprovident vel architecto iure placeat assumenda.",
    },
  ]);

  const [activeUser, setActiveUser] = useState(images[3]);

  const onSelectImage = (id) => {
    setImages((prevState) => {
      return prevState.map((image) => {
        if (image.id === id) {
          setActiveUser(image);
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
      <UserInfo
        image={activeUser.image}
        name={activeUser.name}
        id={activeUser.id}
        description={activeUser.description}
      />
      <div className={styles.imagesContainer}>
        {images.map((user) => {
          return (
            <UserCard
              image={user.image}
              name={user.name}
              id={user.id}
              active={user.active}
              onSelectImage={onSelectImage}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
