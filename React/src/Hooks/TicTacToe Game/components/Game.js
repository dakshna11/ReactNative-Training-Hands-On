import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';


function Game(props) {
    console.log('game called')
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handlClick = i =>{
        console.log('handle click')
        const boardCopy = [...board]
        if(winner || boardCopy[i] ) return

        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }
    const renderMoves = ()=>(
         <button onClick={()=> setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
    return (
        <>
            <Board squares={board} onClick ={handlClick}/>
            <div >
                <p>{winner ? 'Winner '  + winner : 'Next Player : ' + (xIsNext ? 'X' :'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;