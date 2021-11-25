import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
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
  iconContainerStyle: {
    alignSelf: "flex-end",
    bottom: 0,
    position: "absolute",
    right: 20,
    zIndex: 2000,
  },
});

export default styles;
