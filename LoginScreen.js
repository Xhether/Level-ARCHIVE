import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";
import { Alert } from "react-native";
import AppNavigator from "../Components/AppNavigator";

function LoginScreen({ navigation }) {
  const loginScreen = () => Alert.alert("login");

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/levelLogo.png")}
          style={styles.catPic}
        />
        <Text style={styles.bigBlack}> Level </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Password" />
      </View>
      <View style={styles.goalsContainer}>
        <Button
          title="Log In"
          style={styles.medBlack}
          onPress={() => navigation.navigate("Home")}
          //THIS DOES NOT WORK PLEASE FIX ME
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "floralwhite",
  },
  inputContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    marginBottom: 10,
    marginLeft: 30,
    borderBottomColor: "black",
    borderRadius: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    width: "70%",
    marginRight: 8,
    padding: 13,
    borderRadius: 8,
    backgroundColor: "white",
  },
  goalsContainer: {
    flex: 5,
    alignItems: "center",
  },
  catPic: {
    width: 175,
    height: 175,
  },
  imgContainer: {
    alignItems: "center",
    paddingBottom: 100,
    paddingTop: 50,
  },
  bigBlack: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  medBlack: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LoginScreen;
