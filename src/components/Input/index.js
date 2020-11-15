import React from 'react'
import { TextInput, View, Text } from 'react-native'

//Styling
import { styles } from './style'

export default function MyInput(props) {
    const { value, onChange = () => {} } = props
    return(
    <View style={styles.container}>
        <TextInput style={styles.input} value={value} onChangeText={e => onChange(e)}/>
        <Text style={styles.label}>Search GitHub's Users.</Text>
    </View>
    )
}