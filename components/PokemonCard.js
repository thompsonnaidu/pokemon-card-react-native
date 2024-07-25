import { View, Text, StyleSheet, Platform, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) {
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️Hp:{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
        accessibilityLabel={`${name} pokemon`}
      ></Image>
      <View style={styles.typeContainer}>
        <View style={[styles.badge,{borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContianer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        showColor: "#333",
        showdowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 24,
    color: "green",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer:{
    marginBottom:40,
    alignItems:"center",
  },
  badge:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:28,
    borderWidth:4,
  },
  typeEmoji:{
    fontSize:30,
    marginRight:12,
  },
  typeText:{
    fontSize:22,
    fontWeight:"bold",
  },
  movesContianer:{
    marginBottom:16,
  },
  movesText:{
    fontSize:22,
    fontWeight:"bold"
  },
    weaknessContainer:{
        marginBottom:16,
    },
    weaknessText:{
        fontSize:22,
        fontWeight:"bold"
    },
});
