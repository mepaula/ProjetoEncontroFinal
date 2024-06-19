import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Cadastro({ usuario }) {

    const [usuarioNome, setUsuarioNome] = useState("");
    const [usuarioEmail, setUsuarioEmail] = useState("");
    const [usuarioTelefone, setUsuarioTelefone] = useState("");
    const [usuarioSenha, setUsuarioSenha] = useState("");
    const [erro, setErro] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        setSucesso(false);
    }, []);
    async function Voltar() {
        setSucesso(false);
    }

    async function Cadastro() {
        console.log("aqui");
        await fetch('http://10.139.75.14:5251/api/Usuario/CreateUsuario', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                usuarioEmail: usuarioEmail,
                usuarioNome: usuarioNome,
                usuarioSenha: usuarioSenha,
                usuarioTelefone: usuarioTelefone
            })
        })
            .then(res => (res.ok == true) ? res.json() : false)
            .then(json => setSucesso(true))
            .catch(err => setErro(true))
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            {sucesso ?
                <View>
                    <Text style={style.text}>Obrigado por se cadastrar. Seu cadastro foi realizado com sucesso!</Text>
                    <TouchableOpacity style={style.btnCadastrar} onPress={() => Voltar()}>
                        <Text style={style.CadastrarText} >Voltar</Text>
                    </TouchableOpacity>
                </View>
                :
                <>
                    <Text style={style.text}>Faça o seu cadastro!</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Nome Usuário"
                        placeholderTextColor="black"
                        TextInput={usuarioNome}
                        onChangeText={(digitado) => setUsuarioNome(digitado)}
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Email"
                        placeholderTextColor="black"
                        TextInput={usuarioEmail}
                        onChangeText={(digitado) => setUsuarioEmail(digitado)}
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Senha"
                        placeholderTextColor="black"
                        TextInput={usuarioSenha}
                        onChangeText={(digitado) => setUsuarioSenha(digitado)}
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Telefone"
                        placeholderTextColor="black"
                        TextInput={usuarioTelefone}
                        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
                    />
                    <TouchableOpacity style={style.btnCadastrar} onPress={() => Cadastro()}>
                        <Text style={style.CadastrarText} >Cadastrado</Text>
                    </TouchableOpacity>
                    {erro && <Text>Revise cuidadosamente os campos!</Text>}
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
        padding: 28

    },
    input: {
        fontSize: 15,
        alignItems: "center",
        backgroundColor: "white",
        color: 'black',
        borderWidth: 1,
        height: 70,
        padding: 20,
        borderRadius: 30
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
        fontSize: 29,
        color: 'black',
    }
})