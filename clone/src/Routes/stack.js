import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import CreatePassword from "../screens/CreatePassword";
import PasswordChanged from "../screens/PasswordChanged";
import Register from "../screens/Register";
import RegisterCategory from "../screens/RegisterCategory";
import CategoryChange from "../screens/CategoryChange";
import RegisterProduct from "../screens/RegisterProduct";
import ProductChange from "../screens/ProductChange";
// import Marketplace from '../screens/Marketplace';
import Product from "../screens/Product";
import Favorites from "../screens/Favorites";
// import Cart from '../screens/Cart';
import UserRegister from "../screens/UserRegister";
import PurchaseMade from "../screens/PurchaseMade";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {

    return (
        <Navigator screenOptions={{headerShown: false,}} initialRouteName="Login">
            <Screen name="Login" component={Login} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
            <Screen name="CreatePassword" component={CreatePassword} />
            <Screen name="PasswordChanged" component={PasswordChanged} />
            <Screen name="Register" component={Register} />
            <Screen name="RegisterCategory" component={RegisterCategory} />
            <Screen name="CategoryChange" component={CategoryChange} />
            <Screen name="RegisterProduct" component={RegisterProduct} />
            <Screen name="ProductChange" component={ProductChange} />
            {/* <Screen name="Marketplace" component={Marketplace} /> */}
            <Screen name="Product" component={Product} />
            <Screen name="Favorites" component={Favorites} />
            {/* <Screen name="Cart" component={Cart} /> */}
            <Screen name="UserRegister" component={UserRegister} />
            <Screen name="PurchaseMade" component={PurchaseMade} />
        </Navigator>
  );
}