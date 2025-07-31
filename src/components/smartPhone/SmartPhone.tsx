'use client';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addToCard, setCardItems } from "@/features/CardToADD/cardSlice";
import { Button } from "../ui/button";
import { usePhonePagination } from "./PhonePaginationData";

const SmartPhone: React.FC = () => {
  const {
    currentProducts,
    isLoading,
    isError,
    goToNext,
    goToPrev,
    currentPage,
    totalPages
  } = usePhonePagination();

  const dispatch = useDispatch();
  const cardItem = useSelector((state) => state.card.cardItems);



useEffect(() => {
  if (typeof window !== 'undefined') {
    const savedCards = localStorage.getItem('card');
    if (savedCards) {
      dispatch(setCardItems(JSON.parse(savedCards))); 
    }
  }
}, [dispatch]);



const addHandler = (id: string | number) => {
  dispatch(addToCard(id));
  toast.success('Added Successfully', { position: 'top-center' });
};



  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Smartphone Products</h2>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading data</p>}

        {!isLoading && !isError && (
          <>
            <div className="flex justify-center mt-4 gap-3">
              <button onClick={goToPrev} disabled={currentPage === 1} className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">Prev</button>
              <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
              <button onClick={goToNext} disabled={currentPage === totalPages} className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">Next</button>
            </div>

            <ul className="flex flex-wrap justify-between items-center">
              {currentProducts.map((item) => (
                <li key={item.id} className="border p-2 mb-2 w-[70%] mx-auto md:w-[30%] lg:w-[24%] shadow-2xl h-[400px] overflow-hidden group">
                  <div className="bg-gray-200 relative overflow-hidden">
                    <img className="w-full px-5 py-5 h-[250px]" src={item.image} alt="product" />
                    <div className="flex justify-center">
                      <Button onClick={() => addHandler(item.id)} className="absolute w-34 bg-green-300 py-2 rounded-2xl text-white -bottom-24 group-hover:bottom-4 ease-in-out duration-700">Add to Cart</Button>
                      <ToastContainer autoClose={1000} />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h2 className="text-xl font-semibold font-serif">{item.title || "Samsung S25"}</h2>
                    <p className="flex gap-3 items-center font-medium text-sm">
                      <span className="line-through font-mono opacity-70">${Number(item.price) || 0}</span>
                      <span className="font-mono text-sm">${(Number(item.price) || 0) - (Number(item.discount) || 0)}</span>
                    </p>
                    <p>Save-${Number(item.discount) || 0}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default SmartPhone;
