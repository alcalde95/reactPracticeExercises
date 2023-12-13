import { useState } from 'react'
import Square from './Square';
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

function App() {

  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));


  const solutions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 4, 8], // top left to bottom right
    [2, 4, 6], // top right to bottom left
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
  ];


  const resetTable = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  }

  const handleSquareClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard);
    checkSolution(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    checkEndGame(newBoard)
  }


  const checkEndGame = (newBoard) => {
    if (newBoard.every((square) => square != null)) {
      setWinner(false);
    }
  }
  const checkSolution = (newBoard) => {

    for (let i = 0; i < solutions.length; i++) {
      const [a, b, c] = solutions[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(turn);
      }
    }

  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={() => resetTable()}>Reset</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (

              <Square key={index} index={index} handleSquareClick={handleSquareClick}>
                {board[index]}
              </Square>

            )
          })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {

        winner != null && (
          <section className='winner'>
            <div className='text'>

              <h2>
                {
                  winner === false ? "Empate" : "Ganó: "
                }
              </h2>
              <header className='win'>
                {winner && <Square>{ winner }</Square>}
              </header>
              <footer>
                <button onClick={() => resetTable()}>Reset</button>
              </footer>
            </div>
          </section>
        )

      }
    </main>

  )
}

export default App
