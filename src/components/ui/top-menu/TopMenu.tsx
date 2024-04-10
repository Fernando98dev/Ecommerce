'use client'
import { titleFont } from '@/config/fonts'
import { useCartStore, useUIStore } from '@/store'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { SearchBox } from '../searchbox/SearchBox'

export const TopMenu = () => {
  const [loaded, setLoaded] = useState(false);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const totalItemsInCart = useCartStore(state => state.getTotalItems());

  useEffect(() => {
   setLoaded(true)
  }, [])
  
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
       {/*Logo */}
       <div>
         <Link href="/">
            <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
            <span> | Shop</span>
         </Link>
       </div>

       {/*Center menu */}
       <div className='hidden sm:block'>

        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/gender/men">Hombres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/gender/women">Mujeres</Link>
        <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/gender/kid">Niños</Link>
       </div>

       {/*Search, card, menu */}
       <div className="flex items-center">
        <SearchBox/>

        <Link href={
          ( (totalItemsInCart === 0 ) && loaded )
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {  ( loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>

    </nav>
  )
}
