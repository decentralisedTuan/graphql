import { useContext } from "react";
import styles from "./header.module.scss";
import CartContext from "../../context/cart";

const Header = () => {
  const { total } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="/octopus-logo.svg"
        alt="Octopus Energy Logo"
      />
      <div className={styles.basketContainer}>
        <img className={styles.basket} src="/basket.svg" alt="Basket" />
        <span title="Basket items" className={styles.basketItems}>
          {total}
        </span>
      </div>
    </header>
  );
};

export default Header;
