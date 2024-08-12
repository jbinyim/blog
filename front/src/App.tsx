import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/headers/Header";
import Aside from "./components/headers/Aside";
import AddBlog from "./routes/AddBlog";
import Seemore from "./routes/Seemore";
import Edit from "./routes/Edit";
import Register from "./routes/Register";
import Login from "./routes/Login";

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
        <Route path="/tail/*" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/seemore/:id" element={<Seemore />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
