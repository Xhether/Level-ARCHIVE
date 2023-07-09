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

function Home({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image source={require("../assets/menu.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.bigBlack}> Courses</Text>
      </View>
      <View style={styles.PhysicsBtn}>
        <Button
          title="Physics"
          onPress={() => navigation.navigate("Tasks")}
          color="white"
        />
      </View>
      <View style={styles.CalculusBtn}>
        <Button
          title="Calculus"
          onPress={() => navigation.navigate("Tasks")}
          color="white"
        />
      </View>
      <View style={styles.ResearchBtn}>
        <Button
          title="Research"
          onPress={() => navigation.navigate("Tasks")}
          color="white"
        />
      </View>
      <View style={styles.DataStructuresBtn}>
        <Button
          title="Data Structures"
          onPress={() => navigation.navigate("Tasks")}
          color="white"
        />
      </View>
      <View style={styles.DiscreteMathBtn}>
        <Button
          title="Discrete Math"
          onPress={() => navigation.navigate("Tasks")}
          color="white"
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
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  PhysicsBtn: {
    borderWidth: 1,
    borderColor: "darkred",
    // width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "darkred",
  },
  CalculusBtn: {
    borderWidth: 1,
    borderColor: "darkorange",
    // width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "darkorange",
  },
  ResearchBtn: {
    borderWidth: 1,
    borderColor: "peru",
    // width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "peru",
  },
  DataStructuresBtn: {
    borderWidth: 1,
    borderColor: "chocolate",
    // width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "chocolate",
  },
  DiscreteMathBtn: {
    borderWidth: 1,
    borderColor: "burlywood",
    // width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "burlywood",
  },
  bigBlack: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  headerView: {
    alignContent: "Top",
    marginBottom: 40,
  },
});

export default Home;
