import React from 'react';
import { NavigatorContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <NavigatorContainer >
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
            </Tab.Navigator>
            <Home />
        </NavigatorContainer>
    )
}