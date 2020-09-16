import React from 'react';
import styled from 'styled-components';
import { BiCameraMovie } from "react-icons/bi";

const HeaderWrapper = styled.header`
  padding: 50px 0 30px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
`
const Icon = styled.span`
  margin-left: 15px;
  margin-top: 5px;
`

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderWrapper>
      <Title>
        {props.title}{" "}
        <Icon>
          <BiCameraMovie />
        </Icon>
      </Title>
    </HeaderWrapper>
  );
}

export default Header;