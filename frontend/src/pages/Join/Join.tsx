import React from "react";
import { Link } from "react-router-dom";
import CommInput from "../../components/CommInput";
import * as S from "./style";

const Join = () => {
  return (
    <S.Layout>
      <S.Layout2>
        <S.BannerImg>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
          />
        </S.BannerImg>
        <S.BannerText>친구들의 사진과 동영상을 보려면 가입하세요.</S.BannerText>
        <CommInput inputType={"email"} placeholder={"이메일 주소"} />
        <CommInput inputType={"text"} placeholder={"성명"} />
        <CommInput inputType={"text"} placeholder={"사용자 이름"} />
        <CommInput inputType={"password"} placeholder={"비밀번호"} />
        <S.ButtonText>
          서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을
          수도 있습니다.
        </S.ButtonText>
        <S.Button>가입</S.Button>
      </S.Layout2>
      <S.FooterText>
        <span>계정이 있으신가요?</span>
        <Link to={"/login"}>로그인</Link>
      </S.FooterText>
    </S.Layout>
  );
};

export default Join;
