"use client";

import {Header} from './header';
import {Board} from './board';
import { Stack } from '@mui/material';
import { useState } from 'react';


export const TicTacToeWrapper = () => {
    const [nextPlayer, setNextPlayer] = useState('X');
    const [hasWinner, setHasWinner] = useState(false);
    return (
        <Stack gap={5}>
            <Header 
            nextPlayer={nextPlayer} 
            hasWinner={hasWinner} />

            <Board 
            setNextPlayer={setNextPlayer} 
            nextPlayer={nextPlayer} 
            setHasWinner={setHasWinner} 
            hasWinner={hasWinner}/>
        </Stack>
    )
};