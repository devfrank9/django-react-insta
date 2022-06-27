import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { MdHome, MdSend, MdAddBox, MdNavigation } from "react-icons/md";
import { IoMdHeart, IoMdList } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  return (
    <S.Layout>
      <S.Layout2>
        <S.Home onClick={() => navigate("/")}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
          />
        </S.Home>
        <input type="search" placeholder="Search" />
        <S.IconAlign>
          <MdHome onClick={() => navigate("/")} />
          <MdSend onClick={() => console.log("hi")} />
          <MdAddBox onClick={() => navigate("/")} />
          <MdNavigation onClick={() => navigate("/")} />
          <IoMdHeart onClick={() => navigate("/")} />
          <IoMdList onClick={() => setDropdown((prev) => !prev)} />
          <S.DropDown dropdown={dropdown}>
            <ul>
              <li onClick={() => navigate("/")}>프로필</li>
              <li onClick={() => navigate("/")}>로그아웃</li>
            </ul>
          </S.DropDown>
        </S.IconAlign>
      </S.Layout2>
    </S.Layout>
  );
};

export default Navbar;
