import Reactm, { useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/common/commonStyled";
import axios from "axios";

const Inner = styled.div`
  height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  input {
    height: 30px;
    padding: 0 3px;
  }
`;

const RegisterBtn = styled.button`
  height: 30px;
  cursor: pointer;
`;

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

  console.log(id === "");

  return (
    <Container>
      <Inner>
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
      Z
    </Container>
  );
};

export default Register;
