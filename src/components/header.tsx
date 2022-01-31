import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderContainer>
      <AppleLogo src="/assets/imgs/apple.svg" alt="" />
      <Hightlight> Finder </Hightlight>
      <Nav>
        <Link> File </Link>
        <Link> Edit </Link>
        <Link> Selection </Link>
        <Link> View </Link>
      </Nav>

      <Battery src="/assets/imgs/battery.svg" alt="" />
      <img src="/assets/imgs/wifi.svg" alt="" />
      <Switch src="/assets/imgs/switch.svg" alt="" />
      <img src="/assets/imgs/search.svg" alt="" />

      <Time> Sun 30 Jan 5:34 PM </Time>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.1);
  height: 25px;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  padding: 0px 16px;
  color: #fff;
  gap: 14px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 5px;
  padding: 0px;
  height: 25px;
  align-items: stretch;
  cursor: pointer;
  margin-right: auto;
`;

const Link = styled.a`
  font-size: 13px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Hightlight = styled.h5`
  font-weight: medium;
  font-size: 13px;
`;

const Time = styled(Hightlight)`
  font-weight: normal;
`;

const AppleLogo = styled.img`
  width: 23px;
  height: 23px;
`;

const Battery = styled.img`
  width: 28px;
  height: 30px;
`;
const Search = styled.img``;

const Switch = styled.img`
  width: 20px;
`;
