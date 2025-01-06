// /pages/Login.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { students } from "../assets/dataset/studentdb";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }

    const student = students.find((s) => s.username === username);
    if (student && student.password === password) {
      alert("Login successful!");
      setUsername("");
      setPassword("");
      setError("");
      navigation.navigate("Home", { user: student });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://vau.ac.lk/wp-content/uploads/2021/07/cropped-UoV_Logo.png",
          }}
          style={styles.banner}
        />
      </View>
      <Text style={styles.heading}>Student Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          secureTextEntry={showPassword}
          mode="outlined"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
        />
        <Icon
          name={showPassword ? "visibility" : "visibility-off"}
          size={24}
          color="gray"
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        />
        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorContent}>{error}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
  },
  button: {
    width: 300,
    borderRadius: 20,
    marginTop: 20,
  },
  eyeIcon: {
    position: "absolute",
    right: 57,
    top: 100,
  },
  errorContainer: {
    backgroundColor: "pink",
    width: 350,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  errorContent: {
    fontSize: 16,
  },
});
