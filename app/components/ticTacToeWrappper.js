"use client";

import {Header} from './header';
import {Board} from './board';
import { Stack } from '@mui/material';
import { useState } from 'react';


export const TicTacToeWrapper = () => {
    const [nextPlayer, setNextPlayer] = useState('X');
    const [hasWinner, setHasWinner] = useState(false);
    return (
        <Stack>
            <Header nextPlayer={nextPlayer} hasWinner={hasWinner} />
            <Board />
        </Stack>
    )
};