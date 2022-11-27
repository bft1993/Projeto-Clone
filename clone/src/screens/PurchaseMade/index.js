import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Title, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
export default function PurchaseMade () {

  const navigation = useNavigation();

  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Compra efetuada com sucesso!</Title>
      <LoginButton onPress={screenLogin}>
        <LoginText>VOLTAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


