import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';
import Detalhe from './Detalhe';


export default function Home() {

  const [produtos, setProdutos] = useState([]);

  const [detalhes, setDetalhes] = useState(false);
  const [pessoa, setPessoa ] = useState();

  async function getProdutos() {
    await fetch('http://10.139.75.14:5251/api/Pessoa/GetAllPessoa', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();
  }, [])

  return (
    <View style={css.container}>
      {produtos && !detalhes &&
        <>
          <Stories produtos={produtos} />
          <FlatList
            data={produtos}
            renderItem={({ item }) =>
              <Produto
                title={item.pessoaNome}
                observacao={item.pessoaObservacao}
                image={item.pessoaFoto}
                genere={item.pessoaSexo}
                cor={item.pessoaCor}
                roupa={item.pessoaRoupa}
                desapacerimento={item.pessoaDtDesaparecimento}
                encontro={item.pessoaDtEncontro}                
                setPessoa={ () => { setPessoa( item ); setDetalhes( true ); }}
              />}
            keyExtractor={(item) => item.id_Pessoa}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
      }
      {!produtos && !detalhes &&
        <Text style={css.text}>Carregando pessoas...</Text>
      }
      { detalhes && 
        <Detalhe setDetalhes={() => { setDetalhes( false ); setPessoa(""); }} pessoa={pessoa}/>
      }

    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#0195fd",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  },
  stories: {
    width: "100%",
    height: 140
  }
})