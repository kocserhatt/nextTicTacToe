import{ Stack, Typography } from '@mui/material';

export const Header = ({nextPlayer, hasWinner}) => {
    return (
        <Stack>
            <Typography variant="h2" component="h2">Tic Tac Toe</Typography>
            <Typography variant="h6" component="h2">{`Next Player: ${nextPlayer}`}</Typography>
            <Typography variant="h6" component="h2">{hasWinner && `Winner: ${nextPlayer === 'x' ? 'o' : 'x'}`}</Typography>
        </Stack>
    )
}