import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { GrPlan } from "react-icons/gr";


export const ChooseUs = () => {
  return (
      <div className="bg-[url('../src/assets/chooseusbg.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen font-[Poppins]" >
            <p className="text-center pt-10 pb-20 text-4xl font-[Poppins] font-bold">Why Choose Us?</p>
            <div className='flex justify-center items-center align-middle gap-20'>
                  
                        <div class="w-72 h-72 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg">
                              <div class="flex justify-center align-middle items-center flex-col px-4">
                                    <div><IoGlobeOutline class="h-8 w-8 mt-12 mb-4"></IoGlobeOutline></div>
                                    <div class="text-lg mb-4 font-semibold">WorldWide Reach</div>
                                    <div class="text-center">With an extensive network, we provide exclusive access to hidden gems and unparalleled accommodations worldwide.</div>
                              </div>
                        </div>
                        <div class="w-72 h-72 bg-white bg-opacity-20 backdrop-blur-md rounded-lg drop-shadow-lg">
                              <div class="flex justify-center align-middle items-center flex-col px-4">
                                          <div><GiWallet  class="h-8 w-8 mt-12 mb-4"></GiWallet ></div>
                                          <div class="text-lg mb-4 font-semibold">Pocket Friendly</div>
                                          <div class="text-center">Unparalleled value that transcends the cost, turning your vacation into an unforgettable story.</div>
                              </div>
                        </div>
                        <div class="w-72 h-72 bg-white bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg">
                              <div class="flex justify-center align-middle items-center flex-col px-4">
                                          <div><GrPlan  class="h-8 w-8 mt-12 mb-4"></GrPlan ></div>
                                          <div class="text-lg mb-4 font-semibold">Seemless Planning</div>
                                          <div class="text-center">Streamlined coordination of every detail, ensuring an effortlessly planned and stress-free journey.</div>
                              </div>
                        </div>
                  
            </div>
          
      </div>
  )
}
