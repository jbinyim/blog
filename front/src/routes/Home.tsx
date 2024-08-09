import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { Container, BtnBox } from "../styles/common/commonStyled";

const CradBox = styled.ul`
  padding: 2% 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  @media screen and (max-width: 1750px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.xxl} {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.li`
  max-width: 250px;
  width: 100%;
  height: 400px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 870px) {
    max-width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaSize.m} {
    width: 70%;
    height: 550px;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: center;
  @media ${({ theme }) => theme.mediaSize.m} {
    height: 80%;
  }
`;

const TextBox = styled.div`
  padding: 2% 4%;
`;

const Title = styled.h4`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-top: 50px;
`;

interface IBlog {
  _id: string;
  title: string;
  text: string;
  img: string;
  youtube: string;
  updatedAt: string;
}

const Home = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const navigate = useNavigate();
  const matchId = useMatch("/:search");

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get("http://localhost:8080/blogs");
      setBlogs(response.data);
    };
    fetchBlog();
  }, []);

  const searchTerm = matchId?.params.search?.toLowerCase();
  const filteredBlogs = searchTerm
    ? blogs.filter((item) => item.title.toLowerCase().includes(searchTerm))
    : blogs;

  const onClickSeemore = (blogId: string) => {
    navigate(`/seemore/${blogId}`);
  };

  return (
    <Container>
      <BtnBox>
        <p>전체 게시글</p>
        <Link to={"/add"}>New</Link>
      </BtnBox>
      <CradBox>
        {filteredBlogs.map((item, idx) => (
          <Card key={idx} onClick={() => onClickSeemore(item._id)}>
            <Img src={item.img} alt="itemImg" />
            <TextBox>
              <Title>{item.title}</Title>
              <Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#5f6368"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
                <p>{item.updatedAt.slice(0, 10)}</p>
              </Text>
            </TextBox>
          </Card>
        ))}
      </CradBox>
    </Container>
  );
};

export default Home;
