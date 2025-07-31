'use client'
import { Dummydata } from '@/api/DummyDataFetch'

import React from 'react'
import CommonCard from '../Card/CommonCard';

const DailyEssentials = () => {
  const {data,isError,isLoading}=Dummydata();
  
 
  return (
    <div>
      <CommonCard datas={data} isError={isError} isLoading={isLoading} />
    </div>
  )
}

export default DailyEssentials
