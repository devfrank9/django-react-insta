import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Layout2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  border: solid 0.1rem rgba(219, 219, 219, 1);
  margin-top: 3rem;
  background: white;
  width: 25rem;
  padding: 0 5rem;
  max-width: 26rem;
`;
export const BannerImg = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  & > img {
    width: 18rem;
  }
`;
export const BannerText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: gray;
  padding-bottom: 2rem;
  font-size: 1.7rem;
`;
export const ButtonText = styled.span`
  margin-bottom: 2rem;
`;
export const Button = styled.button`
  margin-bottom: 2rem;
`;
export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  text-align: center;
  border: solid 0.1rem rgba(219, 219, 219, 1);
  width: 25rem;
  padding: 0 5rem;
  height: 7rem;
  background: white;
`;
