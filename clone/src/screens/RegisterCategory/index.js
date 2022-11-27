import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, InputLogin, Recover, LoginButton, LoginText } from "./styles";
import { Gradient } from "../../components/Gradient";
import {Header} from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Footer from "../../components/Footer";
export default function RegisterCategory () {

  const [user, setUser] = useState({nome: '', preco: '', quantidadeEmEstoque: '', imagem: '',});
  const navigation = useNavigation();
  
  function screenProduct() {
    navigation.navigate("Product");
  }

  return (
    <Container>
      <Gradient />
      <Header title="Cadastro de Categoria" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.imagem}
        onChangeText={setUser}
        placeholder={'Imagem'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity>
        <Recover >Selecionar imagem</Recover>
      </TouchableOpacity>
      <LoginButton onPress={screenProduct}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
