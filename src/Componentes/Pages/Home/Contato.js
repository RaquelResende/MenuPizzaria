import { StyleSheet,Text, Touchable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Ionicons, FontAwesome} from "@expo/vector-icons";

export default function Contato() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>


     <Text style={styles.titulo}> <FontAwesome name="whatsapp" size={35} color="#25D366" /> Click é vá para o nosso Whatsapp</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
       flex: 1,
       justifyContent:"center",
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
  