import {View, ScrollView, Text, TouchableOpacity, TextInput} from "react-native";
import AsyncStorage  from "@react-native-async-storage/async-storage"
import { useState } from "react";


export default function ComponenteStorage(){
    const [nome, setNome]= useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState(""); 
    const [usuarios, setUsuario] = useState([]);

    async function SalvarNovoUsuario (){
        // objeto 
        try{ 
        const novoUsuario = {
       id: Date.now().toString(),
       nome,
       idade,
       cidade,
        };
        const dados = await
        AsyncStorage.getItem("usuarios");
        let lista = [];
        if (dados !== null){
            lista =  JSON.parse(dados)
        }

        lista.push(novoUsuario);
        await AsyncStorage.setItem(
            "usuarios",
            JSON.stringify(lista)
        );
        setUsuario(lista);
        
        setNome("");
        setIdade("");
        setCidade("");
        alert("Usuario salvo com sucesso!")

    }catch(error){
        console.log("Erro",error);
    }
    }


    async function ResgatarUsuario() {
        try{
            const dados = await
            AsyncStorage.getItem("usuarios");
             
            if(dados !== null){
                setUsuario(JSON.parse(dados));

            }else{
                console.log("Nenhum usuário encontrado");
            }
        
        
        } catch(error){
        console.log("Erro",error)
    
         }


    } 
    
    async function removerUsuario(idUsuario){
        try{
        const novaLista = usuarios.filter(usuario => usuario.id !== idUsuario);

       await AsyncStorage.setItem(
        "usuarios",
       JSON.stringify(novaLista)
       );

        setUsuario(novaLista)

        }catch(error){
            console.log("Erro",error)
        }
    }
    
    
    
    return(

        <View>
        
       <ScrollView> 
       <Text>
        Cadastro do usuari 
       </Text>
       <TextInput 
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        />

        <TextInput 
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
        />
        <TextInput 
        placeholder="cidade"
        value={cidade}
        onChangeText={setCidade}
        />

        <TouchableOpacity onPress={SalvarNovoUsuario}>
         <Text>Salvar o Usuario</Text>
        </TouchableOpacity>
    
    

       </ScrollView>

        </View>

 
    )
}