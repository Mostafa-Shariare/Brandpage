import React from 'react'

const StartGame = ({ toggle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-200 text-gray-800 p-1">
      <div className="flex flex-row items-center justify-around gap-16 space-x-12 h w-full">
        {/* Left side - Dice Image */}
        <div>
          <img
            src="src/assets/dices.png" // or "/assets/dices.png" if it's in public
            alt="Dices"
            className="w-90 h-90 m-4"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-4">🎲 Welcome to DiceLuck!</h1>
          <p className="text-lg font-medium mb-4">
            Roll the dice and see if you can win!
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            onClick={toggle}
          >
            Roll Dice
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartGame
