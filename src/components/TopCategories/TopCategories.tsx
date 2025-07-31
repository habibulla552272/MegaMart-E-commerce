'use client';

import React from 'react';
import { TopCategoriData } from './TopCategoriPagination';
import Image from 'next/image';
import { Button } from '../ui/button';
import { toast, ToastContainer } from 'react-toastify';

const TopCategories: React.FC = () => {
  const {
    TopCategoriDatas: Datas,
    goToNext,
    goToPrev,
    isLoading,
    isError,
    totalPage,
    currentPage,
  } = TopCategoriData();

  if (isLoading) {
    return <h2>Data Loading ......</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  const addToCardHadeler = () => {
    toast('added Successfully', {
      position: "top-center",
    })
  }

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Beauty Products</h2>


        <div className="flex justify-center mt-4 gap-3">
          <button
            onClick={goToPrev}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            Prev
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPage}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPage}
            className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            Next
          </button>
        </div>

        {/* Products List */}
        <ul className="flex flex-wrap justify-between items-center mt-6">
          {Datas.map((item) => (
            <li
              key={item.id}
              className="border p-2 mb-6 w-[90%] mx-auto md:w-[45%] lg:w-[24%] shadow-2xl h-[400px] overflow-hidden group"
            >
              <div className="bg-gray-200 relative overflow-hidden">
                <Image
                  src={item.images?.[0] || item.thumbnail || '/placeholder.jpg'}
                  alt={item.title}
                  width={300}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <div className="flex justify-center">

                  <Button onClick={() => addToCardHadeler()} className=" absolute w-34 bg-green-300 py-2 rounded-2xl text-white  -bottom-24 group-hover:bottom-4 ease-in-out duration-700 ">Add to Card</Button>
                  <ToastContainer autoClose={1000} />
                </div>
              </div>
              <div className="pt-4">
                <h2 className="text-xl font-semibold font-serif">
                  {item.title || 'Beauty Product'}
                </h2>
                <p className="flex gap-3 items-center font-medium text-sm mt-2">
                  <span className="line-through font-mono opacity-70">
                    ${item.price}
                  </span>
                  <span className="font-mono text-sm">
                    ${(item.price - item.discount).toFixed(2)}
                  </span>
                </p>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopCategories;
