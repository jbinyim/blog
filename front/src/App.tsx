import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  console.log(title, text);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/blogs", {
        title,
        text,
      });
      setTitle("");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App">
  <div>
    <form onSubmit={handleSubmit}>
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        id="title"
      />
      <label>내용</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="text"
        id="text"
      />
      <button type="submit">추가하기</button>
    </form>
  </div>
</div>; */
}
