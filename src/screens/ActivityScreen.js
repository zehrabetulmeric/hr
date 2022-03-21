import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import AddButton from '../components/addButton';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityComponents/activityCard';
import ModalComponent from '../components/ActivityComponents/modal';

const ActivityScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const onBack = () => {
        navigation.navigate('home');
    }

    function openModal () {
        setModalVisible(!modalVisible)
    }

    function sendModal () {
       
    }

    return (
        <View style={styles.container}>
            <Header
                text="Activity List"
                onBack={onBack}
            />

            <View style={styles.addButtonContainer}>
                <AddButton
                    onPress={openModal}
                />
            </View>
            <ActivityCard />
            <ModalComponent 
                visible={modalVisible}
                onClose={openModal}
                onSend={sendModal}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#9088D4',
        marginBottom: 10
    },

    addButtonContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        alignSelf: 'flex-end'
    },
})

export default ActivityScreen;