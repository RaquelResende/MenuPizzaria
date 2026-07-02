import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} >
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
      <View style={styles.box6}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box1: {
    backgroundColor: 'red',
    height: 250,
     width:500,
  },

  box2: {
    backgroundColor: 'green',
    height: 250,
    width:500,
  },

  box3: {
    backgroundColor: 'yellow',
    height: 250,
    width:500,
  },

  box4: {
    backgroundColor: 'blue',
    height: 250,
    width:500,
  },
    box5: {
    backgroundColor: 'pink',
    height: 250,
    width:500,
  },
  box6: {
    backgroundColor: 'black',
    height: 250,
    width:600,
  },
});