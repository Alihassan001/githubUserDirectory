import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1
    },
    titleContainer: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    title: {
        fontSize: 20
    },
    modalContainer: {
        backgroundColor: '#fff', 
        flex: 1,
        padding: 20
    },
    userImage: {
        width: '100%', 
        height: 300,
    },
    modalText: {
        fontSize: 25,
        marginTop: 20
    },
    icon:{
        marginBottom: 20
    }
})