import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer.component";
import Header from "./Components/Header/Header.component";
import AppRoutes from "./AppRoutes";
import { Container } from "@mui/material";
import './GlobalStyles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container >
      <AppRoutes />

      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
