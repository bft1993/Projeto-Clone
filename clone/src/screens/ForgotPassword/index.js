import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, InputLogin, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
export default function ForgotPassword() {

  const [user, setUser] = useState({cpf: '',});
  const navigation = useNavigation();
  
  function screenCreatePassword() {
    navigation.navigate("CreatePassword");
  }

  return (
    <Container>
    <Gradient />
    <Logo source={logo}/>
    <Title>Recuperar Senha</Title>
    <InputLogin
      value={user.cpf}
      onChangeText={setUser}
      placeholder={'Digite seu CPF'}
      placeholderTextColor={'gray'}
    />
    <LoginButton onPress={screenCreatePassword}>
      <LoginText>RECUPERAR</LoginText>
    </LoginButton>
    <StatusBar style="auto" />
    </Container>
  );
}


