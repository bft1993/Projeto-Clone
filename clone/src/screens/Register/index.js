import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, InputLogin, InputPassword, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import {Header} from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Footer from "../../components/Footer";
export default function Register () {
    
  const [user, setUser] = useState({login: '', cpf: '', dataDeNasc: '', password: '',passwordConfirm: '',});
  const navigation = useNavigation();
  
  function screenUserRegister() {
    navigation.navigate("UserRegister");
  }

  return (
    <Container>
      <Gradient />
      <Header title="Cadastro" />
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'CPF'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.dataDeNasc}
        onChangeText={setUser}
        placeholder={'Data de Nascimento'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Senha'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.passwordConfirm}
        onChangeText={setUser}
        placeholder={'Confirmar Senha'}
        placeholderTextColor={'gray'}
      />
      <LoginButton onPress={screenUserRegister}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
