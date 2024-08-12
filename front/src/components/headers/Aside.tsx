import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

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

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 25px;
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
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    alert("로그아웃했습니다.");
    window.location.href = "/";
  };

  const goToPage = (link: string) => {
    navigate(`/member/${link}`);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <Container>
      <Inner>
        <div>
          <Img
            src="https://avatars.githubusercontent.com/u/110534614?v=4"
            alt="profile"
          />
          <Nickname>YJBin</Nickname>
          <MyId>jbinyim</MyId>
        </div>
        <IconBox>
          <Link
            to={"https://github.com/jbinyim"}
            target="__blank"
            title="깃허브"
          >
            <Icon
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </Link>
          <Link to={"https://www.youtube.com/@user-ggolovely"} target="__blank">
            <Icon
              src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
              alt="youtube"
            />
          </Link>
        </IconBox>
        <MemberBox>
          {token ? (
            <p onClick={handleLogout}>로그아웃</p>
          ) : (
            <p onClick={() => goToPage("login")}>로그인</p>
          )}

          <p onClick={() => goToPage("register")}>회원가입</p>
        </MemberBox>
      </Inner>
    </Container>
  );
};

export default Aside;
