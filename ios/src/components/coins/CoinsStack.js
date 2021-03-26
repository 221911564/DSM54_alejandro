// importar react
import React from 'react';
//importa la lib de react navigation stack
import { createStackNavigator } from '@react-navigation/stack';
//declaración de const de Stack
//import el component e CoinsScreen
import CoinScreen from './CoinScreen';
import CoinDetailScreen from './CoinDetailScreen';

//declarar nuestro componente de tipo staless
const Stack = createStackNavigator();

const CoinsStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Coins" 
            component={CoinScreen} 
            />
            
            
            <Stack.Screen 
            name="DetailsCoponent" 
            component={CoinDetailScreen} 
            />
        </Stack.Navigator>
    )
}

export default CoinsStack;