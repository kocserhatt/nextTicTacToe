import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box } from "@mui/material";
import { TicTacToeWrapper } from "./components/ticTacToeWrappper";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Box sx={{flexGrow :1}}>
          <TicTacToeWrapper />
        </Box>

      </Container>
    </main>
  );
}
