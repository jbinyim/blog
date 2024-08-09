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
    border: none;
    border-bottom: 1px solid #000;
  }
`;

export const SubmitBtn = styled.button`
  width: 20%;
  height: 30px;
  background: #fff;
  color: ${({ theme }) => theme.colors.brown};
  border: 2px solid ${({ theme }) => theme.colors.brown};
  margin-bottom: 50px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.brown};
    color: #fff;
  }
`;
