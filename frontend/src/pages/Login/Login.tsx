import React from "react";
import { Link } from "react-router-dom";
import CommInput from "../../components/CommInput";
import * as S from "./style";

const Login = () => {
  return (
    <S.Laytout>
      <S.Layout2>
        <S.BannerImg style={{ paddingBottom: "10px" }}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
          />
        </S.BannerImg>
        <CommInput inputType={"email"} placeholder={"name@example.com"} />
        <CommInput inputType={"password"} placeholder={"name@example.com"} />
        <S.Button>로그인</S.Button>
      </S.Layout2>
      <S.FooterText>
        <span>계정이 없으신가요?</span>
        <Link to={"/join"}>가입하기</Link>
      </S.FooterText>
    </S.Laytout>
  );
};

export default Login;
