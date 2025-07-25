import React from 'react'

import NavbarRight from './NavbarRight'
import NavbarLeft from './NavbarLeft'

const Navbar = () => {
  return (
    <>
      <div className='container mx-auto z-50 flex justify-between items-center  px-6 md:px-0 '>
        <div className='md:w-[35%]'>

          <NavbarLeft />
        </div>
        <div className='md:w-[65%]'>

          <NavbarRight />
        </div>

      </div>
    </>
  )
}

export default Navbar
