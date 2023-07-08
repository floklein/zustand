import Playground from "./components/Playground.tsx";
import { CssBaseline, Grid } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Playground />
        <Playground />
        <Playground />
      </Grid>
    </>
  );
}

export default App;
