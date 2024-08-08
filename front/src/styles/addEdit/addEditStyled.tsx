import styled from "styled-components";

export const Box = styled.div`
  padding-top: 30px;
`;

export const Inner = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    width: 50%;
    height: 30px;
    outline: none;
  }
`;
