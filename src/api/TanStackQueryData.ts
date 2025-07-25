'use client'

import { useQuery } from "@tanstack/react-query";
import { userData } from "./Datafetch";

// Example type of your API data
type Product = {
  id: number;
  name: string;
  price: number;
};

export const Data = () => {
  const { data,isLoading,isError } =  useQuery<Product[]>({
    queryKey: ["products"],  // must be an array
    queryFn: userData,       // userData must return a Promise<Product[]>
  });

  return {data,isError,isLoading};
};
