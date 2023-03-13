import GameOfLife from 'gameoflife.js'
import { createContext, useContext } from 'react'

export const GameContext = createContext<{ game: GameOfLife | null }>({
  game: null,
})
export const useGame = () => useContext(GameContext)
