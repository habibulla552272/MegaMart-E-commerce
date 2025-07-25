"use client";

import Image from "next/image";
import banner from '@/assets/Screenshot 2025-07-25 104028.png'
import { Fullscreen, Images } from "lucide-react";
import { imagesData } from "./ImagesData";


export default function Banner() {

  const data = imagesData;

  return (
    <section className="overflow-hidden container mx-auto">
      <div className=" flex flex-col w-[90%]  justify-center max-w-5xl">

      {
        data.map(item => {
          return(

          <div className="" key={item.id}>
            <Image className=" rounded-bl-3xl rounded-tl-3xl" src={item.src} alt="fkdk" fill/>

          </div>
          )
        })
      }
      </div>


    </section>
  );
}
