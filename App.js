import { StyleSheet, View } from 'react-native';
import ComponentePicker from './src/Componentes/ComponentePicker';
import Home from './src/Componentes/Pages/Home/Home';
import Sobre from './src/Componentes/Pages/Home/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import Storage from './src/Componentes/Pages/Home/Storage';
import Contato from './src/Componentes/Pages/Home/Contato'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import ComponenteStorage from './src/Componentes/ComponenteStorage';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
          name="Home"
          component={Home}
          options= {{
            tabBarIcon:({color, size}) =>{
              return <Feather name = "home" color={color} size={size}/>
            }
          }}/>
          <Tab.Screen 
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon:({color, size}) => {
              return <Feather name= "search" color={color} size={size}/>

            }
          }}/>

          <Tab.Screen 
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon:({color, size}) => {
              return <Feather name = "phone" color={color} size={size}/>
            }
          }}

          />

          <Tab.Screen 
          name='Storage'
          component={ComponenteStorage}
          options={{
            tabBarIcon:({color, size}) => {
              return <Feather name="key" color={color} size={size}/>
            }
          }}/>
        </Tab.Navigator>
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

