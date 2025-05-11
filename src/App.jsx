import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Form from './components/Form'
import StartGame from './components/Startgame'
import GamePlay from './components/GamePlay'

const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev)
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Form />
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}

      <Footer />
      
      
    </div>
  )
}

export default App
