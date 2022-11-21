import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Events } from "./src/components/Events";

export default function App() {
  return (
    <>
      <Events />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
