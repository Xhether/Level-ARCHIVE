import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { registerRootComponent } from "expo";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
//import { Alert } from "react-native";
import AppNavigator from "./Components/AppNavigator";
//import DrawerNavigator from "./components/DrawerNavigator";
import Home from "./Components/Home";
//import LoginScreen from "./components/LoginScreen";

/*function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.openDrawer()} title="Go to Login" />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back Home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

//app navigator
*/
export default function App() {
  return <AppNavigator />;
}

//registerRootComponent(App);
