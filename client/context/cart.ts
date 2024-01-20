import { createContext } from "react";
import { CartItem } from "../types";

type CartContextType = {
  items: CartItem[];
  total: number;
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  setTotal: (total: number) => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  total: 0,
  setItems: () => {},
  addItem: () => {},
  setTotal: () => {},
});

export default CartContext;
