import React from "react"
import { Hotels } from "./pages/Hotels"
import { Toursnew } from "./pages/Toursnew"
import { BrowserRouter,Route,Router,Routes } from "react-router-dom"
import NavbarTop from "./components/NavbarTop"
import { Landingpage } from "./pages/Landingpage"
import { HotelBooked } from "./pages/HotelBooked"
function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/tours" element={<Toursnew />} />
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/bookinghotel" element={<HotelBooked />} />
        </Routes>
    </div>
  )
}

export default App
