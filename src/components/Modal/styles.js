import styled from 'styled-components';

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
`;
