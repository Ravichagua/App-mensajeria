import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
