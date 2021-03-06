import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  //   border: 2px solid turquoise;
  display: flex;
  flex-direction: column;
  height: 600px;
  margin: auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  border-radius: 5px;
  margin-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
`;

export const Base = styled.form`
  //   border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 450px;
  width: 100%;
`;
export const Input = styled.input`
  background: #333;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 5px 20px;
  line-height: 50px;
  border: 0;
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 16px;
  margin: 24px 0 12px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
