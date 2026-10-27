import { View, TextInput, Text, StyleSheet } from "react-native";
import { Campo } from "../components/Campo";
import { Botao } from "../components/Botao";
import { Card } from "../components/Card";

export function ImcScreen() {
    return (
        <View style={styles.tela}>
            <Campo 
                label='Peso (kg)'
                placeholder='Ex.: 70,5'
            />

            <Campo 
                label='Altura (m)'
                placeholder='Ex.: 1,70'
            />

            <Botao titulo={'Calcular'} cor={'#2E9E6B'}/>
            <Botao titulo={'Limpar'} cor={'#667085'}/>

            <Card cor={'#2E9E6B'}>
                <Text>Seu IMC</Text>
                <Text>23,02</Text>
                <Text>Peso Normal</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        padding: 20
    },
})