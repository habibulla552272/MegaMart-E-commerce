
import { useState } from "react";
import { Data } from "@/api/TanStackQueryData";

export const usePhonePagination = () => {
  const { data, isLoading, isError } = Data();
  const mobileData = data?.filter((item) => item.category === "mobile") || [];

  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;
  const currentProducts = mobileData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(mobileData.length / perPage);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return {
    currentProducts,
    isLoading,
    isError,
    goToNext,
    goToPrev,
    currentPage,
    totalPages,
  };
};
