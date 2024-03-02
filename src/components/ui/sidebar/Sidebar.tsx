'use client'
import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"


export const Sidebar = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);
    
  return (
    <div>
        {/*Background black */}
        {
            isSideMenuOpen && (
                <div className="sidebar__background"/>
            )
        }
        

        {/*Blur */}
        {
            isSideMenuOpen && (
                <div
                onClick={() => closeSideMenu()} 
                className=" fade-in background__blur"/>
            )
        }
        

        {/*Side menu */}
        <nav className={
            clsx(
                "sidebar__menu transform",
                {
                    "hideMenu": !isSideMenuOpen
                }
            )
        }>
            <IoCloseOutline
            size={50}
            className="menu__exit"
            onClick={()=>closeSideMenu()}
            />
        

        {/*input */}
        <div className="menu__input">
            <IoSearchOutline size={20} className="menu__searchIcon"/>
            <input type="text"
            placeholder="buscar" 
            className="input__container focus:outline-none focus:border-blue-500"/>
        </div>
        
        {/*menu */}
        <Link
        href="/"
        className="menu__generalIcon">
            <IoPersonOutline size={30}/>
            <span className="menu__label">Perfil</span>
        </Link>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoTicketOutline size={30}/>
            <span className="menu__label">Ordenes</span>
        </Link>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoLogInOutline size={30}/>
            <span className="menu__label">Ingresar</span>
        </Link>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoLogOutOutline size={30}/>
            <span className="menu__label">Salir</span>
        </Link>

        {/*Line separator */}
        <div className="menu__separator"/>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoShirtOutline size={30}/>
            <span className="menu__label">Productos</span>
        </Link>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoTicketOutline size={30}/>
            <span className="menu__label">Ordenes</span>
        </Link>

        <Link
        href="/"
        className="menu__generalIcon">
            <IoPeopleOutline size={30}/>
            <span className="menu__label">Usuarios</span>
        </Link>
        </nav>
    </div>
  )
}
