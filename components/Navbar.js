import React, {useState} from 'react'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'


const Navbar = () => {

  const [accountMenu, setAccountMenu] = useState(false)

  return (
    <div>
      <div className="navbar p-4 md:px-8 flex justify-between items-center bg-[#f2f2f2]">
        <div className="hamburger cursor-pointer inline-block md:hidden">
          <div className="line w-5 h-0.5 bg-black my-1"></div>
          <div className="line w-5 h-0.5 bg-black my-1"></div>
          <div className="line w-5 h-0.5 bg-black my-1"></div>
        </div>

        <div className="logo flex items-center">
          <Link href={'/'} className='flex items-center'>
            <img src="/assets/logo.png" alt="" className='w-12' />
            <h1 className='text-2xl font-semibold font-serif'>MyCart</h1>
          </Link>

          <div className="links hidden md:flex space-x-5 px-5 pl-8">
            <div className="Home text-xl">
              <Link href={'/'}>Home</Link>
            </div>
            <div className="group text-xl flex items-center justify-center">
              <Link href={'/'}>Products</Link>
              <IoIosArrowDown className='mx-1 mt-1' />
              <div className="drop-down absolute top-12 bg-[#f2f2f2] px-8 pt-7 shadow-2xl pb-4 hidden group-hover:block rounded-md border-gray-300">
                <ul className='space-y-2'>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Tshirt</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Jacket</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Watch</li>
                </ul>
              </div>
            </div>
            <div className="group text-xl flex items-center justify-center">
              <Link href={'/'}>Men</Link>
              <IoIosArrowDown className='mx-1 mt-1' />
              <div className="drop-down absolute top-12 bg-[#f2f2f2] px-8 pt-7 shadow-2xl pb-4 hidden group-hover:block rounded-md border-gray-300">
                <ul className='space-y-2'>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Tshirt</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Jacket</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Watch</li>
                </ul>
              </div>
            </div>
            <div className="group text-xl flex items-center justify-center">
              <Link href={'/'}>Women</Link>
              <IoIosArrowDown className='mx-1 mt-1' />
              <div className="drop-down absolute top-12 bg-[#f2f2f2] px-8 pt-7 shadow-2xl pb-4 hidden group-hover:block rounded-md border-gray-300">
                <ul className='space-y-2'>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Tshirt</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Jacket</li>
                  <li className='cursor-pointer hover:text-blue-400 duration-300 ease-in-out'>Watch</li>
                </ul>
              </div>
            </div>
            <div className="Services text-xl">
              <Link href={'/services'}>Services</Link>
            </div>
            <div className="Contact text-xl">
              <Link href={'/contact'}>Contact</Link>
            </div>
          </div>

        </div>

        <div className="buttons flex space-x-2">

          <button className="cart text-2xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer">
            <FaShoppingCart />
          </button>

          <button className="account text-2xl rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer" onClick={()=>setAccountMenu(accountMenu ? false : true)}>
            <FaUserAlt />
          </button>

          {accountMenu && <div className="absolute top-16 bg-[#f2f2f2] w-32 px-5 py-2 right-5 shadow-2xl">
            <ul className='space-y-1'>
              <li className='cursor-pointer text-center text-lg font-sans font-medium hover:text-blue-400 duration-300 ease-in-out'>
                <Link href={'/signup'}>Sign Up</Link>
              </li>
              <li className='cursor-pointer text-center text-lg font-sans font-medium hover:text-blue-400 duration-300 ease-in-out'>
                <Link href={'/login'}>Login</Link>
              </li>
              <li className='cursor-pointer text-center text-lg font-sans font-medium hover:text-blue-400 duration-300 ease-in-out'>
                Sign Out
              </li>
            </ul>
          </div>}

        </div>

      </div>
    </div>
  )
}

export default Navbar
