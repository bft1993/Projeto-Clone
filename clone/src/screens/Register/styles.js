import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const InputLogin = styled.TextInput`
  height: 31px;
  width: 188px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  padding-left: 5px;
  font-family: sans-serif;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputPassword = styled.TextInput`
    height: 31px;
    width: 188px;
    border: 2px solid #00FFFF;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

export const LoginButton = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginText = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: #120a8f;
  font-weight: bold;
  position: absolute;
`;