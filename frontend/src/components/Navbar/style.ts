import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  z-index: 999;
`;
export const Layout2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 80%;
  margin-top: 1rem;
`;
export const Home = styled.div`
  & > img {
    width: 15rem;
  }
`;
export const IconAlign = styled.div`
  position: relative;
  & > svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;
export const DropDown = styled.div<{ dropdown: boolean }>`
  display: ${(props) => (props.dropdown ? "block" : "none")};
  position: absolute;
  right: 0;
  font-size: 1.5rem;
`;
