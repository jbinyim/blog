import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 296px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray};
  position: fixed;
  top: 0;
  left: 0;
`;

const Inner = styled.div`
  padding: 32px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const Nickname = styled.h3`
  font-size: 24px;
  line-height: 1.25;
  margin-top: 30px;
`;

const MyId = styled.p`
  font-size: 16px;
  color: rgba(26, 26, 26, 0.411);
  line-height: 1.5;
`;
const Aside = () => {
  return (
    <Container>
      <Inner>
        <Img
          src="https://avatars.githubusercontent.com/u/110534614?v=4"
          alt="profile"
        />
        <Nickname>YJBin</Nickname>
        <MyId>jbinyim</MyId>
      </Inner>
    </Container>
  );
};

export default Aside;
