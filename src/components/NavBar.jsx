import React from 'react'
import { motion } from 'framer-motion'

const NavBar = () => {
    const menus = [
        {
            id:1,
            name:"home"
        },
        {
            id:2,
            name:"about"
        },
        {
            id:3,
            name:"staff"
        },
        {
            id:4,
            name:"contact"
        },
    ]
  return (
    <div className='h-16 w-screen bg-gradient-to-tr from-black to to-orange-500 text-white fixed'>
        <div className=' w-full h-full justify-between  flex '>
            <motion.h2 className='text-3xl items-center flex
             pl-5' animate={{fontSize:'30px', x:10}}>Nav-<span className='group-hover:text-blue-300'>Bar</span></motion.h2>
            
            <ul className='flex items-center justify-center'>
                {menus&&menus.map(({id,name})=>(
                    <li key={id} className=' m-3 capitalize cursor-pointer hover:uppercase hover:scale-105 duration-200 hover:text-blue-300 text-xl'>{name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default NavBar