import React, { useState } from "react";
import { Container } from "../styles/common/commonStyled";
import { Inner, Form, Label, RegisterBtn } from "../styles/member/memberStyled";
import axios from "axios";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginId || !loginPw) {
      alert("아이디, 비밀번호를 입력해야합니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/member/login", {
        loginId,
        loginPw,
      });
      setLoginId("");
      setLoginPw("");
      if (response.status === 200) {
        // JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", response.data.token);
        window.location.href = "/"; // 홈 페이지로 리다이렉트
      }
      console.log("succes");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Inner>
        <h3>로그인</h3>
        <Form onSubmit={handleSubmit}>
          <Label>
            아이디
            <input
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </Label>
          <Label>
            비밀번호
            <input
              type="password"
              value={loginPw}
              onChange={(e) => setLoginPw(e.target.value)}
            />
          </Label>
          <RegisterBtn>로그인</RegisterBtn>
        </Form>
      </Inner>
    </Container>
  );
};

export default Login;
