// api/Datafetch.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
};

export const userData = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.in/api/products?limit=150");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  
  return data.products;
};

export const SmartPhoneData = async (): Promise<Product[]> => {
  const data = await userData(); 
  const filterData = data.filter((item) => item.category === "mobile");
  console.log(filterData);
  return filterData;
};



