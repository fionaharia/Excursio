import React from 'react'
import { ImHappy } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { BsLuggageFill } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import {Button} from "@nextui-org/react";


export const Reviews = () => {
  return (
    <div className="bg-[url('../src/assets/reviewbg.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen font-[Poppins]" >
      <div class="flex flex-row justify-center items-center align-middle gap-24 pt-10">
            <div class="flex flex-col justify-center items-center align-middle">
                  <div><ImHappy class="h-10 w-10"></ImHappy></div> 
                  <div class="text-3xl font-semibold pt-2">150K+</div>
                  <div class="text-lg">Customers Satisified</div>
            </div>
            <div class="flex flex-col justify-center items-center align-middle">
                  <div><IoIosPeople class="h-10 w-10"></IoIosPeople></div> 
                  <div class="text-3xl font-semibold pt-2">90K+</div>
                  <div class="text-lg">New Travellers</div>
            </div>
            <div class="flex flex-col justify-center items-center align-middle">
                  <div><BsLuggageFill class="h-10 w-10"></BsLuggageFill></div> 
                  <div class="text-3xl font-semibold pt-2">200+</div>
                  <div class="text-lg">New Destinations</div>
            </div>
            <div class="flex flex-col justify-center items-center align-middle">
                  <div><LiaAwardSolid class="h-10 w-10"></LiaAwardSolid></div> 
                  <div class="text-3xl font-semibold pt-2">35+</div>
                  <div class="text-lg">Global Awards</div>
            </div>
      </div>
      <div class="pt-24 text-center text-3xl">
            Explore the unseen, embrace the unknown.    
      </div>
      <div class="text-center text-2xl pt-32 font-semibold ">
           <div>Begin Your Adventures Now With</div>
           <button class="bg-black mt-2 p-3 text-2xl text-white rounded-lg h-18 w-40" variant="shadow">EXCURSIO</button>
      </div>
    </div>
  )
}
