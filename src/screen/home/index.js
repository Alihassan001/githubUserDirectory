import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Action
import * as Action from '../../redux/actions'

//Components
import { MyInput, List, Modal } from '../../components'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Styling
import { styles } from './style'

function Home(props) {
    const [isModal, handleModal] = useState(false)
    const [value, setValue] = useState('')
    const { 
        actions: { userAction, findUserAction, searchUserAction }, 
        userReducer: { users }, 
        findUserReducer: { user },
        searchUserReducer
    } = props

    console.log(searchUserReducer.user)    
    useEffect(() => {
        userAction()
    }, [])

    const specific = (name) => {
        handleModal(!isModal)
        findUserAction(name)
    }

    const search = (name) => {
        setValue(name)
        searchUserAction(name)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <AntDesign name='github' style={styles.title} />
                <Text style={styles.title}>Git Hub Users Directory</Text>
            </View>
            <MyInput value={value} onChange={e => search(e)}/>
            {searchUserReducer.user.id ? 
            <List user={(name) => specific(name)} data={[searchUserReducer.user]} />
            : 
            <List user={(name) => specific(name)} data={users} /> 
            }
            <Modal isVisible={isModal}>
                {user ?
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={() => handleModal(!isModal)}>
                            <AntDesign name='closecircle' size={24} style={styles.icon}/>
                        </TouchableOpacity>
                        <Image source={{ uri: user.avatar_url }} style={styles.userImage} />
                        <Text style={styles.modalText}>Name: {user.name}</Text>
                        <Text style={styles.modalText}>Location: {user.location ? user.location : 'Not Available'}</Text>
                        <Text style={styles.modalText}>No of follower: {user.followers}</Text>
                        <Text style={styles.modalText}>No of follwing: {user.following}</Text>
                    </View> :
                    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center' }}><Text>Loading...</Text></View>
                }
            </Modal>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer,
    findUserReducer: state.findUserReducer,
    searchUserReducer: state.searchUserReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(Action, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)