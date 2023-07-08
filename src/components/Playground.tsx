import { FC, useMemo } from "react";
import { createPlaygroundStore, PlaygroundStoreContext } from "../store";
import Tabs from "./Tabs.tsx";
import AddTab from "./AddTab.tsx";
import { Grid, Paper, Typography } from "@mui/material";

const Playground: FC = () => {
  const store = useMemo(createPlaygroundStore, []);

  return (
    <PlaygroundStoreContext.Provider value={store}>
      <Grid item xs={4}>
        <Paper sx={{ p: 1, bgcolor: "grey.100" }} elevation={0}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography variant="h6">Playground</Typography>
            </Grid>
            <AddTab />
            <Tabs />
          </Grid>
        </Paper>
      </Grid>
    </PlaygroundStoreContext.Provider>
  );
};

export default Playground;
