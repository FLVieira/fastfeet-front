import styled from 'styled-components';
import { lighten } from 'polished';

export const Background = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => lighten(0.3, props.theme)};
  width: 95px;
  height: 25px;
  border-radius: 8px;

  b {
    color: ${(props) => props.theme};
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme};
`;
