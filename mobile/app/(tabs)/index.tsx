import { StyleSheet, View, Text } from "react-native";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";

/**
 * TODO: Call an assistant from here that uses an advanced voice session to:
 * 1. Gets context from you, how you're feeling today, goals and what you want to achieve.
 * 2. Stores relevant memories of you in a vector database.
 * 3. Creates a todo list for your day.
 * */

export default function HomeScreen() {
  const handleCreateTask = () => {
    console.log("Create new task");
    // TODO: Implement task creation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All tasks</Text>
      <FloatingActionButton onPress={handleCreateTask} />
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
});
