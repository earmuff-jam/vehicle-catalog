import * as React from "react";
import { Alert, Stack, Typography } from "@mui/material";

import EmptyComponent from "./EmptyComponent";
import { SampleJSONData } from "../Overview/type";
import Item from "./Item";

interface IDetailsProps {
  data: SampleJSONData | null;
}

const Details: React.FunctionComponent<IDetailsProps> = ({ data }) => {
  if (!data) {
    return <EmptyComponent caption="Please fill out the required fields." />;
  }

  return (
    <Stack spacing={2} sx={{ maxHeight: "calc(100vh - 1rem)" }}>
      <Alert variant="standard" severity="warning">
        {data.Message}
      </Alert>
      <Stack>
        <Typography>
          Viewing details for {data.SearchCriteria.toLocaleUpperCase()}
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        overflow={"auto"}
        justifyContent="center"
        padding={"1rem 0rem"}
      >
        {data.Results.map((vehicleDetails) => (
          <Item
            variable={vehicleDetails.Variable}
            value={vehicleDetails.Value}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
