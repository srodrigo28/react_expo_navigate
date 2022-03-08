import React from "react";
import { Button, Text, View } from "react-native";

import {useNavigation} from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Login</Text>
            <Button title="Cadastrar" onPress={() => {navigation.navigate('NewUser')}}/>
        </View>
    )
}