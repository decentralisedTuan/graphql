import "@testing-library/jest-dom";
import { fireEvent, waitFor } from "@testing-library/react";
import Product from "../pages/product";
import { renderWithClientAndContext } from "./utils";

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = renderWithClientAndContext(<Product />);

  const increaseQuantity = await waitFor(() => getByText("+"));

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = renderWithClientAndContext(<Product />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});

test("should not be able to decrease if quantity is equal to 1", async () => {
  const { getByText, getByTitle } = renderWithClientAndContext(<Product />);
  const decreaseQuantity = getByText("-");
  const currentQuantity = getByTitle("Current quantity");
  currentQuantity.textContent = "1";

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});
