import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    name: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '500'
    },
    userName: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 5,
    },
    title: {
        fontWeight: '500',
    }
})

export default styles;