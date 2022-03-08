import React from "react";
import { Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function RecoverPassword(){
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Recuperar senha? Usuário</Text>
            <Text onPress={()=> {navigation.navigate('Login')}}>
                Voltar
            </Text>
        </View>
    )
}