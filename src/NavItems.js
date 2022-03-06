import React, { useRef,useEffect } from 'react'

const NavItems = ({ showItems }) => {
    const refHamburger = useRef(null)   
    
    useEffect(() => {
        showItems ? refHamburger.current.classList.add("show") : refHamburger.current.classList.remove("show")
    })
    return (
        <div className='flex flex-col gap-4 capitalize text-xl text-regal-blue md:flex-row md:items-center max-h-0 opacity-0 transition-all ease-in-out duration-300 md:pt-0 md:opacity-100' ref={refHamburger}>
            <a href="#" className='transition-all duration-300 lg:hover:text-green-800'>home</a>
            <a href="#" className='transition-all duration-300 lg:hover:text-green-800'>about</a>
            <a href="#" className='transition-all duration-300 lg:hover:text-green-800'>projects</a>
            <a href="#" className='transition-all duration-300 lg:hover:text-green-800'>contact</a>
            <a href="#" className='transition-all duration-300 lg:hover:text-green-800'>profile</a>
        </div>
    )
}

export default NavItems
