import { TeamCircle } from "./components/TeamCircles";
import styles from "./index.module.scss";
import TeamImage1 from "../../../public/team-circle-1.jpg";
import TeamImage2 from "../../../public/team-circle-2.jpg";
import TeamImage3 from "../../../public/team-circle-3.jpg";
import CardImage1 from "../../../public/team-card-2.jpg";
import {
  BsDiscord,
  BsTwitch,
  BsYoutube,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import { Card } from "./components/Card";

export const MainSection = () => {
  const icons = [
    { icon: BsDiscord },
    { icon: BsTwitch },
    { icon: BsYoutube },
    { icon: BsInstagram },
    { icon: BsTwitter },
    { icon: FaTiktok },
  ];

  const circles = [
    {
      name: "TEAM 1",
      image: TeamImage1,
    },
    {
      name: "TEAM 2",
      image: TeamImage2,
    },
    {
      name: "TEAM 3",
      image: TeamImage3,
    },
  ];

  const cards = [
    {
      name: "TEAM",
      image: CardImage1,
      width: 300,
      height: 250,
    },
    {
      name: "TEAM",
      image: TeamImage3,
      width: 300,
      height: 250,
    },
    {
      name: "TEAM",
      image: CardImage1,
      width: 200,
      height: 150,
    },
    {
      name: "TEAM",
      image: TeamImage2,
      width: 200,
      height: 150,
    },
    {
      name: "TEAM",
      image: TeamImage1,
      width: 200,
      height: 150,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.teamCirclesContainer}>
        {circles.map((circle, index) => {
          return (
            <TeamCircle key={index} name={circle.name} image={circle.image} />
          );
        })}
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cards}>
          <Card
            width={cards[0].width}
            image={cards[0].image}
            name={cards[0].name}
            height={cards[0].height}
          />
          <Card
            width={cards[1].width}
            image={cards[1].image}
            name={cards[1].name}
            height={cards[1].height}
          />
        </div>
        <div className={styles.cards}>
          <Card
            width={cards[2].width}
            image={cards[2].image}
            name={cards[2].name}
            height={cards[2].height}
          />
          <Card
            width={cards[3].width}
            image={cards[3].image}
            name={cards[3].name}
            height={cards[3].height}
          />
          <Card
            width={cards[4].width}
            image={cards[4].image}
            name={cards[4].name}
            height={cards[4].height}
          />
        </div>
      </div>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => {
          return <icon.icon key={index} className={styles.icon}/>;
        })}
      </div>
    </section>
  );
};
