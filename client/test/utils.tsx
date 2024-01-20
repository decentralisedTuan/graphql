import { RenderOptions, render } from "@testing-library/react";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContext from "../context/cart";
import { CartItem } from "../types";

const client = new QueryClient();

const WithClientAndContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (cartItem: CartItem) => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      newItems[index].quantity += cartItem.quantity;
    } else {
      newItems.push(cartItem);
    }
    setItems(newItems);
    const total = newItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setTotal(total);
  };
  return (
    <QueryClientProvider client={client}>
      <CartContext.Provider
        value={{ items, setItems, total, setTotal, addItem }}
      >
        {children}
      </CartContext.Provider>
    </QueryClientProvider>
  );
};

export const renderWithClientAndContext = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: WithClientAndContext, ...options });
