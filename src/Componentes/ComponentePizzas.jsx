import { useState } from "react";
import { View, ScrollView, TextInput, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ComponentePizzas() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [pizzas, setPizza] = useState([]);

  async function SalvarSaborPizza() {
    try {
      const novaPizza = {
        id: Date.now().toString(),
        nome,
        preco,
        imagem,
      };

      const dados = await AsyncStorage.getItem("pizzas");
      let lista = [];

      if (dados !== null) {
        lista = JSON.parse(dados);
      }
      lista.push(novaPizza);

      await AsyncStorage.setItem("pizzas", JSON.stringify(lista));
      setPizza(lista);

      setNome("");
      setPreco("");
      setImagem("");
      alert("Cadastro com Sucesso!");
    } catch (error) {
      console.log("ERRO", error);
    }
  }

  async function ExibirPizzas() {
    try {
      const dados = await AsyncStorage.getItem("pizzas");

      if (dados !== null) {
        setPizza(JSON.parse(dados));
      } else {
        console.log("Nenhum pizza foi encontrada");
      }
    } catch (error) {
      console.log("ERRO", error);
    }
  }

  async function RemoverPizza(id) {
    try {
      const novaListaDePizza = pizzas.filter((pizza) => pizza.id !== id);
      await AsyncStorage.setItem("pizzas", JSON.stringify(novaListaDePizza));

      setPizza(novaListaDePizza);
    } catch (error) {
      console.log("Erro", error);
    }
  }
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.titulo}>
          <Text>Cadastro de Pizzas</Text>
        </View>

        <View>
          <Text>Nome:</Text>
          <TextInput style={style.input}
            placeholder="Nome da Pizza"
            value={preco}
            onChangeText={setNome}
          />
        </View>

        <View>
          <Text>Preço:</Text>
          <TextInput style={style.input}
            placeholder="Preço da Pizza"
            value={nome}
            onChangeText={setPreco}
          />
        </View>

        <View>
          <Text>Imagem:</Text>
          <TextInput style={style.input}
            placeholder="Imagem da Pizza"
            value={nome}
            onChangeText={setImagem}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e6e5",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    color: "#350000",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7a7a7a",
    
  },
});
