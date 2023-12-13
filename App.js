import { StyleSheet, SafeAreaView, Platform } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const squData = {
    name: "Squirtle",
    image: require("./assets/Image1.png"),
    type: "Fire",
    hp: 70,
    moves: ["Tackle", "Tail Whip", "Water Gun", "Bubble"],
    weaknesses: ["Electric", "Grass"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...squData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
