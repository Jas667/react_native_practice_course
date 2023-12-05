import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.lightBlueBg, styles.box]}>Light blue box</Text>
      </View>
      <View>
        <Text style={[styles.lightGreenBg, styles.box]}>Light green box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    padding: 10,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
});
