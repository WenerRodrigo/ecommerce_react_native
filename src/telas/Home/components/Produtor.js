import React, { useReducer, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Estrelas from '../../../components/Estrelas';

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    //const [ selecionado, setSelecionado ] = useState(false);
    const [ selecionado, inverterSelecionado ] = useReducer(
        (selecionado) => !!selecionado,
        false
    )


    return <TouchableOpacity 
                style={estilos.cartao}>
                onPress={inverterSelecionado} 
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas 
                quantidade={estrelas} 
                editavel={selecionado} 
                grande={selecionado}
                
                />
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        //IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        //andriod
        elevation: 4,

    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 6,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 20,
    }
})

