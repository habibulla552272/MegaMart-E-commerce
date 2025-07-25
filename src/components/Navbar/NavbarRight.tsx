import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { FaShoppingCart } from "react-icons/fa";
import { Input } from '../ui/input';

const NavbarRight = () => {
    return (
        <section>
            <div className='container mx-auto flex gap-5 justify-between'>
                <div className='md:w-[65%]'>
                    <form action="#">
                        <Input className='outline-none w-full bg-green-200 px-3 py-1 rounded-2xl' type='text' placeholder='Search'/>
                       
                    </form>
                </div>
                <div className=' md:w-[35%] hidden md:block'>
                    <ul className='flex justify-between items-center'>
                        <li className='flex items-center gap-2'>
                            <p><FaUser className='text-2xl md:text-3xl' /></p>
                            <a className="hover:border-b-2 border-amber-50 " href="#">Sign In</a>
                            <a className='hover:border-b-2 border-amber-50' href="#">/Sign Up</a>
                        </li>
                        <li>
                            <a className='' href="#">

                                <div className='text-xl px-3 relative'>
                                    <FaShoppingCart className='text-2xl md:text-3xl' />
                                    <p className=' absolute -top-4  bg-green-400  text-white rounded-2xl text-sm px-1 py-1 p-0 right-0'>10</p>
                                </div>
                                
                            </a>

                        </li>
                        <ul>

                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default NavbarRight
