import React, { useState } from 'react';
import {Text, View, Button} from 'react-native';

import estilos from './estilos';
import CampoInteiro from './../../../componentes/CampoInteiro';

export default function Item({nome, preco, descricao}){
    const [quantidade, setQuantidade] = useState(1);
    return <>
        <View style={estilos.informacao}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{preco}</Text>    
        </View>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade:</Text>
                <CampoInteiro estilos={estilos.quantidade} value={quantidade} acao={setQuantidade}/>
            </View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Preco:</Text>
                <Text style={estilos.preco}>0</Text>
            </View>
            <Button title='Adicionar' />
        </View>
        <View style={estilos.divisor}></View>
    </>

}