import {StyleSheet, View, Text, Image} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function ComponentePicker(){

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

  }]



   const pizzaSelecionada = pizzas.find((pizza) => pizza.nome == sabor);

    return(
        <View style={style.container}>
            <Text>Menu de Pizzas</Text>
          <Picker selectedValue={sabor} onValueChange={(itemValor, ) => setSabor(itemValor)} >
            
        <Picker.Item  label="Escolha uma pizza" value=""/>

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
            `Seu valor é ${sabor}`}
          </Text>
        </View>
    );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    margin:20,
    width: 200,
    height: 200,
  },
});