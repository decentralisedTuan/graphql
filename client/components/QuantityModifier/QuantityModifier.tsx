import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./quantity-modifier.module.scss";

type QuantityModifierProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantityModifier({
  quantity,
  setQuantity,
}: QuantityModifierProps) {
  const add = () => {
    setQuantity((value) => value + 1);
  };

  const substract = () => {
    if (quantity > 1) {
      setQuantity((value) => value - 1);
    }
  };

  return (
    <div className={styles.quantityContainer}>
      <p>Qty</p>
      <div className={styles.quantityUpdate}>
        <Button text="-" className={styles.minus} onClick={substract} />
        <span title="Current quantity">{quantity}</span>
        <Button text="+" className={styles.plus} onClick={add} />
      </div>
    </div>
  );
}
