import React from "react";
import { styles } from '../styles/PerfilStyles';
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
            source={require("../../assets/contact-icon.png")}
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


