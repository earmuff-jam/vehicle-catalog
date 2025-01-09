import { Card, Stack, Typography } from "@mui/material";
import * as React from "react";

interface IItemProps {
  variable: string | null | undefined;
  value: string | null | undefined;
}

const Item: React.FunctionComponent<IItemProps> = ({ variable, value }) => {
  return (
    <Card
      sx={{
        width: "40%",
        padding: "1rem",
      }}
    >
      <Stack flexGrow={1}>
        <Typography color="text.secondary">{variable}</Typography>
        <Typography>{value || "Unknown"}</Typography>
      </Stack>
    </Card>
  );
};

export default Item;
