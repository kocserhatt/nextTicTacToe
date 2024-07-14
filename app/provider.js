"use client";

import { createTheme, ThemeProvider } from "@mui/material"

export const Provider = ({children}) =>{
    return(
    <ThemeProvider theme={createTheme()}>
    {children}
    </ThemeProvider>

    )
}