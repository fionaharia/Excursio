import React from 'react'
import NavbarTop from './NavbarTop'
import { MdHotel } from "react-icons/md";
import { MdTour } from "react-icons/md";


export const Hero = () => {
  return (
      <div className="bg-[url('../src/assets/herowallpaper.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen font-[Poppins]" >
        <NavbarTop></NavbarTop>
        <div class="flex justify-center text-5xl mt-40 tracking-wide font-extrabold text-white pt-2 pb-2 mr-45 ml-45 rounded-xl">Discover Your Next Adventure Here.</div>
        <div class="flex flex-row justify-center gap-8 align-middle items-center mt-5">
          <button class="rounded-2xl border-2 border-double border-white bg-black bg-opacity-70  px-5 py-2 text-white backdrop-blur-20 font-bold uppercase tracking-wide transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ">Book Hotels</button>
          <button class="rounded-2xl border-2 border-double border-white bg-black bg-opacity-70 px-5 py-2 text-white backdrop-blur-20 font-bold uppercase tracking-wide transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ">Book Tours</button>
        </div>    
      </div>
  )
}
