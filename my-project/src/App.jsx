import React from "react"
import { Hero } from "./components/Hero"
import { ChooseUs } from "./components/ChooseUs"
import { Reviews } from "./components/Reviews"
import { Footer } from "./components/Footer"
import TopDest from "./components/TopDest"
import { Hotels } from "./components/Hotels"
import { Tours } from "./components/Tours"
function App() {

  return (
    <div>
        <Hero></Hero>
        <ChooseUs></ChooseUs>
        <Reviews></Reviews>
        <Footer></Footer>
        <Hotels></Hotels>
        <Tours></Tours>
    </div>
  )
}

export default App
