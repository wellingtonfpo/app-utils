import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />

      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#1F3A5F' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'App Utilidades' }}
        />
        <Stack.Screen
          name='Imc'
          component={ImcScreen}
          options={{ title: 'Calculadora de IMC' }}
        />
        <Stack.Screen
          name='Clima'
          component={ClimaScreen}
          options={{ title: 'Previsão do Tempo' }}
        />
        <Stack.Screen
          name='Dolar'
          component={DolarScreen}
          options={{ title: 'Cotação do Dólar' }}
        />
        <Stack.Screen
          name='Cep'
          component={CepScreen}
          options={{ title: 'Consulta de CEP' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
