import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Sobre() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <Text>
        Página Secundária
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text >Volta para Home</Text>  
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
  