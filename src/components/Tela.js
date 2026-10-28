import { StyleSheet, View } from 'react-native';


export function Tela({ children }) {
    return (
        <View style={styles.tela}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        padding: 20
    },
});