import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Image } from 'react-native';
import {Ionicons} from "@expo/vector-icons";


export default function Home() {
    const navigation = useNavigation()
    const [sabor, setSabor] = useState("")

    const pizzas = [{
    id:"1",
    nome:"Calabresa",
    imagem: "https://cdn.folhape.com.br/img/pc/450/450/dn_arquivo/2023/07/creditos-shutterstock.jpg"
 },
  {
    id:"2",
    nome:"Portuguesa",
    imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2020/06/Pizza-portuguesa-de-frigideira-freeepik-420x279.jpg"

  }];
 const pizzaSelecionada = pizzas.find((pizza) => pizza.nome == sabor);

  return (
    
     <View style={style.container}>
         <Text style={style.textTitulo}>Menu de Pizzas</Text>
     <Picker selectedValue={sabor} onValueChange={(itemValor, ) => setSabor(itemValor)} >
            
         {pizzas.map((pizza) =>(
         <Picker.Item
          key= {pizza.id}
          label={pizza.nome}
          value={pizza.nome}
             />
        ))}
         </Picker>

         {pizzaSelecionada &&(
            <Image 
            source={{uri: pizzaSelecionada.imagem}}
            style={style.imagem} />
         )}
          <Text>
            {sabor === "" ? "Não foi encontrado":
            ` ${sabor}`}
          </Text>

   <View style={style.navigato}>
      <TouchableOpacity style={style.botao}  onPress={() => navigation.navigate("Sobre")}>
     <Ionicons name="arrow-forward" size={24} color="white" />
      <Text style={style.texto}>Ir para Sobre</Text>
          
     </TouchableOpacity>
      </View>
       
      
        </View>
    );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#000",
  },
  texto:{
    color:"#fff",
    marginLeft:8,
  },
  textTitulo:{
    color:"#990707",
    fontSize:50,
    margin:90,
    borderColor: "#990707",
    borderWidth:2,
    borderRadius:12,
    alignItems:"center",
    paddingHorizontal:80,
  },

  imagem: {
    margin:20,
    width: 200,
    height: 200,
  },
navigato:{

 marginTop:100,
},
    botao: {
    flexDirection: "row",
    alignItems: "center",
  },
});

