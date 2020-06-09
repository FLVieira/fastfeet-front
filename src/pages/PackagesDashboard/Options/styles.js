import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
`;

export const Option = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2.5px;
  background: #fff;
  width: 120px;
  height: 30px;
  border: none;
  color: #909090;
  padding-left: 10px;

  b {
    font-weight: normal;
    margin-left: 10px;
    margin-right: auto;
  }

  &:hover {
    background: #eee;
  }
`;

export const OptionsList = styled.div`
  z-index: 1;
  position: absolute;
  width: 120px;
  height: 92px;
  border-radius: 5px;
  background-color: #fff;
  left: calc(50% - 60px);
  top: calc(50% + 15px);
  display: ${(props) => (props.visible === true ? 'block' : 'none')} !important;
  box-shadow: 0px 0px 1px 0px rgba(11, 11, 11, 1);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #eee;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;

    justify-content: space-between;
    ${Option}:nth-child(2) {
      border-top: 0.5px solid #eee;
      border-bottom: 0.5px solid #eee;
    }
  }
`;

export const ConfirmationModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  svg {
    margin: 20px 0;
  }

  h1 {
    color: #403e3b;
    font-size: 20px;
  }

  h3 {
    color: #615c54;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    height: 50%;

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

export const InfoModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start !important;
  padding: 20px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: flex-start !important;
  color: #909090;
  text-align: left;
  b {
    padding-bottom: 10px;
    color: #383838;
  }
  h4 {
    font-weight: normal;
    padding-bottom: 4px;
  }
`;

export const OrderDates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: flex-start !important;
  color: #909090;
  text-align: left;

  b {
    font-weight: bold;
    padding-bottom: 10px;
    color: #383838;
  }

  h4 {
    color: #909090;
    font-weight: normal;
  }
`;

export const OrderSignature = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
  width: 90%;
  height: 100px;
  border-top: 2px solid #eee;

  b {
    font-weight: bold;
    padding-bottom: 10px;
    color: #383838;
  }

  img {
    width: 280px !important;
    height: 80px !important;
  }
`;
