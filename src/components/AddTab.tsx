import { FC, useCallback } from "react";
import { usePlaygroundStore } from "../store";
import { Button, Grid } from "@mui/material";

const AddTab: FC = () => {
  const addTab = usePlaygroundStore((state) => state.addTab);

  const handleAddTab = useCallback(() => {
    addTab({ uuid: Math.random().toString() });
  }, [addTab]);

  return (
    <Grid item>
      <Button variant="contained" onClick={handleAddTab} disableElevation>
        Add tab
      </Button>{" "}
    </Grid>
  );
};

export default AddTab;
