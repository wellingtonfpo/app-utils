import { View, Text, TextInput, StyleSheet } from "react-native"


export function Campo({ label, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        padding: 20
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D2939',
        marginBottom: 6
    },
    input: {
        height: 48,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#1D2939'
    },
    container: {
        marginBottom: 12,
    }
})
