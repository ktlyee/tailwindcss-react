import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;

