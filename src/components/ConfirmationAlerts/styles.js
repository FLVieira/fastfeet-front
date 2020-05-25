import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  height: 250px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #403e3b;
  }

  h3 {
    color: #615c54;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 80%;

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
