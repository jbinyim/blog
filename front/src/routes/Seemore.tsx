import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/common/commonStyled";
import axios from "axios";
import { useMatch } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";

import BtnLink from "../components/component/BtnLink";

const Inner = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 15px;
`;

const VideoBox = styled.div`
  div {
    width: 80%;
    height: 720px;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
    @media ${({ theme }) => theme.mediaSize.xl} {
      width: 100%;
      height: 500px;
    }
  }
`;

const Title = styled.h2`
  font-size: 25px;
  width: 80%;
  margin: 20px auto 0;
`;

const TextBox = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gray};
  padding: 2%;
  margin-top: 20px;
  border-radius: 20px;
`;

const Date = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`;

const Text = styled.p`
  margin-top: 10px;
`;

interface IBlog {
  _id: string;
  title: string;
  text: string;
  img: string;
  youtube: string;
  updatedAt: string;
}

const Seemore = () => {
  const [seeMore, setSeeMore] = useState<IBlog>();
  const matchId = useMatch("/seemore/:id");

  useEffect(() => {
    const fetchSeeMore = async () => {
      const response = await axios.get(
        `http://localhost:8080/tail/seemore/${matchId?.params.id}`
      );
      setSeeMore(response.data);
    };
    fetchSeeMore();
  }, []);

  const formtText = (text: string) => {
    return text.split("\n").map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ));
  };

  const opts: YouTubeProps[`opts`] = {
    width: "100%",
    height: "100%",
  };

  if (!seeMore) return <div>Loading...</div>;

  return (
    <Container>
      <BtnLink
        text={seeMore.title}
        link={`edit/${seeMore._id}`}
        btnName="Edit"
      />

      <Inner>
        <VideoBox>
          <YouTube videoId={seeMore.youtube} opts={opts} />
        </VideoBox>
        <Title>{seeMore.title}</Title>
        <TextBox>
          <Date>{seeMore.updatedAt.slice(0, 10)}</Date>
          <Text>{formtText(seeMore.text)}</Text>
        </TextBox>
      </Inner>
    </Container>
  );
};

export default Seemore;
