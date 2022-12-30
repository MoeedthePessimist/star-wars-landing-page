import { Roboto } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Star-wars-logo.svg";
import styles from "./index.module.scss";

const roboto = Roboto({ weight: "300" });

const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      {/* links and logo */}
      <nav className={styles.navbarContainer}>
        {/* links */}
        <section className={styles.linksContainer}>
          <Link href="/" className={styles.link} >
            NYHETER
          </Link>
          <Link href="/" className={styles.link} >
            MERCH
          </Link>
          <Link href="/" className={styles.link} >
            KAMPER
          </Link>
          <Link href="/" className={styles.link} >
            LAGENE
          </Link>
        </section>
        {/* LOGO */}
        <section className={styles.logoContainer}>
          <Image src={Logo} alt="Star Wars Logo" className={styles.logo} />
        </section>
      </nav>
      {/* header Under line */}
      <section className={styles.headerUnderline}>
        <div className={styles.straightLine}></div>
        <div className={styles.tiltedLineLeft}></div>
        <div className={styles.smallStraightLine}></div>
        <div className={styles.tiltedLineRight}></div>
        <div className={styles.straightLine}></div>
      </section>
    </header>
  );
};

export default Navbar;
