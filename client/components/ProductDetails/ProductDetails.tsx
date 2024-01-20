import styles from "./product-details.module.scss";
import { useContext, useState } from "react";
import CartContext from "../../context/cart";
import { useGetProduct } from "../../lib/useRequest";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from "../Button/Button";
import QuantityModifier from "../QuantityModifier/QuantityModifier";

type ProductDetailsProps = {
  id: number;
};

export default function ProductDetails({ id }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const { data, isLoading, error } = useGetProduct(id);

  if (isLoading)
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );

  if (error) return <ErrorMessage message={error.message} />;

  if (!data.Product) return <ErrorMessage message="Item not found" />;

  const { Product: product } = data;
  const { name, price, description, img_url } = product;

  return (
    <>
      <div className={styles.imgContainer}>
        <img
          className={styles.productImage}
          src={product.img_url}
          alt="Product Image"
        />
      </div>
      <div className={styles.details}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <p className={styles.productContent}>
          {product.power} // Packet of {product.quantity}
        </p>
        <div className={styles.edit}>
          <p className={styles.price}>£{product.price}</p>
          <QuantityModifier quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className={styles.btnContainer}>
          <Button
            text={"Add to cart"}
            className={styles.btn}
            onClick={() =>
              addItem({
                id,
                name,
                description,
                img_url,
                price,
                quantity,
              })
            }
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>Description</h3>
        <p className={styles.descriptionText}>{product.description}</p>
      </div>
      <div className={styles.specificationContainer}>
        <h3 className={styles.title}>Specifications</h3>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRow}>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Item weight (g)</td>
              <td>{product.weight}</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Dimensions (cm)</td>
              <td>
                {product.height} x {product.width} x {product.length}
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Item Model number</td>
              <td>{product.model_code}</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Colour</td>
              <td>{product.colour}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
