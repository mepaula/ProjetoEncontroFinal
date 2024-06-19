import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import CriarObs from '../Components/CriarObsevacao';

export default function Detalhe({setDetalhes, pessoa, navigation}) {

    const[erro, setErro ] = useState(false);
    const[usuarioId, seUusuarioId ] = useState(0);
    const[sucesso, setSucesso ] = useState(false);
    const[obs, setObs] = useState(false);

    return(
        <ScrollView contentContainerStyle={style.container}>
            {sucesso ?
                <Text style={style.text}>Obrigado por se cadastrar. Seu cadastro foi realizado com sucesso!</Text>
                :
                <>
                <Text>{pessoa.pessoaNome}</Text>
                <View style={style.boxImage}>
                    <Image source={{ uri: pessoa.pessoaFoto }} style={style.imagem}/>
                </View>               
                <Text>{pessoa.pessoaDtDesaparecimento}</Text>
                <Text>{pessoa.pessoaRoupa}</Text>               
                <Button title="Voltar" onPress={setDetalhes} />
                <Button title="Nova Observação"  onPress={() => setObs(true)}/>
                { obs && 
                   <CriarObs pessoa={pessoa}/>
                }
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
        padding: 45,
        paddingBottom: 40
    },
    text: {
        color: "black",
        fontSize: 30,
        alignItems: "center",
        padding: 28
    },
    input: {
        fontSize: 15,
        alignItems: "center",
        backgroundColor: "white",
        color: 'black',
        borderWidth: 1,
        height: 50,
        padding: 20,
        borderRadius: 30
    },
    btnCadastrar: {
        alignItems: 'center'
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "center"
    },
    boxImage: {
        width: "95%",
        height: 250
    },
    btnButton: {
        width: 220, // Largura do botão
        height: 40, // Altura do botão
        marginBottom: 20, // Espaçamento inferior
        borderRadius: 7, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: '#0195fd', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    }
})