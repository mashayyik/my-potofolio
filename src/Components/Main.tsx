import GameOfLife from 'gameoflife.js'
import { useEffect, useState } from 'react'
import { GameContext } from '../hooks/useGame'
import { getArrow, getInitialCell } from '../lib/getInitialCell'
import style from '../styles/Main.module.scss'
import Game from './Game'

export const Main: React.FC = ({ children }) => {
  const [game, setGame] = useState<GameOfLife | null>(null)
  useEffect(() => {
    const data = {
      width: Math.floor(window.innerWidth / 10),
      height: Math.floor(window.innerHeight / 10),
    }
    const game = new GameOfLife({
      ...data,
      initialCell: getInitialCell(data),
    })
    setGame(game)

    return () => {
      setGame(null)
    }
  }, [])
  const add = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = Math.floor(event.clientX / 10)
    const y = Math.floor(event.clientY / 10)
    if (game) game.add(getArrow(x, y))
  }
  return (
    <GameContext.Provider value={{ game }}>
      <div className={style.main} onClick={add}>
        <div className={style.game}>
          {window && (
            <Game height={window.innerHeight} width={window.innerWidth} />
          )}
        </div>
        <div className={style.content}>{children}</div>
      </div>
    </GameContext.Provider>
  )
}
