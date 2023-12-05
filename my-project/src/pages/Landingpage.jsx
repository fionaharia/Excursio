import React from 'react'
import { Hero } from '../components/Hero'
import { ChooseUs } from '../components/ChooseUs'
import { Reviews } from '../components/Reviews'
import { Footer } from '../components/Footer'
import { TopDest } from '../components/TopDest'

export const Landingpage = () => {
  return (
    <div>
      	<Hero></Hero>
		<TopDest></TopDest>
        <ChooseUs></ChooseUs>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
  )
}
