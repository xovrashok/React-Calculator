import styled from 'styled-components';
import palette from './palette';

export const Container = styled.div`
  width: 300px;
  margin: 50px auto;
  background-color: ${palette.greyColors.grey20};
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px ${palette.black};
`;

export const InputPosition = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 245px;
  text-align: right;
  border: none;
  background-color: ${palette.greyColors.grey20};
  color: ${palette.white};
  font-size: 40px;
  padding: 30px 5px;
`;
export const OutPut = styled.div`
  
  text-align: center;
`;

export const ButtonDel = styled.button`
  background-color: ${palette.greyColors.grey20};
  color: ${palette.white};
  border: none;
  border-radius: 35px;
  width: 35px;
  height: 35px;
  margin: auto 2px;
  font-size: 10px;
  cursor: pointer;
`;
export const Button = styled.button`
  background-color: ${palette.greyColors.grey10};
  color: ${palette.white};
  border: none;
  border-radius: 35px;
  width: 70px;
  height: 70px;
  margin: 2px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 0 2px ${palette.greyColors.grey20};;
`;


