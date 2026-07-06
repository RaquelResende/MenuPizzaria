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

     <Text style={styles.titulo} >Sobre</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
       flex: 1,
     paddingTop:40,
        alignItems: "center",
        backgroundColor:"#000",
  },
  titulo:{

    color:"#990707",
    fontSize:50,
    borderColor: "#990707",
    borderRadius:10,
    borderCurve:5,
    paddingHorizontal:50,
    borderWidth:2,

    

  }
  }
);
  