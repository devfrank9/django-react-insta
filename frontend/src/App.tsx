import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
