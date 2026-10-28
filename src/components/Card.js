import { Text } from "react-native";
import { View, StyleSheet } from "react-native";


export function Card({ titulo, children, cor }) {
    return (
        <View style={[styles.card, { borderLeftColor: cor }]}>
            {titulo ? <Text style={styles.titulo}>{titulo}</Text> : null}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderLeftWidth: 5,
        padding: 16,
        marginTop: 20
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1D2939',
        margimBottom: 10
    }
});