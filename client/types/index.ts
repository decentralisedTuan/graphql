export type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  img_url: string;
};

export type ProductType = CartItem & {
  power: string;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
};
