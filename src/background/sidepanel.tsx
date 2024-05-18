import React from 'react'

import MainPage from './MainPage'
import Navbar from './Navbar'
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const SidePanel = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/tabone" element={<TabOne/>} />
        <Route path="/tabtwo" element={<TabTwo/>} />
        <Route path="/tabthree" element={<TabThree/>} />
        </Routes>
        {/* Add more routes for other pages */}
    </Router>
    </div>
  )
}
export default SidePanel