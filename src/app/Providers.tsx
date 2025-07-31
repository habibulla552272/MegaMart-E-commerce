'use client';

import { Provider } from "react-redux";

// import LoadCardFromStorage from "@/features/CardToADD/LoadCardFromStorage";
import store from "@/apps/Store";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      
      {children}
    </Provider>
  );
}
