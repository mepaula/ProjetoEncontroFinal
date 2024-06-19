import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/logo-tipo.png")} style={css.logo} />
            <TextInput
                inputMode="email"
                placeholder="Email do Usuário"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="white"
            />
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={css.forgot}>
                <Text style={css.forgotText}>Esqueceu a senha?</Text>
            </View>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Email ou Senha incorretos</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#87CEFA"
    },
    logo: {
        width: 230,
        height: 150,
        marginBottom: 15,
        resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
    },
    input: {
        width: "80%",
        height: 50,
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#0195fd",
        color: "white"
    },
    forgot: {
        width: "30%",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    forgotText: {
        color: "white",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "85%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#0195fd"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    }
});