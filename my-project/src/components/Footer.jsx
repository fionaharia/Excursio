import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


export const Footer = () => {
  return (
    <div class="bg-black w-full h-60 text-white font-[Poppins] text-lg p-16">
      <div class="flex flex-row gap-24">
            <div class="text-2xl flex flex-col" >
                  <div>EXCURSIO</div>
                  <div class="text-sm">Your Trusted Travel Partner</div>
                  <div class="flex flex-row pt-3 gap-2">
                        <div class="h-10 w-10 rounded-full border-white border-1 flex justify-center items-center align-middle">
                              <FaSquareXTwitter clas></FaSquareXTwitter>
                        </div>
                        <div class="h-10 w-10 rounded-full border-white border-1 flex justify-center items-center align-middle">
                              <RiInstagramFill clas></RiInstagramFill>
                        </div>
                        <div class="h-10 w-10 rounded-full border-white border-1 flex justify-center items-center align-middle">
                              <FaFacebookSquare clas></FaFacebookSquare>
                        </div>
                        <div class="h-10 w-10 rounded-full border-white border-1 flex justify-center items-center align-middle">
                              <FaYoutube clas></FaYoutube>
                        </div>
                  </div>
            </div>
      
      <div class="flex flex-col">
        <div>Our Address</div>
            <div class="flex flex-row pt-3 gap-2">
                  <div><FaMapMarkedAlt></FaMapMarkedAlt></div>
                  <div class="text-sm ">Vile Parle, Mumbai</div>
            </div>
            <div class="flex flex-row pt-2 gap-2">
                  <div><FaPhoneAlt></FaPhoneAlt></div>
                  <div class="text-sm">123456789</div>
            </div>
            <div class="flex flex-row pt-2 gap-2">
                  <div><MdEmail></MdEmail></div>
                  <div class="text-sm">excursiowork@gmail.com</div>
            </div>
            <div class="flex flex-row pt-2 gap-2">
                  <div><FaRegClock></FaRegClock></div>
                  <div class="text-sm">8:00 - 5:00</div>
            </div>
      </div>
      <div class="flex flex-col">
            <div>Quick Links</div>
            <div class="text-sm pt-3">Home</div>
            <div class="text-sm pt-1">Travel Guide</div>
            <div class="text-sm pt-1">Tours</div>
            <div class="text-sm pt-1">About Us</div>
            <div class="text-sm pt-1">Contact</div>
      </div>
      <div class="flex flex-col">
        <div class="pb-3">NewsLetter</div>
        <input type='email' class="rounded-full border-white border-1 p-1 bg-black placeholder:text-sm placeholder:pl-3 " placeholder='email'></input>
        <button class="text-sm border-1 border-blue-600 rounded-full  w-24 p-2 mt-4 items-center">Submit</button>
      </div>
    </div>
    </div>
  )
}
