import React from 'react';
import {Text, TextInput, View} from 'react-native';

import estilos from './estilos';

export default function Item({nome, preco, descricao}){
    return <>
        <View style={estilos.informacao}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{preco}</Text>    
        </View>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade</Text>
                <TextInput />
            </View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Preco:</Text>
                <Text style={estilos.preco}>0</Text>
                <TextInput />
            </View>
        </View>
    </>

}