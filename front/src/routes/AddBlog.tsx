import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/common/commonStyled";

const Box = styled.div`
  padding-top: 30px;
`;

const Inner = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    width: 50%;
    height: 30px;
    outline: none;
    /* border: none; */
    /* border-radius: 16px; */
    /* background: ${({ theme }) => theme.colors.gray}; */
  }
`;

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/blogs", {
        title,
        text,
        img,
        youtube,
      });
      setTitle("");
      setText("");
      setImg("");
      setYoutube("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Box>
        <Inner onSubmit={handleSubmit}>
          <Label>
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>
          <Label>
            내용
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Label>
          <Label htmlFor="">
            이미지 주소
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </Label>
          <Label htmlFor="">
            유튜브 주소
            <input
              type="text"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </Label>
          <button type="submit">추가하기</button>
        </Inner>
      </Box>
    </Container>
  );
};

export default AddBlog;
