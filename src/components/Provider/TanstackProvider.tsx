'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
interface TanstackProviderProps {
    children:React.ReactNode;
}
const queryclient =new QueryClient()
const TanstackProvider = ({children}:TanstackProviderProps) => {
  return (
    <QueryClientProvider client={queryclient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanstackProvider

