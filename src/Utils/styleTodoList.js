import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #333;
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

export const ButtonComponent = styled.button`
  display: inline-block;
  white-space: nowrap;
  background-color: #f58e8c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 15px;

  &:hover {
    background-color: #ff6659;
  }

  &:active {
    background-color: #e53935;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputForm = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ButtonForm = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff6659;
  }

  &:active {
    background-color: #e53935;
  }
`;
