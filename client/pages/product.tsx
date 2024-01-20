import ProductDetails from "../components/ProductDetails/ProductDetails";
import Header from "../components/Header/Header";
import Copyright from "../components/Copyright/Copyright";

export default function Product() {
  return (
    <main>
      <Header />
      <ProductDetails id={1} />
      <Copyright />
    </main>
  );
}
