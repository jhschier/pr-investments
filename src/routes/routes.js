import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { About } from '../pages/About/index.js'
import { Contact } from '../pages/Contact/index.js'
import { Home } from '../pages/Home/index.js'
import { Market } from '../pages/Market/index.js'
import { Services } from '../pages/Services/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
