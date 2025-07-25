'use client'
import { userData, Product } from "@/api/Datafetch";
import { Data } from "@/api/TanStackQueryData";
import Image from "next/image";

import React from "react";

const SmartPhone: React.FC = () => {
  const { data,isLoading,isError } = Data();
  const mobileData= data?.filter((item)=> item.category === 'mobile') || []
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Smartphone Products</h2>
        <ul>
          {mobileData?.map((item) => (
            <li key={item.id} className="border p-2 mb-2">
              {item.name} - ${item.price}
              <div>
                <img src={item.image} alt="product" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SmartPhone;
