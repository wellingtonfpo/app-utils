import { View, TextInput, Text, StyleSheet } from "react-native";
import { Campo } from "../components/Campo";
import { Botao } from "../components/Botao";
import { Card } from "../components/Card";
import { Tela } from "../components/Tela";

export function ImcScreen() {
    return (
        <Tela>
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

            <Card titulo={'Seu IMC'} cor={'#2E9E6B'}>
                <Text style={styles.valor}>23,02</Text>
                <Text 
                    style={styles.classificacao}
                >
                    Peso Normal
                </Text>
            </Card>

            <Card titulo={"Tabela de Referência (OMS)"}>
                <Text style={styles.tabela}>Menor que 18,5 - Abaixo do peso</Text>
                <Text style={styles.tabela}>18,5 a 24,9 - Peso Normal</Text>
                <Text style={styles.tabela}>25 a 29,9 - Sobrepeso</Text>
                <Text style={styles.tabela}>30 a 34,9 - Obesidade grau I</Text>
                <Text style={styles.tabela}>35 a 39,9 - Obesidade grau II</Text>
                <Text style={styles.tabela}>40 ou mais - Obesidade grau III</Text>
            </Card>
        </Tela>
    )
}

const styles = StyleSheet.create({
    valor: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#1D2939',
        textAlign: 'center'
    },
    classificacao: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 4
    },
    tabela: {
        fontSize: 14,
        color: '#667085',
        marginBottom: 4
    }
})