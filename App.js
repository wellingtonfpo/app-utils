import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ImcScreen } from './src/screens/ImcScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#1F3A5F' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' }
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
