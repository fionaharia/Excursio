import { Button } from '@nextui-org/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HotelBooked = () => {
      const navigate = useNavigate();
  return (
    <div class="w-full h-screen font-[Poppins] flex flex-col justify-center align-middle items-center bg-[url('../src/assets/chooseusbg.jpg')] text-gray bg-no-repeat bg-cover bg-center">
      <div class="text-4xl font-bold">Your booking has been succesful!</div>
      <div class="text-xl mt-5 font-semibold">Please check your email for further details.</div>
      <div class="mt-5">
            <Button
            color="secondary"
            onClick={() => navigate('/')}
            >Explore more on Excursion
            </Button>
      </div>
    </div>
  )
}
