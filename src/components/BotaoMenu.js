import { 
        TouchableOpacity, 
        Image, 
        Text, 
        StyleSheet 
} from 'react-native';

export function BotaoMenu({ titulo, imagem, cor, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.botao, { borderBottomColor: cor }]}
            onPress={onPress}
        >
            <Image 
                source={imagem}
                style={styles.imagem}
            />
            <Text style={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        width: '47%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderBottomWidth: 5,
        paddingVertical: 20,
        alignItems: 'center',
        marginBottom: 16
    },
    imagem: {
        width: 80,
        height: 80
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D2939',
        textAlign: 'center'
    }
});