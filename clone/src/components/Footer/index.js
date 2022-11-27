import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import colors from '../../themes/colors.js';
import {Container} from './styles.js';

export default function Footer () {

    const navigation = useNavigation();

    function openLogin() {
        navigation.navigate("Login");
    }

    function openProduct() {
        navigation.navigate("Product");
    }

    function openFavorites() {
        navigation.navigate("Favorites");
    }

    // function openCart() {
    //     navigation.navigate("Cart");
    // }

    return (
        <Container>
            <TouchableOpacity onPress={openLogin}>
            <MaterialCommunityIcons
          name="home-outline"
          size={40}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openProduct}>
            <MaterialCommunityIcons
          name="shopping"
          size={30}
          color={colors.footerIcons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openFavorites}>
            <MaterialCommunityIcons
          name="star"
          size={35}
          color={colors.footerIcons} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={openCart}>
            <MaterialCommunityIcons
          name="cart"
          size={35}
          color={colors.footerIcons} />
            </TouchableOpacity> */}
        </Container>
    )
}