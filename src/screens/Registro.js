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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: "10%",
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
  registro: {
    color: "blue",
    textDecorationLine: "underline",

    marginTop: 10,
    marginBottom: 30,

    marginHorizontal: 20,
    textAlign: "right",
  },
  texto: {
    fontSize: 15,
    marginVertical: 16,
  },
});
