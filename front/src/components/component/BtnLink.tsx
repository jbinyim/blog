import React, { useEffect, useState } from "react";
import { BtnBox } from "../../styles/common/commonStyled";
import { Link } from "react-router-dom";

interface btnLinkI {
  text: string;
  link: string;
  btnName: string;
}

const BtnLink = ({ text, link, btnName }: btnLinkI) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    const decodeToken = (token: string) => {
      // JWT 디코딩 (여기서는 간단히 페이로드를 추출하는 예시)
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload; // 필요한 사용자 정보 반환
    };

    if (storedToken) {
      const user = decodeToken(storedToken);
      setIsAdmin(user.id === "admin");
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <BtnBox>
      <p>{text}</p>
      {isAdmin && <Link to={`/${link}`}>{btnName}</Link>}
    </BtnBox>
  );
};

export default BtnLink;
