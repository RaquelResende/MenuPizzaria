import { StyleSheet,Text, Touchable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Sobre() {
    const navigate = useNavigation()
  return (
    <View style={styles.container}>
    <Text>
        Página Secundária
    </Text>
    <Touchable>
      <Text onPress={() => navigation.navigate("Home")}> title='Volta para Home' </Text>  
    </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
  