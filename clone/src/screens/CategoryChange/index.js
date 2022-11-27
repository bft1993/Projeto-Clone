import { Container, InputLogin, Recover, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import {Header} from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Footer from "../../components/Footer";
export default function CategoryChange () {

  return (
    <Container>
      <Gradient />
      <Header title="Alterar Categoria" />
      <InputLogin
        placeholder={'Tec1'}
        placeholderTextColor={'blue'}
      />
      <InputLogin
        placeholder={'5.jpg'}
        placeholderTextColor={'blue'}
      />
      <TouchableOpacity>
        <Recover >Selecionar imagem</Recover>
      </TouchableOpacity>
      <LoginButton>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
