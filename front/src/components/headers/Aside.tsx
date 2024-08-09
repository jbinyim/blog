import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 296px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray};
  position: fixed;
  top: 0;
  left: 0;
  @media ${({ theme }) => theme.mediaSize.m} {
    display: none;
  }
`;

const Inner = styled.div`
  height: 100%;
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Img = styled.img`
  width: 100%;
  height: 232px;
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

const MemberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 14px;
  p {
    cursor: pointer;
  }
`;

const Aside = () => {
  const navigate = useNavigate();

  const goToPage = (link: string) => {
    navigate(`/member/${link}`);
  };

  return (
    <Container>
      <Inner>
        <div>
          <Img
            src="https://avatars.githubusercontent.com/u/110534614?v=4"
            alt="profile"
          />
          <Nickname>꼬리</Nickname>
          <MyId>Tail</MyId>
        </div>
        <div>
          <p>깃허브</p>
          <p>유튜브</p>
        </div>
        <MemberBox>
          <p>로그인</p>
          <p onClick={() => goToPage("register")}>회원가입</p>
        </MemberBox>
      </Inner>
    </Container>
  );
};

export default Aside;
