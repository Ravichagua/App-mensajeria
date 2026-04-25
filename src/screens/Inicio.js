import { styles } from '../styles/InicioStyles';
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ChatItem = ({ name, message, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("Chat", { chatName: name })}
  >
    <View style={styles.chatItem}>
      <Image
        style={styles.avatar}
        source={require("../../assets/contact-icon.png")}
      />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{name}</Text>
        <Text style={styles.chatMessage}>{message}</Text>
      </View>
      <View style={styles.chatFecha}>
        <Text style={styles.fecha}>Hoy a las 10:00am</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="Escribe un nombre" />
        </View>

        <ChatItem
          name="Juan Perez"
          message="Hola, ¿cómo estás?"
          navigation={navigation}
        />
        <ChatItem
          name="Maria Garcia"
          message="Nos vemos mañana."
          navigation={navigation}
        />
        <ChatItem
          name="Carlos Sanchez"
          message="¡Perfecto!"
          navigation={navigation}
        />
        <ChatItem
          name="Laura Rodriguez"
          message="No te preocupes."
          navigation={navigation}
        />
        <ChatItem
          name="Ana Martinez"
          message="Gracias por tu ayuda."
          navigation={navigation}
        />
        <ChatItem
          name="David Gomez"
          message="¡Claro! Te envío el archivo."
          navigation={navigation}
        />
        <ChatItem
          name="Sofia Hernandez"
          message="¿A qué hora nos vemos?"
          navigation={navigation}
        />
        <ChatItem
          name="Miguel Torres"
          message="Suena bien."
          navigation={navigation}
        />
        <ChatItem
          name="Elena Flores"
          message="Recibido, gracias."
          navigation={navigation}
        />
        <ChatItem
          name="Javier Diaz"
          message="Ok, lo reviso."
          navigation={navigation}
        />
        <ChatItem
          name="Isabel Castillo"
          message="¿Puedes ayudarme con esto?"
          navigation={navigation}
        />
        <ChatItem
          name="Ricardo Ortiz"
          message="Nos vemos el lunes."
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}


