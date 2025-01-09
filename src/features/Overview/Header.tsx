import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack sx={{ textAlign: "center", padding: "1rem 0rem" }}>
      <Typography variant="h2">Vehicle Catalog</Typography>
      <Typography>
        View all information about the vehicle of your choice
      </Typography>
    </Stack>
  );
};

export default Header;
