import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';

import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 80.70,
        descricao: "Não de banho no seu GATO"
    },
    {
        id: 2,
        nome: "vACINA V1",
        preco: 63.70,
        descricao: "Primeira dose para seu gato"
    },
    {
        id: 3,
        nome: "vACINA V2",
        preco: 99.70,
        descricao: "Segunda e ultima dose"
    },
    
];

export default function Servicos(){
    return <SafeAreaView>
                <Text>Serviços!</Text>
                <FlatList
                    data={servicos}
                    renderItem={({item}) => <Item{...item} />}
                    keyExtractor={({id}) => String(id)}
                />
            </SafeAreaView>
}