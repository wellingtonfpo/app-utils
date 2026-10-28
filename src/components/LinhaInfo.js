import { View, Text, StyleSheet } from "react-native";

export function LinhaInfo({ label, valor }) {
    return (
        <View style={styles.linha}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.valor}>{valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F4F7'
    },
    label: {
        fontSize: 15,
        color: '#667085'
    },
    valor: {
        fontSize: 15,
        color: '#1D2939',
        fontWeight: 'bold'
    }
});