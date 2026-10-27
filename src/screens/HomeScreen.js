import { View, Text, StyleSheet } from "react-native";
import { BotaoMenu } from "../components/BotaoMenu";

const itensMenu = [
    { titulo: 'Calcular IMC', tela: 'Imc', imagem: require('../../assets/images/imc.png'), cor: '#2E9E6B' },
    { titulo: 'Previsão Tempo', tela: '', imagem: require('../../assets/images/clima.png'), cor: '#2F80ED' },
    { titulo: 'Cotação do Dolar', tela: '', imagem: require('../../assets/images/dolar.png'), cor: '#E0A100' },
    { titulo: 'Consulta CEP', tela: '', imagem: require('../../assets/images/cep.png'), cor: '#E84848' },
]

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.tela}>
            <Text style={styles.titulo}>Olá! 👋</Text>
            <Text style={styles.subtitulo}>Escolha uma das funcionalidades abaixo:</Text>

            <View style={styles.grade}>
                {itensMenu.map((item) => (
                    <BotaoMenu 
                        key={item.titulo}
                        titulo={item.titulo}
                        imagem={item.imagem}
                        cor={item.cor}
                        onPress={() => navigation.navigate(item.tela)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1D2939'
    },
    subtitulo: {
        fontSize: 16,
        color: '#667085',
        marginTop: 4,
        marginBottom: 24
    },
    tela: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        padding: 20
    },
    grade: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})