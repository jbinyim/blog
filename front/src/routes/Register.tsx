import React, { useState } from "react";
import { Container } from "../styles/common/commonStyled";
import { Inner, Form, Label, RegisterBtn } from "../styles/member/memberStyled";
import axios from "axios";

const Register = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !pw || !checkPw) {
      alert("아이디, 비밀번호, 비밀번호 확인을 입력해야 합니다.");
      return;
    }

    // 비밀번호 확인
    if (pw !== checkPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/member/register",
        {
          id,
          pw,
        }
      );
      setId("");
      setPw("");
      setCheckPw("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Inner>
        <h3>회원가입</h3>
        <Form onSubmit={handleSubmit}>
          <Label>
            아이디{" "}
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Label>
          <Label>
            비밀번호
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </Label>
          <Label>
            비밀번호 확인
            <input
              type="password"
              value={checkPw}
              onChange={(e) => setCheckPw(e.target.value)}
            />
          </Label>
          {pw !== checkPw && <p>비밀번호가 일치하지 않습니다.</p>}
          <RegisterBtn>회원가입 하기</RegisterBtn>
        </Form>
      </Inner>
    </Container>
  );
};

export default Register;
