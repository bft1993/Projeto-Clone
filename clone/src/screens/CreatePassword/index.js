import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, InputPassword, LoginButton, LoginText } from "./styles";
import logo from "../../../assets/logo.jpeg";
import { Gradient } from "../../components/Gradient";
import { StatusBar } from "expo-status-bar";
export default function CreatePassword () {
   
  const [user, setUser] = useState({password: '', passwordConfirm: '',});
  const navigation = useNavigation();
  
  function screenPasswordChanged() {
    navigation.navigate("PasswordChanged");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Criar Senha</Title>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua nova senha'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.passwordConfirm}
        onChangeText={setUser}
        placeholder={'Repita sua nova senha'}
        placeholderTextColor={'gray'}
      />
      <LoginButton onPress={screenPasswordChanged}>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


