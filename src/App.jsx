import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './AppStyles.css'
import Game from './components/Game'
import Home from './components/Home'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </HashRouter>
  )
}

export default App
