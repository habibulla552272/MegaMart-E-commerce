import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <header className='bg-[#F5F5F5] py-5 hidden lg:block'>
                <div className='container mx-auto flex justify-between '>

                    <div>
                        <p className='opacity-70'>Welcome to worldwide Megamart!</p>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex gap-2 items-center opacity-70'>
                            <FaLocationDot className='text-green-500 ' />
                            <p>Deliver to <span className='font-semibold'>423651</span></p>
                        </div>
                        <div className='flex gap-2 items-center opacity-70'>
                            <FaShippingFast className='text-green-500' />
                            <p>Deliver to <span className='font-semibold'>423651</span></p>
                        </div>
                        <div className='flex gap-2 items-center opacity-70'>
                            <CiBadgeDollar className='text-green-500 text-xl' />
                            <p>Deliver to <span className='font-semibold'>423651</span></p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
