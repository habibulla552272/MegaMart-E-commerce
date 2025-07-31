'use client'
import { useQuery } from "@tanstack/react-query";
import { dummyData, Product2 } from "./Datafetch"

export const Dummydata = () => {
    const { data, isLoading, isError } = useQuery<Product2[]>({
        queryKey: ['dummydata'],
        queryFn: dummyData,
    })
    return { data, isError, isLoading };
};



