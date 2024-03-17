import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AddData from "./pages/addData";
import ImportData from "./pages/importData";
import { Button, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F9F9F9",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#F9F9F9" },
          }}
        />
      </ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/add_data" exact element={<AddData />}></Route>
          <Route path="/import_data" exact element={<ImportData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
