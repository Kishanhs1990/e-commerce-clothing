import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const MenuItem = styled.div`
  min-width: 30%;
  height: ${props => (props.size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    > div {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const BackgroundImage = styled.div`
  /* background-image: url({${props => props.imageUrl}}); */
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const Menu = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItem
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </MenuItem>
  );
};

export default withRouter(Menu);
