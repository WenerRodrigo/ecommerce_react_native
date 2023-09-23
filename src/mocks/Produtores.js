import green from '../assets/produtores/green.png';
import Salad from '../assets/produtores/Salad.png';
import grow from '../assets/produtores/grow.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';


const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max, min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Salad",
            imagem: Salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "jennyJack",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
    ]
}

export default produtores;