import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Container, Logo, Title, InputLogin, InputPassword, Recover, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.jpeg";
import { TouchableOpacity } from "react-native";
export default function Login() {
  
  const [user, setUser] = useState({login: '', senha: '',});
  const navigation = useNavigation();
  
  function screenForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  function screenRegister() {
    navigation.navigate("Register");
  }

  function screenProduct() {
    navigation.navigate("Product");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu Login'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.senha}
        onChangeText={setUser}
        placeholder={'Digite sua Senha'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity onPress={screenForgotPassword}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <LoginButton>
        <LoginText onPress={screenProduct}>ENTRAR</LoginText>
      </LoginButton>
      <TouchableOpacity onPress={screenRegister}>
        <Recover >Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}




