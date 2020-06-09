import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  background-color: #fff;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;

  img {
    width: 200px;
    height: 45px;
    border-right: 2px solid #eee;
    padding: 10px 28px;
    margin-right: 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    ul {
      display: flex;
      justify-content: space-around;
      width: 44%;

      li {
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 90%;
      padding: 10px 20px;

      b {
        color: #383636;
        font-weight: bold;
      }

      button {
        border: none;
        color: #ed3434;
        background: #fff;
      }
    }
  }
`;

export const StyledLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#0b0b0b',
  },
})`
  text-decoration: none;
  font-weight: bold;
  color: #909090;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #403e3b;
  }

  h3 {
    color: #615c54;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    height: 20%;

    button {
      width: 45%;
      height: 30px;
      background: #7308c4;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7308c4')};
      }
    }
  }
`;
