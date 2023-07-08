import { FC, memo, useCallback } from "react";
import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Tab as ITab, usePlaygroundStore } from "../store";
import { DeleteOutlined } from "@mui/icons-material";

const Tab: FC<{ tab: ITab }> = memo(({ tab }) => {
  const deleteTab = usePlaygroundStore((state) => state.deleteTab);

  const handleDeleteTab = useCallback(() => {
    deleteTab(tab.uuid);
  }, [deleteTab, tab.uuid]);

  return (
    <Grid item key={tab.uuid} xs={6}>
      <Paper sx={{ p: 1 }}>
        <Stack direction="row">
          <Typography noWrap>{tab.uuid}</Typography>
          <IconButton onClick={handleDeleteTab}>
            <DeleteOutlined />
          </IconButton>
        </Stack>
      </Paper>
    </Grid>
  );
});

export default Tab;
