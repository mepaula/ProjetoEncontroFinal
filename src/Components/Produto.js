import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

export default function Produto({ title, image, genere, observacao, cor, roupa, desapacerimento, encontro, setPessoa }) {
    return (
        <View style={css.container}>
            <View style={css.boxTitle}>
                <View style={css.circleAvatar}></View>
                <Text style={css.title}>{title}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: image }} style={css.imagem}/>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{genere}</Text>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{observacao}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{cor}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{roupa}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{desapacerimento}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{encontro}</Text>
            </View>           
            <Button title="Detalhes" onPress={setPessoa} />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 600
    },
    boxTitle: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 30,
    },
    circleAvatar: {
        width: 30,
        height: 30,
        borderRadius: 90,
        backgroundColor: "white",
        marginRight: 15
    },
    title: {
        color: "white",
        textAlign: "center",
        alignItems:"center"
    },
    boxImage: {
        width: "90%",
        height: 300
    },
    imagem: {
        width: "80%",
        height: "95%",
        resizeMode: "center"
    },
    categoryBox: {
        width: "90%",
        marginTop: 15
    },
    descriptionBox: {
        width: "90%",
        marginTop: 5,
        padding: 5
    },
    descriptionText: {
        color: "white",
        textAlign: "justify",
        alignItems: "center"
    },
    categoryBox: {
        width: "90%",
        padding: 5
    },
    categoryText: {
        color: "white",
        alignItems: "center"
    }
})