'use client'

import { useQuery } from "@tanstack/react-query";
import { userData } from "./Datafetch";

// Example type of your API data
type Product = {
 id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
  title:string;
  discount:number;
};

export const Data = () => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],  
    queryFn: userData,       
  });

  return { data, isError, isLoading };
};
