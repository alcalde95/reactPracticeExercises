import { useEffect, useState } from 'react'
import Square from './components/Square';
import './App.css'
import confetti from 'canvas-confetti';
import WinnerModal from './components/WinnerModal';
import { TURNS, solutions } from './constants';



function App() {
  

  const [board, setBoard] = useState(() => {
    const localStorageBoard = window.localStorage.getItem('board')
    return localStorageBoard ? JSON.parse(localStorageBoard) :
      Array(9).fill(null)
  });


  const [turn, setTurn] = useState(() => {
    const localStorageTurn = window.localStorage.getItem('turn')
    return localStorageTurn ?? TURNS.X
  });
  const [winner, setWinner] = useState(() => {
    const localStorageWinner = window.localStorage.getItem('winner')
    return localStorageWinner
      ? JSON.parse(localStorageWinner)
      : null
  });




  useEffect(() => {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', turn);
    console.log("Hola :D")
  },[turn, board])





  const resetTable = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
    window.localStorage.removeItem('winner');
  }

  const handleSquareClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    newBoard[index] = turn
    setBoard(newBoard);
   
    checkSolution(newBoard);
    
   
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
        window.localStorage.setItem('winner', JSON.stringify(turn));
        confetti();
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

      <WinnerModal winner={winner} resetTable={resetTable}></WinnerModal>

    </main>

  )
}

export default App
