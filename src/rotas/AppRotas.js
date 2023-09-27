import React from 'react';
import { NavigatorContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from '../telas/MelhoresProdutoresRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <NavigatorContainer >
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ProdutorRotas} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
            <Home />
        </NavigatorContainer>
    )
}