import { Text, TouchableOpacity, StyleSheet } from "react-native";


export function Botao({ titulo, cor }) {
    return (
        <TouchableOpacity
            style={[styles.botao, { backgroundColor: cor }]}
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    texto: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
