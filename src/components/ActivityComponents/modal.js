import React from "react";
import Modal from "react-native-modal";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const ModalComponent = ({ visible, placeholder, onSend, onClose }) => {

    const [text, setText] = useState('')

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
                    placeholder="Task Header"
                    onChangeText={setText}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Task Detail"
                    onChangeText={setText}
                />
                <TouchableOpacity
                    onPress={onSend}
                    style={styles.button}
                >
                    <Text>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10}}>
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