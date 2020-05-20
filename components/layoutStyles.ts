import styled from "styled-components";

export const BackToHome = styled.div`
  margin: 3rem 0 0;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 6rem;
    height: 6rem;
    border-radius: 9999px;
  }
  & h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
  & h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
    & a {
      color: inherit;
    }
  }
`;
