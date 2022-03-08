import React from "react";
import { Button, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function NewUser(){

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Cadastrar Usuário</Text>

            <Button title="Login"  onPress={() => {navigation.navigate('Login')}}/>
        </View>
    )
}