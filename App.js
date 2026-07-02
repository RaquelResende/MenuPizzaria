import { StyleSheet, View } from 'react-native';
import ComponentePicker from './src/Componentes/ComponentePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponentePicker />
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

