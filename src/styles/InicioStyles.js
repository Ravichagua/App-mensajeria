import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 16,
  },
  chatItem: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    backgroundColor: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#dfdfdf",
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 14,
    color: "gray",
  },
  input: {
    marginHorizontal: 15,
  },
  searchBar: {
    marginHorizontal: 5,
  },
});
