import styled from 'styled-components';

export const Container = styled.section`
  width: 60%;
  margin: 50px auto;
  background: #eee;
  height: 100%;
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LeftInfo = styled.div`
  h1 {
    color: #383636;
  }
`;

export const RightInfo = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: space-around;
  height: 40px;

  a {
    background: #7308c4;
    border: none;
    border-radius: 4px;
    width: 100px;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
  }

  button {
    background: #7308c4;
    border: none;
    border-radius: 4px;
    width: 100px;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
  }
`;

export const FormArea = styled.div`
  width: 100%;
  background: #fff;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 25px;

  b {
    color: #3d3b3b;
  }

  input {
    margin: 10px 0;
    padding: 0 10px;
    font-size: 15px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 3px dashed #909090;
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;

    img {
      max-width: 180px;
      max-height: 180px;
    }

    input {
      display: none;
    }
  }
`;
