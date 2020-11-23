import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'

//Styling
import { styles } from './style'

export default function List(props) {
    const {
        data,
        user = () => { }
    } = props
    
    const renderItem = ({ item: { avatar_url, login, url } }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => user(login)}>
            <Image source={{ uri: avatar_url }} style={styles.itemImg} />
            <Text style={styles.itemName}>{login}</Text>
            <Text>{url}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}