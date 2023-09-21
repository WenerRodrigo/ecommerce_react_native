import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { carregaTopo } from "../../../servicos/carregaDados";
import logo from '../../../assets/logo.png'


class Topo extends React.Component {
    atualizaTopo() {
        const retorno = carregaTopo();
        console.log(retorno)
    }
    componentDidMount() {
        atualizaTopo();
    }

    render() {
        return <View styles={estilos.topo}>
            <Image style={estilos.imagem} source={logo} />
            <Text style={estilos.boasVindas}>Olá Wener</Text>
            <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
        </View>
    }
}


const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }
})

export default Topo;