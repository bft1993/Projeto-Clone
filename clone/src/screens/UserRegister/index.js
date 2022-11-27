import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
export default function UserRegister () {

  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Usuario cadastrado com sucesso!</Title>
      <LoginButton onPress={screenLogin}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


