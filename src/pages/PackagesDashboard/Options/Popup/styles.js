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
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 12px 10px;
      color: #909090;

      div {
        display: flex;
        justify-content: space-around;
      }

      strong {
        color: #383838;
        font-weight: bold;
        font-size: 12px;
        margin: 0px;
        padding-bottom: 4px;
      }

      p {
        text-align: left;
      }

      b {
        color: #737070;
        font-size: 12px;
      }

      img {
        width: 280px;
        height: 80px;
      }
    }
  }
`;
