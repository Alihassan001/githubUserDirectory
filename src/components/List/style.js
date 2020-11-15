import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        paddingHorizontal: 10,
        flex: 1
    },
    itemContainer: {
        alignItems: 'center', 
        marginVertical: 10,
        marginHorizontal: 10, 
        width: 150
    },
    itemImg: {
        width: '100%', 
        height: 100, 
        resizeMode: 'cover'
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})