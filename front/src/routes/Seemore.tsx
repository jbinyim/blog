import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/common/commonStyled";
import axios from "axios";
import { useMatch, Link } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";
import { BtnBox } from "../styles/common/commonStyled";

const Inner = styled.div`
  width: 100%;
  height: 500px;
  /* padding-top: 30px; */
`;

const VideoBox = styled.div`
  div {
    width: 80%;
    height: 720px;
    margin: 0 auto;
    @media ${({ theme }) => theme.mediaSize.xl} {
      width: 100%;
      height: 500px;
    }
  }
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
        `http://localhost:8080/seemore/${matchId?.params.id}`
      );
      setSeeMore(response.data);
    };
    fetchSeeMore();
  }, []);

  const opts: YouTubeProps[`opts`] = {
    width: "100%",
    height: "100%",
  };

  if (!seeMore) return <div>Loading...</div>;

  return (
    <Container>
      <BtnBox>
        <Link to={`/edit/${seeMore._id}`}>Edit</Link>
      </BtnBox>
      <Inner>
        <VideoBox>
          <YouTube videoId={seeMore.youtube} opts={opts} />
        </VideoBox>
        <h2>{seeMore.title}</h2>
      </Inner>
    </Container>
  );
};

export default Seemore;
