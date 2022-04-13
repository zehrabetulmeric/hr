import React from "react";
import Modal from "react-native-modal";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import CustomButton from "../CustomButton";
import firestore from '@react-native-firebase/firestore';

const ModalComponent = ({ visible, placeholder, onSend, onClose, onChange }, {navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState({
        task: '',
        type: "task"

    })

    function openModal() {
        setModalVisible(!modalVisible)
    }


    const createTask = async (task) => {
        try {
            await firestore().collection('tasks').add(task);
            navigation.navigate('PersonelScreen');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
           
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.head}>Add Task</Text>
                </View>

                <TextInput
                    
                    style={styles.textInput}
                    value={task.task}
                    onChangeText={(task) => { setTask({ ...task, task:task }) }}
                    placeholder="Name"
                />
              
               
                 <CustomButton

                    onPress={createTask(task)}
                    text="Submit"

                />
                <TouchableOpacity 
                 onPress={onClose}
                    style={{ marginBottom: 10}}>
                    <Text>Give up!</Text>

                </TouchableOpacity>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        borderWidth: 2,
        borderColor: '#9088D4',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {

        width: '100%',
        height: 60,
        backgroundColor: '#9088D4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,

    },

    head: {
        fontSize: 20,
        fontStyle: 'normal',
        color: 'beige',
    },

    textInput: {
        borderRadius: 30,
        borderColor: '#9088D4',
        borderWidth: 3,
        backgroundColor: 'beige',
        height: 50,
        margin: 5,
        width: '90%'
    },

    button: {
        height: 50,
        width: '45%',
        borderRadius: 30,
        backgroundColor: '#9088D4',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})

export default ModalComponent;