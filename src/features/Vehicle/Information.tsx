import { Container, Typography } from "@mui/material";
import * as React from "react";
import { SampleJSONData } from "../Overview/type";
import Details from "./Details";

interface IInformationProps {
  data: SampleJSONData | null;
}

const Information: React.FunctionComponent<IInformationProps> = ({ data }) => {
  return (
    <Container maxWidth={"lg"}>
      <Typography variant="h3">Vehicle Details</Typography>
      <Details data={data} />
    </Container>
  );
};

export default Information;
