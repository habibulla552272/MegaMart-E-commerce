import { dummyData, Product2 } from "@/api/Datafetch"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react";

export const TopCategoriData=()=>{
    const {data,isLoading,isError} = useQuery<Product2[]>({
        queryKey:['produc'],
        queryFn: dummyData,
    })
    console.log(data);
    
    const beautidata= data?.filter((item)=> item.category== 'beauty') || [];
    const [perPage,setPerpage]=useState(4);
    const [currentPage,setCurrentPage]=useState(1);
    const lastItemIndex= currentPage * perPage;
    const firstItemIndex = lastItemIndex - perPage;
    const totalPage=Math.ceil(beautidata.length / perPage);
    const TopCategoriDatas = beautidata.slice(firstItemIndex,lastItemIndex)

    const goToPrev=()=>{
        if(currentPage > 1){
            setCurrentPage(prev=>prev -1)
        }
    }
    const goToNext=()=>{
        if(currentPage < totalPage){
            setCurrentPage(prev=> prev +1)
        }

    }

    return {TopCategoriDatas,isLoading,isError,totalPage,currentPage,goToNext,goToPrev}

}