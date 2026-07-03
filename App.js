import { StyleSheet, View } from 'react-native';
import ComponentePicker from './src/Componentes/ComponentePicker';
import Home from './src/Componentes/Pages/Home/Home';
import Sobre from './src/Componentes/Pages/Home/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
      </NavigationContainer>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
  



//   const lista = [
//     {id:"1", nome:"Raquel", email:"raquel@gmail"},
//     {id:"2", nome:"Ana", email:"Ana@gmail"},
//     {id:"3", nome:"Ezequiel", email:"Ezequiel@gmail"}
//   ]

//   return (
    
//     <View style={styles.container}>
//      <FlatList 
//      data={lista}
//      renderItem={({ item }) => <Pessoa data={item} />}
//       />
//      </View>
//   );
// }
// function Pessoa({data}){
//   return(
//     <View>
     
//       <Text>id:{data.id}</Text>
//       <Text>nome:{data.nome}</Text>
//       <Text>email:{data.email}</Text>
//     </View>
//   )

