import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  console.log(title, text);

  const handleSubmit = async () => {
    try {
      // const response = await
    } catch (err) {}
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>내용</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">추가하기</button>
        </form>
      </div>
    </div>
  );
}

export default App;
