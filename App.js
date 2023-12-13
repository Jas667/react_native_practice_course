import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
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

  const fashData = {
    name: "Fash",
    image: require("./assets/Image2.png"),
    type: "Water",
    hp: 66,
    moves: ["Fast Swim", "Water Gun", "Bubble"],
    weaknesses: ["Electric", "Air"],
  };

  const dragonData = {
    name: "Dragon",
    image: require("./assets/Image3.png"),
    type: "Electric",
    hp: 70,
    moves: ["Fire", "Tail Whip", "Wing Crush", "Teeth Gnash"],
    weaknesses: ["Water", "Grass"],
  };

  const strangeData = {
    name: "Strange",
    image: require("./assets/Image4.png"),
    type: "Grass",
    hp: 80,
    moves: ["Tackle", "Tail Whip", "Water Gun", "Bubble"],
    weaknesses: ["Electric", "Water"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...squData} />
        <PokemonCard {...fashData} />
        <PokemonCard {...dragonData} />
        <PokemonCard {...strangeData} />
      </ScrollView>
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
