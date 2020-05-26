import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ConfirmationContainer = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 4px;
  background: white;

  div {
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
      height: 33%;

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
  }
`;
