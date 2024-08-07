import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/common/commonStyled";
import axios from "axios";
import { useMatch } from "react-router-dom";

const Inner = styled.div``;

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

  if (!seeMore) return <div>Loading...</div>;

  return (
    <Container>
      <Inner>{seeMore.title}</Inner>
    </Container>
  );
};

export default Seemore;
