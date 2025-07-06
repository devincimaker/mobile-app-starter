import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSession } from "@/hooks/useSession";

/**
 * TODO: Call an assistant from here that uses an advanced voice session to:
 * 1. Gets context from you, how you're feeling today, goals and what you want to achieve.
 * 2. Stores relevant memories of you in a vector database.
 * 3. Creates a todo list for your day.
 * */

export default function HomeScreen() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All tasks</Text>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
});
