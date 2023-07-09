import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";
import LoginScreen from "./LoginScreen";

function Tasks({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={require("../assets/menu.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.bigBlack}> Tasks</Text>
      </View>

      <View style={styles.longHeader}>
        <Text style={styles.black}> Homework</Text>
      </View>
      <View style={styles.longHeader}>
        <Text style={styles.black}> Projects</Text>
      </View>
      <View style={styles.longHeader}>
        <Text style={styles.black}> Tests</Text>
      </View>
      <View style={styles.longHeader}>
        <Text style={styles.black}> Readings</Text>
      </View>
      <View style={styles.boxHeader}></View>
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
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  bigBlack: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  black: {
    color: "white",
  },
  headerView: {
    alignContent: "Top",
    marginBottom: 40,
  },
  longHeader: {
    //  width: 500,
    height: 25,
    backgroundColor: "chocolate",
    marginBottom: 100,
    // padding: 50,
  },
  boxHeader: {
    padding: 10,
    height: 15,
    marginBottom: 10,
    color: "black",
  },
});

export default Tasks;
