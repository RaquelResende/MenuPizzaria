import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function ComponenteStorage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [usuarios, setUsuario] = useState([]);

  async function SalvarNovoUsuario() {
    // objeto
    try {
      const novoUsuario = {
        id: Date.now().toString(),
        nome,
        idade,
        cidade,
      };
      const dados = await AsyncStorage.getItem("usuarios");
      let lista = [];
      if (dados !== null) {
        lista = JSON.parse(dados);
      }

      lista.push(novoUsuario);
      await AsyncStorage.setItem("usuarios", JSON.stringify(lista));
      setUsuario(lista);

      setNome("");
      setIdade("");
      setCidade("");
      alert("Usuario salvo com sucesso!");
    } catch (error) {
      console.log("Erro", error);
    }
  }

  async function ResgatarUsuario() {
    try {
      const dados = await AsyncStorage.getItem("usuarios");

      if (dados !== null) {
        setUsuario(JSON.parse(dados));
      } else {
        console.log("Nenhum usuário encontrado");
      }
    } catch (error) {
      console.log("Erro", error);
    }
  }

  async function removerUsuario(idUsuario) {
    try {
      const novaLista = usuarios.filter((usuario) => usuario.id !== idUsuario);

      await AsyncStorage.setItem("usuarios", JSON.stringify(novaLista));

      setUsuario(novaLista);
    } catch (error) {
      console.log("Erro", error);
    }
  }
  function modal() {
    setModalVisible(true);
  }
  function fecharModal() {
    setModalVisible(false);
  }

  return (
    <View style={style.containe}>
      <ScrollView>
        <View style={style.tituloContaine}>
          <Text style={style.titulo}>Cadastro do Usuario</Text>
        </View>

        <label style={style.labelDescricao}>Nome:</label>
        <TextInput
          style={style.textImput}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <label style={style.labelDescricao}>Idade:</label>
        <TextInput
          style={style.textImput}
          placeholder="Idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />

        <label style={style.labelDescricao}>Cidade:</label>
        <TextInput
          style={style.textImput}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />

        <View style={style.botao}>
          <TouchableOpacity
            style={style.botao}
            onPress={() => {
              ResgatarUsuario();
              modal();
            }}
          >
            <Text style={style.botaoSalvar}>Exibir Usuario</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={style.modalContainer}>
            <View>
              <Text style={style.modalTitulo}>
                <FontAwesome name="user" size={20} color={"#0b76a8"} />
                Usuario Cadastrado
              </Text>
              <TouchableOpacity
                onPress={fecharModal}
                style={style.botaoFecharModal}
              >
                <Text>
                  <FontAwesome name="close" size={20} color={"#0b76a8"} />
                </Text>
              </TouchableOpacity>
              
            </View>
            <View style={style. cardUsuario}>
            {usuarios.map((usuario) => (
              <View style={style. usuarioTexto}  key={usuario.id}>
                <Text> {usuario.nome}</Text>
                <Text> {usuario.idade}</Text>
                <Text> {usuario.cidade}</Text>
               <View style={style.trash}>
                 <TouchableOpacity  
                  onPress={() => removerUsuario(usuario.id)}
                  style={style.botaoExcluirUsuario}
                 >
                  <Text style={style.trash} >
                   <FontAwesome name="trash" size={20} color={"#a80b0b"} />
                 </Text>
                </TouchableOpacity>

               </View>
              </View>
            ))}
       

          </View> 
         </View>   
          
        </Modal>

        <View style={style.botao}>
          <TouchableOpacity style={style.botao} onPress={SalvarNovoUsuario}>
            <Text style={style.botaoSalvar}>Cadastrar Usuário</Text>
          </TouchableOpacity>
        </View>

        <Text style={style.divisor}>
          _____________________OU______________________
        </Text>

        <TouchableOpacity onPress={SalvarNovoUsuario}>
          <Text style={style.botaoOpcao}>
            <FontAwesome name="facebook-square" size={20} color="#1877F2" />
            Entrar com Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={SalvarNovoUsuario}>
          <Text style={style.botaoOpcao}>
            <FontAwesome name="google" size={20} color="#DB4437" />
            Entrar com Google
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  textImput: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderColor: "#aca7a7",
    borderWidth: 1,
    paddingRight: 97,
    padding: 3,
    marginBottom: 11,
    fontSize: 13,
    color: "#858080",
  },
  tituloContaine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  titulo: {
    color: "#0b76a8",
    fontSize: 24,
    padding: 20,
  },
  labelDescricao: {
    marginBottom: 5,
    color: "#3f3d3d",
    fontSize: 13,
  },
  divisor: {
    textAlign: "center",
    padding: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botaoFecharModal: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  cardUsuario:{
    
    backgroundColor:"#e1e2e9",
    padding: 20,
    borderRadius:10,
    borderWidth:2,
    borderColor:"#74a2b1",
  },

  usuarioTexto:{
     flexDirection:"row",
     gap:8,
     
  },

  trash:{
   alignSelf:"flex-end",
  },
  

  modalUsuario: {
    fontSize: 16,
    marginBottom: 5,
  },
  botaoSalvar: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#0b76a8",
    borderWidth: 1,
    padding: 3,
    margin: 10,
    color: "#0b76a8",
    marginTop: 20,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  botaoOpcao: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "#0b76a8",
    borderWidth: 1,
    padding: 3,
    margin: 10,
    color: "#0b76a8",
    marginTop: 10,
    textAlign: "center",
  },
});
