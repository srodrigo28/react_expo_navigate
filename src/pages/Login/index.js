import React from "react";
import { Button, Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import {useNavigation} from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    // const recoverPassword = () => {
    //     navigation.navigate('RecoverPassword')
    // }

    return (
        <View style={styles.container}>

            <Text style={styles.login}>Login</Text>

            <TextInput
                style={styles.inputForm}
                placeholder="Usuário"
                autoCorrect={false}
                onChangeText={ () => {} }
            
            />
            <TextInput
                style={styles.inputForm}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={ () => {} }
            
            />

            <TouchableOpacity>
                <Text>
                    Acessar
                </Text>
            </TouchableOpacity>
            <Text>Esqueceu sua senha?</Text>
            <Text>Cadastrar</Text>
            
            {/* 
            <Button title="Cadastrar" onPress={() => {navigation.navigate('NewUser')}}/>
            <Button  title="Recuperar Senha" onPress={recoverPassword}/> 
            */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#161616'
    },
    login: {
        color: "#fff",
        marginBottom: 50,
        fontSize: 40
    },
    inputForm:{
        backgroundColor: "#fff",
        width: "90%",
        marginBottom: 15,
        color: '#222',
        fontSize: 18,
        borderRadius: 6,
        padding: 10,
    },
    btnSubmitForm:{
        backgroundColor: '#ebb105',
    }
})
