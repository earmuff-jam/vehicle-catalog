import { Stack, Typography } from "@mui/material";
import * as React from "react";

interface IEmptyComponentProps {
  caption?: string;
}

const EmptyComponent: React.FunctionComponent<IEmptyComponentProps> = ({
  caption = "",
}) => {
  return (
    <Stack sx={{ textAlign: "center", padding: "1rem 0rem" }}>
      <Typography>Sorry, no matching data found.</Typography>
      {caption && <Typography variant="caption">{caption}</Typography>}
    </Stack>
  );
};

export default EmptyComponent;
