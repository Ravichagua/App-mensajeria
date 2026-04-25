import { styles } from '../styles/LoginStyles';
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
          source={require("../../assets/logo-full.png")}
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


