import * as React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { Keyboard } from 'react-native';


const AddInput = ({ placeholder, onChangeText, value }) => {

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoCapitalize="none"
                value={value}
                onChangeText={onChangeText}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: '#9088D4',
        borderWidth: 3,
        backgroundColor: 'beige'
    },

    input: {
        paddingLeft: 20
        
    },

})
export default AddInput;