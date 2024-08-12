import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/common/commonStyled";
import { Box, Inner, Label, SubmitBtn } from "../styles/addEdit/addEditStyled";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/tail/blogs", {
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
          <Label>
            내용
            <textarea
              rows={20}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Label>
          <SubmitBtn type="submit">추가하기</SubmitBtn>
        </Inner>
      </Box>
    </Container>
  );
};

export default AddBlog;
