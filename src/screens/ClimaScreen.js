import { Botao } from '../components/Botao';
import { Campo } from '../components/Campo';
import { Tela } from '../components/Tela';
import { Card } from '../components/Card';
import { View, Text, StyleSheet } from 'react-native';
import { descreverTempo } from '../utils/clima';
import { LinhaInfo } from '../components/LinhaInfo';

export function ClimaScreen() {
    return (
        <Tela>
            <Campo 
                label={'Cidade'}
                placeholder={'Crateús'}
            />

            <Botao 
                titulo={'Consultar'}
                cor={'#2F80ED'}
            />

            <Card titulo={'Crateús - Ceará'} cor={'#2F80ED'}>
                <View style={styles.climaAtual}>
                    <Text style={styles.icone}>
                        {descreverTempo(1).icone}
                    </Text>
                    <View>
                        <Text style={styles.temperatura}>30ºC</Text>
                        <Text style={styles.descricao}>{descreverTempo(1).texto}</Text>
                    </View>
                </View>

                <LinhaInfo label={'Sensação Térmica'} valor={'33ºC'}/>
                <LinhaInfo label={'Umidade'} valor={'58%'}/>
                <LinhaInfo label={'Vento'} valor={'22 km/h'}/>
            </Card>

            <Card titulo={"Próximos dias"} cor={'#2F80ED'}>

            </Card>
        </Tela>
    );
}

const styles = StyleSheet.create({
    icone: {
        fontSize: 56,
        marginRight: 16
    },
    temperatura: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#1D2939'
    },
    descricao: {
        fontSize: 16,
        color: '#667085'
    },
    climaAtual: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    }
})