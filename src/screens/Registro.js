import { styles } from '../styles/RegistroStyles';
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

export default function Registro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Usuario</Text>
      <TextInput style={styles.input} placeholder={"Usuario"} />

      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input} placeholder={"Email"} />

      <Text style={styles.texto}>Contrasena</Text>
      <TextInput style={styles.input} placeholder={"Contrasena"} />

      <Text style={styles.texto}>Confirmar contrasena</Text>
      <TextInput style={styles.input} placeholder={"Confirmar Contrasena"} />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.registro}>Volver a Login</Text>
      </TouchableOpacity>

      <Button
        title="Registrarse"
        style={styles.boton}
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}


