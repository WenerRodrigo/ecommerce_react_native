import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Cesta from '../telas/Produtor/Produtor/componentes/Cesta';



const stack = createNativeStackNavigator();

export default function ProdutorRotas({ componentePrincipal = Home }) {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Home" component={componentePrincipal} />
            <stack.Screen name="Produtor" component={Produtor} />
            <Stack.Screen name="Cesta" component={Cesta} />
        </stack.Navigator>
    )
}