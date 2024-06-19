import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stories({produtos}) {

  return (
    <FlatList
      data={produtos}
      renderItem={ ({item}) => 
        <View style={css.story}>
          <Image source={{ uri: item.pessoaFoto}} style={css.image}/>
        </View>
      }
      keyExtractor={ (item) => item.id_Pessoa }
      contentContainerStyle={[css.container, { width: produtos.length * 80 }]}
      horizontal={true}
    />
  )
}
const css = StyleSheet.create({
    container: {
        height: 130,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20,
        marginBottom: 40,
        backgroundColor: "#87CEFA"
    },
    story: {
        width: 60,
        height: 65,
        backgroundColor: "white",
        borderRadius: 55,
        overflow: "hidden"
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "center"
    }
})