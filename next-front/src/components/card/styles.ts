import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.primary}
  }

  @media(max-width: 600px){
    margin: 0 10px;
  }
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  padding: 20px 20px 0px;
  border-radius: 10px;

  max-width: 500px;
  width: 419px;

  @media(max-width: 500px){
    width: 337px;
  }

  > input {
    outline: none;
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 18px 13px;
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  }
`;

export const Options = styled.button`
  justify-content: center;
  margin-top: 10px;border-radius: 5px;
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: none;

  > button {
    color: ${props => props.theme.colors.primary};
    border: none;
    background-color: #fff;
  }
`;


