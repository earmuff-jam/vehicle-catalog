import { CssBaseline, Stack } from "@mui/material";
import Header from "./features/Overview/Header";
import CenterText from "./features/Overview/CenterText";
import VinForm from "./features/Overview/VinForm";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Stack
        spacing={2}
        sx={{
          height: "100%",
          backgroundSize: "stretch",
          backgroundImage: `url(${"./background.jpg"})`,
        }}
      >
        <Header />
        <CenterText />
        <VinForm />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
