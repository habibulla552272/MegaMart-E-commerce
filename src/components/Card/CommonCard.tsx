import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { ToastContainer } from 'react-toastify';

// type Product = {
//     id: number;
//     brand: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     images:string;
//     rate: number;
//     count: number;
//     title: string;
//     popular: boolean;
//     model: string;
//     discount: number;
//     thumbnail: string;
// };

// interface Datatype {
//     data: Product[];
//     isError: boolean;
//     isLoading: boolean;
// }

const CommonCard = ({ datas, isError, isLoading }) => {
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;
    console.log(datas);

    const filterData=datas.filter((item)=>{

        return item.category === 'groceries'
    })

    return (
        <div>

            <ul className="flex flex-wrap justify-between items-center mt-6">
          {filterData.map((item) => (
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

                  {/* <Button onClick={() => addToCardHadeler()} className=" absolute w-34 bg-green-300 py-2 rounded-2xl text-white  -bottom-24 group-hover:bottom-4 ease-in-out duration-700 ">Add to Card</Button> */}
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
    );
};

export default CommonCard;
