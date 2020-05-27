import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);

  section {
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
      width: 80%;
      height: 80%;
      display: flex;
      flex-direction: column;
      color: #909090;
      margin: 10px;
      h1 {
        margin-bottom: 10px;
      }
    }
  }
`;
