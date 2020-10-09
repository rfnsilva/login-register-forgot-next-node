import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 300px;
  height: 300px;
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 45px 20px 45px;

  >input {
    outline: none;
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 18px 13px;
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  }
`;

