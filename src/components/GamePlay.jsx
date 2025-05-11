import React, { useState } from 'react'

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [diceValue, setDiceValue] = useState(1)
  const [showRules, setShowRules] = useState(false)
  const [isRolling, setIsRolling] = useState(false) // Animation flag

  const handleDiceRoll = () => {
    if (selectedNumber === null) {
      alert('Please select a number first!')
      return
    }

    setIsRolling(true) // Start animation

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1
      setDiceValue(roll)

      if (roll === selectedNumber) {
        setScore((prev) => prev + roll)
      }

      setIsRolling(false) // End animation
    }, 500) // Same as spin-fast duration
  }

  const handleReset = () => {
    setScore(0)
    setSelectedNumber(null)
    setDiceValue(1)
    setIsRolling(false)
  }

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center relative">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center mb-10">
        {/* Score */}
        <div className="text-center">
          <h1 className="text-7xl font-bold">{score}</h1>
          <p className="text-xl mt-2">Total Score</p>
        </div>

        {/* Number Selector */}
        <div className="flex gap-2 items-end">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedNumber(num)}
              className={`w-12 h-12 border border-black text-lg font-bold ${
                selectedNumber === num ? 'bg-black text-white' : ''
              }`}
            >
              {num}
            </button>
          ))}
          <p className="ml-4 font-semibold">Select Number</p>
        </div>
      </div>

      {/* Dice Image */}
      <div
        className="mb-6 text-center cursor-pointer"
        onClick={!isRolling ? handleDiceRoll : null}
      >
        <img
          src={`src/assets/dice_${diceValue}.png`}
          alt={`Dice showing ${diceValue}`}
          className={`w-40 h-40 mx-auto ${isRolling ? 'animate-spin-fast' : ''}`}
        />
        <p className="mt-4 font-medium">Click on Dice to roll</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-48">
        <button
          className="border border-black px-4 py-2 font-semibold"
          onClick={handleReset}
        >
          Reset Score
        </button>
        <button
          className="bg-black text-white px-4 py-2 font-semibold"
          onClick={() => setShowRules((prev) => !prev)}
        >
          {showRules ? 'Hide Rules' : 'Show Rules'}
        </button>
      </div>

      {/* Rules */}
      {showRules && (
        <div className="mt-8 bg-gray-100 p-4 border border-gray-300 rounded shadow max-w-xl text-left">
          <h2 className="font-bold text-lg mb-2">Game Rules</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Select a number from 1 to 6.</li>
            <li>Click on the dice to roll.</li>
            <li>If the rolled dice matches your number, the number is added to your score.</li>
            <li>If not, you get 0 points.</li>
            <li>Click "Reset Score" to start over.</li>
          </ul>
        </div>
      )}

      {/* Footer Badges */}
      <div className="absolute bottom-10 left-10 flex gap-2 bg-gray-800 text-white rounded-full px-3 py-1 shadow-md">
        <div className="bg-orange-500 px-2 rounded-full">S</div>
        <div className="bg-purple-700 px-2 rounded-full">S</div>
        <span>6</span>
      </div>

      <div className="absolute bottom-10 right-10 flex gap-2 bg-gray-800 text-white rounded-full px-3 py-1 shadow-md">
        <img src="https://via.placeholder.com/24" alt="User" className="rounded-full" />
        <div className="bg-pink-600 px-2 rounded-full">Z</div>
        <span>3</span>
      </div>
    </div>
  )
}

export default GamePlay
