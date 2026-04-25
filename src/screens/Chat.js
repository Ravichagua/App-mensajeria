import { styles } from '../styles/ChatStyles';
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MessageBubble = ({ message, isSender }) => (
  <View
    style={[
      styles.messageBubble,
      isSender ? styles.senderBubble : styles.receiverBubble,
    ]}
  >
    <Text style={[styles.messageText, isSender && styles.senderMessageText]}>
      {message}
    </Text>
  </View>
);

export default function ChatScreen({ route }) {
  const { chatName } = route.params;
  const [messages, setMessages] = useState([
    { id: "1", text: "Hola, ¿cómo estas?", sender: false },
    { id: "2", text: "Ando bien, ¿y tu?", sender: true },
    { id: "3", text: "Todo bien, ¿Que cuentas?", sender: false },
  ]);
  const [inputText, setInputText] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <MessageBubble message={item.text} isSender={item.sender} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


