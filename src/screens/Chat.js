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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },

  messagesContainer: {
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    maxWidth: "70%",
    marginBottom: 10,
  },
  senderBubble: {
    backgroundColor: "blue",
    alignSelf: "flex-end",
  },
  receiverBubble: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 8,
  },
  senderMessageText: {
    color: "white",
  },
});
