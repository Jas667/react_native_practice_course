import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance</Text>
      </View>
      <View>
        <Text
          style={[
            styles.lightBlueBg,
            styles.box,
            styles.boxShadow,
            styles.shadowColor,
          ]}
        >
          Light blue box
        </Text>
      </View>
      <View>
        <Text
          style={[
            styles.lightGreenBg,
            styles.box,
            styles.androidBoxShadow,
            styles.shadowColor,
          ]}
        >
          Light green box
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  box: {
    padding: 10,
    width: 250,
    height: 250,
    marginVertical: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidBoxShadow: {
    elevation: 10,
  },
  shadowColor: {
    shadowColor: "blue",
  },
});
