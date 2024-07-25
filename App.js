import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const pokemonData = [
    {
      name: "Charmander",
      image: require("./assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"],
    },
    {
      name: "Squirtle",
      image: require("./assets/squirtle.png"), // Replace with the actual image path
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weaknesses: ["Electric", "Grass"],
    },
    {
      name: "Bulbasaur",
      image: require("./assets/bulbasaur.png"), // Replace with the actual image path
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    {
      name: "Pikachu",
      image: require("./assets/pikachu.png"), // Replace with the actual image path
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weaknesses: ["Ground"],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} 
        name={pokemon.name} 
        image={pokemon.image}
        type={pokemon.type} 
        hp={pokemon.hp}
        moves={pokemon.moves}
        weakness={pokemon.weaknesses}/>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: Platform.OS === "android" ? 25 : 0,
  },
});
