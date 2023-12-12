/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update windowWidth on mount and on window resize
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth(); // Initial value
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const getMenuStyles = (menuOpened) => {
    if (windowWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
    return {}; // Return empty object if condition is not met
  };

  function toggleMenu() {
    setMenuOpened((prev) => !prev);
  }

  return (
    <section className={`${styles.wrapper}`}>
      <div className={`flexCenter paddings innerWidth ${styles.container}`}>
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className={`flexCenter ${styles.menu}`}
            style={getMenuStyles(menuOpened)}
          >
            <a href="">Residents</a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className={`button`}>
              <a href="">Contact</a>
            </button>
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
}
