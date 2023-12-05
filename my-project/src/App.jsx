import React from "react"
import { Hotels } from "./pages/Hotels"
import { Tours } from "./pages/Tours"
import { BrowserRouter,Route,Router,Routes } from "react-router-dom"
import NavbarTop from "./components/NavbarTop"
import { Landingpage } from "./pages/Landingpage"
function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/" element={<Landingpage />} />
        </Routes>
    </div>
  )
}

export default App
