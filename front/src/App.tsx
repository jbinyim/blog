import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/headers/Header";
import Aside from "./components/headers/Aside";
import AddBlog from "./routes/AddBlog";
import Seemore from "./routes/Seemore";

const FixedBox = styled.div`
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <FixedBox>
        <Aside />
        <Header />
      </FixedBox>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/seemore/:id" element={<Seemore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
