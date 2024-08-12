import styled from "styled-components";

export const Inner = styled.div`
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  input {
    height: 30px;
    padding: 0 3px;
  }
`;

export const RegisterBtn = styled.button`
  height: 30px;
  cursor: pointer;
`;
