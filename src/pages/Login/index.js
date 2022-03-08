import React from "react";
import { Button, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import {useNavigation} from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    // const recoverPassword = () => {
    //     navigation.navigate('RecoverPassword')
    // }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Login</Text>
            <TextInput
                placeholder="Usuário"
                autoCorrect={false}
                onChangeText={ () => {} }
            
            />
            <TextInput
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={ () => {} }
            
            />

            <TouchableOpacity>
                <Text>
                    Acessar
                </Text>
            </TouchableOpacity>
            <Text>Esqueceu a senha?</Text>
            <Text>Cadastrar</Text>
            
            {/* 
            <Button title="Cadastrar" onPress={() => {navigation.navigate('NewUser')}}/>
            <Button  title="Recuperar Senha" onPress={recoverPassword}/> 
            */}
        </View>
    )
}