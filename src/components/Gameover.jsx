import React from 'react'
import './GameOver.css'

function Gameover({retry}) {
  return (
    <div><h1>Game Over</h1>
    <button onClick={retry}>Resetar Jogo</button>
</div>
  )
}

export default Gameover