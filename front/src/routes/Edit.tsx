import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styles/common/commonStyled";
import { useMatch, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Inner, Label } from "../styles/addEdit/addEditStyled";
import { BtnBox } from "../styles/common/commonStyled";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const matchId = useMatch("/edit/:id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeeMore = async () => {
      const response = await axios.get(
        `http://localhost:8080/edit/${matchId?.params.id}`
      );

      setTitle(response.data.title);
      setText(response.data.text);
      setImg(response.data.img);
      setYoutube(response.data.youtube);
    };
    fetchSeeMore();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const editBlog = { title, text, img, youtube };
      const response = await axios.put(
        `http://localhost:8080/edit/${matchId?.params.id}`,
        editBlog
      );
      console.log("수정성공", response.data);
      navigate("/");
    } catch (err) {
      console.log("수정실패", err);
      alert("수정을 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하겠습니까?")) {
      try {
        await axios.delete(`http://localhost:8080/edit/${matchId?.params.id}`);
        navigate("/");
      } catch (err) {
        console.log("삭제실패", err);
        alert("삭제를 실패했습니다.");
      }
    }
  };

  return (
    <Container>
      <BtnBox>
        <button onClick={handleDelete}>삭제</button>
      </BtnBox>
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
          <button type="submit">수정하기</button>
        </Inner>
      </Box>
    </Container>
  );
};

export default Edit;
