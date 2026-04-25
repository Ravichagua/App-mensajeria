import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity>
          <Image
            style={styles.avatar}
            source={require("../assets/contact-icon.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Nombre</Text>
        <TextInput style={styles.input} placeholder="Tu nombre" />

        <Text style={styles.texto}>Info</Text>
        <TextInput style={styles.input} placeholder="Tu estado" />
      </View>

      <Button title="Guardar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  form: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 18,
    paddingVertical: 5,
    marginBottom: 20,
  },
});
