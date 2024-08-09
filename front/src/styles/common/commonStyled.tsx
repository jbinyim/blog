import styled from "styled-components";

export const Container = styled.div`
  margin: 48px 0 0 296px;
  height: 100%;
  padding: 0 4%;
  @media ${({ theme }) => theme.mediaSize.m} {
    margin: 0;
    margin-top: 48px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  p {
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a {
    text-align: center;
    width: 75px;
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
