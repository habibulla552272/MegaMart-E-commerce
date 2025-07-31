// 'use client';

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCardItems } from "./cardSlice";

// export default function LoadCardFromStorage() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedItems = localStorage.getItem("card");
//     if (savedItems) {
//       dispatch(setCardItems(JSON.parse(savedItems)));
//     }
//   }, [dispatch]);

//   return null;
// }
