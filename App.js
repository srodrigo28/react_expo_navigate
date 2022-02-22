import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Servicos from './src/telas/Servicos';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
        <Servicos></Servicos>
    </View>
  );
}