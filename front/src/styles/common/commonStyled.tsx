import styled from "styled-components";

export const Container = styled.div`
  margin: 48px 0 0 296px;
  height: 100%;
  padding: 0 4%;
`;

export const BtnBox = styled.div`
  text-align: right;
  padding: 2% 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  a {
    width: 85px;
    height: 36px;
    font-size: 14px;
    line-height: 20px;
    padding: 5px;
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.brown};
  }
`;
