import { useEffect, useRef } from 'react'
import { useGame } from '../hooks/useGame'
import { getRandomArrow } from '../lib/getInitialCell'
interface GameProps {
  width: number
  height: number
}

export default function Game(props: GameProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  const { game } = useGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const change = (
    cells: number[][],
    data: {
      width: number
      height: number
    }
  ) => {
    if (ref.current) {
      const context = ref.current.getContext('2d')

      if (context)
        for (let i = 0; i < data.height; i++) {
          for (let j = 0; j < data.width; j++) {
            const cell = cells[i][j]
            context.fillStyle = cell ? '#01394b90' : '#1d1d1d'
            const x = j * 10
            const y = i * 10
            context.fillRect(x, y, 10, 10)
          }
        }
    }
  }
  useEffect(() => {
    if (game) {
      const data = {
        width: Math.floor(window.innerWidth / 10),
        height: Math.floor(window.innerHeight / 10),
      }
      change(game.cells, data)
      const interval = setInterval(
        () => change(game.add(getRandomArrow(data)), data),
        15000
      )
      const gameInterval = setInterval(() => change(game.next(), data), 100)
      return () => {
        clearInterval(interval)
        clearInterval(gameInterval)
        window.location.reload()
      }
    }
  }, [game, change])

  return <canvas ref={ref} width={props.width} height={props.height} />
}
