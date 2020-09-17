import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './src/screens/CalculatorScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CalculatorScreen">
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;