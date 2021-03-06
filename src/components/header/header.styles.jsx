import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.5s linear;
  &:hover {
    font-size: 17px;
    color: red;
  }
`;
