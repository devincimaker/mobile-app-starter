import { StyleSheet, View, Text } from "react-native";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";

export default function TabTwoScreen() {
  const handleCreateTask = () => {
    console.log("Create new task for today");
    // TODO: Implement task creation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
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
