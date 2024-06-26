import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function CriarObservacao({ navigation }) {

    const[observacaoDescricao, SetObservacaoDescricao ] = useState("");
    const[observacaoLocal, SetObservacaoLocal ] = useState("");
    const[observacaoData, SetObservacaoData ] = useState("");
    const[erro, setErro ] = useState(false);
    const[sucesso, setSucesso ] = useState(false);

    async function Cadastro()
    {
        await fetch('https://http://10.139.75.10:5251/api/Observacoes/GetAllObservacoes.com/auth/users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => (res.ok == true) ? res.json() :false )
        .then(json => console.log( json ) )
        .catch(err => setErro( true ) )
    }

    return(
        <ScrollView contentContainerStyle={style.container}>
            {sucesso ?
                <Text style={style.text}>Sua observação foi salva com sucesso!</Text>
                :
                <>
                <Text style={style.text}>Mais observações!</Text>
                <TextInput 
                    style={style.input}
                    placeholder="Descrição"
                    placeholderTextColor="black"
                    TextInput={observacaoDescricao}
                    onChangeText={(digitado) => SetObservacaoDescricao( digitado ) }
                />
                <TextInput 
                    style={style.input}
                    placeholder="Local"
                    placeholderTextColor="black"
                    TextInput={observacaoLocal}
                    onChangeText={(digitado) => SetObservacaoLocal( digitado ) }
                />
                <TextInput 
                    style={style.input}
                    placeholder="Data"
                    placeholderTextColor="black"
                    TextInput={observacaoData}
                    onChangeText={(digitado) => SetObservacaoData( digitado ) }
                />
                <Button title="Salvar" onPress={() => navigation.navigate('Salvo')}/>
             </>
            }
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#87CEFA",
        flexGrow: 1,
        color: "white",
        justifyContent: "center",
        alignItens: "center",
        padding: 50,
        paddingBottom: 50
    },
    text: {
        color: "black",
        fontSize: 25,
        alignItems: "center",
        padding: 30
    },
    input: {
        fontSize: 15,
        alignItems: "center",
        backgroundColor: "white",
        color: 'black',
        borderWidth: 1,
        height: 60,
        padding: 14,
        borderRadius: 25
    },
    btnCadastrar: {
        alignItems: 'center'
    },
    CadastrarText: {
        width: 220, // Largura do botão
        height: 45, // Altura do botão
        marginBottom: 15, // Espaçamento inferior
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: '#0195fd', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 26,
        color: 'black',
    }
})