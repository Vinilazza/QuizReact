import React from 'react'
import './GameOver.css'

function Gameover({retry,score}) {
  return (
    <div>
    <h1>Fim de jogo!</h1>
    <h2>A sua pontuação foi: <span>{score}</span></h2>
    <button onClick={retry}>Resetar Jogo</button>
</div>
  )
}

export default Gameover