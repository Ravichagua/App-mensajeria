import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: "7%",
  },
  boton: {
    height: 50,
    borderWidth: 1,
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
  texto: {
    fontSize: 15,
    marginVertical: 16,
  },
  registro: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 20,
    textAlign: "right",
  },
  logo: {
    width: 300,
    resizeMode: "contain",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
