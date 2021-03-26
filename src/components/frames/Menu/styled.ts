import styled from 'styled-components';

export const MenuLayout = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  min-height: 100vh;
  background: #dfdfdf;
  padding-top: 20px;
  z-index: 2;
  & li {
    padding: 10px;
    text-align: center;
    font-size: 25px;
    color: #a6a7a8;
    &:hover {
      color: #888777;
    }
  }
`;

export const MenuItem = styled.div`
  display: inline-block;

  &:active {
    & li {
      color: black;
    }
  }
`;
