import { StyleSheet, View, Text } from "react-native";

/**
 * TODO: Call an assistant from here that uses an advanced voice session to:
 * 1. Gets context from you, how you're feeling today, goals and what you want to achieve.
 * 2. Stores relevant memories of you in a vector database.
 * 3. Creates a todo list for your day.
 * */

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
