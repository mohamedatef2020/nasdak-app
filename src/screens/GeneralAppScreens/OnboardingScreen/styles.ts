import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  textContainer: { flex: 0.2 },
  title: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
  },
  description: { color: "#fff", fontWeight: "300" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
