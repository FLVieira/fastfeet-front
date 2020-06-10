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

export const ProblemsTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0px;

  thead th {
    color: #383636;
    text-align: left;
    padding: 12px 30px 28px 10px;

    &:last-child {
      text-align: center;
      padding-left: 20px;
    }
  }

  tbody td {
    padding: 10px;
    border-radius: 4px;
    border-bottom: 20px solid #eee;
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
