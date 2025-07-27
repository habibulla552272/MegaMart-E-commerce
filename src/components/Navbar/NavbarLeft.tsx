'use client'

import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Image from 'next/image';
import logo from "@/assets/MegaMart.png"
import { FaShoppingCart } from "react-icons/fa";

const NavbarLeft = () => {
    const [LeftMenu, setLeftMenu] = useState(false)

    return (
        <>
            <section>
                <div className='container mx-auto'>
                    <div className='flex gap-3 items-center py-5'>
                        <h2 onClick={() => setLeftMenu(!LeftMenu)} className='bg-green-300 w-8 h-8 flex items-center justify-center text-2xl'>
                            <HiMenuAlt2 />
                        </h2>
                        <p className=''>
                            <Image src={logo} alt='logo' />
                        </p>
                    </div>
                    <div className={`absolute h-[100%] bg-black text-white w-[45%] md:w-[20%]  top-0 ${LeftMenu ? 'left-0 top-0 ease-in-out duration-700' : '-left-80  ease-in-out duration-700'}`}>
                        <div className=''>
                            <h2 onClick={() => setLeftMenu(!LeftMenu)} className='text-3xl flex justify-end  pr-6 pt-5  '><IoMdClose /></h2>
                            <div className='text-center'>
                                <ul className="flex flex-col gap-8 px-8 pt-5">
                                    <li className=' hover:text-green-400'>

                                        <a href="#">Home</a>
                                    </li>
                                    <li>

                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="/services">Services</a>
                                    </li>
                                    <li>
                                        <a href="/contact">
                                            Contact
                                        </a>
                                    </li>
                                    <li className='flex items-center  gap-2  md:hidden'>
                                        <div><FaUser /></div>
                                        <a className="hover:border-b-2 border-amber-50 " href="#">Sign In</a>
                                        <a className='hover:border-b-2 border-amber-50' href="#">/Sign Up</a>
                                    </li>
                                    <li className='hidden md:hidden'>
                                        <a className='' href="#">

                                            <div className='text-xl px-3 relative'>
                                                <FaShoppingCart className='text-2xl md:text-3xl' />
                                                <p className=' absolute -top-4  bg-green-400  text-white rounded-2xl text-sm px-1 py-1 ml-4'>1</p>
                                            </div>

                                        </a>

                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavbarLeft
