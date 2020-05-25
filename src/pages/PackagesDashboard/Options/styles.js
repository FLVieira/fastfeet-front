import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
`;

export const Teste = styled.div`
  position: absolute;
  display: none;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
`;

export const OptionsList = styled.div`
  display: none;
  position: absolute;
  width: 150px;
  height: 50px;
  background-color: #fff;
  left: calc(50% - 75px);
  top: calc(50% + 30px);
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 15px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #000;
  }
`;

export const Option = styled.div`
  button {
    width: 30px;
    height: 30px;
    border: none;
  }
`;
