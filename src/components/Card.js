import { View, StyleSheet } from "react-native";


export function Card({ children, cor }) {
    return (
        <View style={[styles.card, { borderLeftColor: cor }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderLeftWidth: 5,
        marginTop: 20
    }
});