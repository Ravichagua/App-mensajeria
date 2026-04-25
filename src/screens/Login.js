import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setEmailError("El email es requerido.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("El formato del email es inválido.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("La contraseña es requerida.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/logo-full.png")}
        />
      </View>

      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder={"Email"}
        value={email}
        onChangeText={setEmail}
        onBlur={validateEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.texto}>Contrasena</Text>
      <TextInput
        style={styles.input}
        placeholder={"Contrasena"}
        value={password}
        onChangeText={setPassword}
        onBlur={validatePassword}
        secureTextEntry
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}

      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={styles.registro}>Registrate</Text>
      </TouchableOpacity>

      <Button
        title="Ingresar"
        style={styles.boton}
        onPress={() => navigation.navigate("Inicio")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: "7%",
  },
  boton: {
    height: 50,
    borderWidth: 1,
  },
  input: {
    width: 325,
    height: 50,
    backgroundColor: "white",

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",

    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  texto: {
    fontSize: 15,
    marginVertical: 16,
  },
  registro: {
    color: "blue",
    textDecorationLine: "underline",

    marginTop: 10,
    marginBottom: 30,

    marginHorizontal: 20,
    textAlign: "right",
  },
  logo: {
    width: 300,
    resizeMode: "contain",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
