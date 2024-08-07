import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 296px);
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background: #fff;
  position: fixed;
  top: 0;
  left: 296px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  a {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const SearchBox = styled.span`
  position: relative;
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #000;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  padding-left: 30px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gray};
  outline: none;
`;

const Header = () => {
  return (
    <Container>
      <Inner>
        <Link to={"/"}>home</Link>
        <SearchBox>
          <SearchIcon viewBox="0 -960 960 960">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </SearchIcon>
          <Input type="text" />
        </SearchBox>
      </Inner>
    </Container>
  );
};

export default Header;
