import {View} from "react-native";
import AsyncStorage  from "@react-native-async-storage/async-storage"
import { useState } from "react";

export default function ComponenteStorage(){
    const [nome, setNome]= useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState(""); 
    const [usuarios, setUsuario] = useState("");

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
            AsyncStorage.getItem("usuario");
             
            if(dados !== null){
                setUsuario(JSON.parse(dados));

            }else{
                console.log("Nenhum usuário encontrado");
            }
        
        
        } catch(Error){
        console.log("Erro",error)
    
         }


    } 
    
    async function removerUsuario(idUsuario){
        try{
        const novaLista = usuarios.filter(usuario => usuario.id !== idUsuario);

       await AsyncStorage.setItem(
        "usuarios",
        JSON.toString(novaLista)
       );

        setUsuario(novaLista)

        }catch(Error){
            console.log("Erro",error)
        }
    }
    
    
    
    return(
        <View>
        
        </View>
    )
}