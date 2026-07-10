import { useState } from "react"

export default function ComponentePizza(){
  
    const [nome, setNome] = useState("");
    const [preco, setPreço] = useState("");
    const [imagem, setImagem] = useState("");
    const [pizzas, setPizza] = useState([]);
    
async function SalvarSaborPizza() {

    try{
   const novaPizza = {
    id: Date.now().toString(),
    nome,
    preco,
    imagem
   }

   const dados = await AsyncStorage.getItem("pizzas");
   let lista= [];
  
   if (dados !== null){
   lista = JSON.parse(dados);
   }
  lista.push(novaPizza)

  await AsyncStorage.setItem("pizzas" , JSON.stringify(lista));
  setPizza(lista);

  setNome("");
  setPreço("");
  setImagem("");
  alert("Cadastro com Sucesso!");

    }catch(error){
        console.log("ERRO", error);
    }
    
};

async function ExibirPizzas() {

    try{
        const dados = await AsyncStorage.getItem("pizzas");

        if(dados !== null){
         setPizza(JSON.parse(dados))
        }else{
        console.log("Nenhum pizza foi encontrada")
        }

    }catch(error){
        console.log("ERRO", error);
    }
    
}

async function RemoverPizza(id) {

    try{ 
    const novaListaDePizza = pizzas.filter((pizza) => pizza.id !== id );
        await AsyncStrorage.setItem("pizzas", JSON.stringify(novaListaDePizza))
     
        setPizza(novaListaDePizza);
     }catch(error){
        console.log("Erro", error);
     }
}
return()

}