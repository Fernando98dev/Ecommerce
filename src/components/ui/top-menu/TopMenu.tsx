'use client'
import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);
  return (
    <nav className='top-menu'>
       {/*Logo */}
       <div>
         <Link href="/">
            <span className={`${titleFont.className} top-menu__icon`}>Teslo</span>
            <span> | Shop</span>
         </Link>
       </div>

       {/*Center menu */}
       <div className='center-menu'>

        <Link className='center-menu__link' href="/category/men">Hombres</Link>
        <Link className='center-menu__link' href="/category/women">Mujeres</Link>
        <Link className='center-menu__link' href="/category/kid">Niños</Link>
       </div>

       {/*Search, card, menu */}
       <div className='right-menu'>
        <Link href="/search" className='right-menu__link'>
            <IoSearchOutline className='right-menu__icon'/>
        </Link>

        <Link href="/cart" className='right-menu__link'>
            <div className='right-menu__container'>
                <span className='right-menu__cart-number'>3</span>
              <IoCartOutline className='right-menu__icon'/>
            </div>
        </Link>

        <button
        className='right-menu__button'
        onClick={()=> openSideMenu()}
        >Menu</button>

       </div>

    </nav>
  )
}
