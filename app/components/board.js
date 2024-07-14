"use client";

import{ Stack } from '@mui/material';
import { useState } from 'react';
import { initialBoard, winningContations} from './initialBoard'
import { useEffect } from 'react';

export const Board = ({ nextPlayer , setNextPlayer, setHasWinner, hasWinner}) => {
    const [gameTiles, setGameTiles] = useState(initialBoard);
    

    const checkWinner = () => {
        winningContations.map(condition => {
            const [a, b, c] = condition;
            if (gameTiles[a] && gameTiles[a] === gameTiles[b] && gameTiles[a] === gameTiles[c]){

                setHasWinner(true);
            }
        })
        }
    useEffect(() => checkWinner(), (nextPlayer))

    const handleClick = (index) => { 
        if (gameTiles[index] === null && !hasWinner){
        setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
        setGameTiles((gameTiles) =>{
                return{
                    ...gameTiles,
                    [index]: nextPlayer
                }
            
        })
    }
    }
    return (
        <Stack sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem 1rem',
        }}>
            {[...Array(9).keys()].map(element => {
                return <Stack 
                key={element} 
                onClick={() => handleClick(element)}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: '5rem',
                        height: '5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                }}>
                    {gameTiles && gameTiles[element]}
                    
                </Stack>
            })}

        </Stack>
    )
}