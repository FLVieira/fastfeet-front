import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  margin: 50px auto;
  background: #eee;
  height: 100%;

  h1 {
    color: #383636;
    margin-bottom: 50px;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    width: 220px;
    background: #fff;
    height: 40px;
    border: 1px solid #ded9d9;
    padding: 5px;

    input {
      margin-left: 2px;
      border: none;
    }
  }

  a {
    color: inherit;
    background: #7308c4;
    border: none;
    border-radius: 4px;
    width: 150px;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
  }
`;

export const PackagesTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0px;

  thead th {
    color: #383636;
    text-align: left;
    padding: 12px 12px 28px 12px;

    &:last-child {
      text-align: center;
    }
  }

  tbody td {
    padding: 12px;
    border-radius: 4px;
    border-bottom: 20px solid #eee;
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    strong {
      margin-left: 5px;
    }
  }

  aside {
    display: flex;
    justify-content: center;
  }

  strong {
    color: #525050;
    font-weight: normal;
    display: block;
  }

  tbody {
    background: #fff;
  }
`;
