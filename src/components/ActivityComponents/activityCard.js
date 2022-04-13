import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
const check = require("../../../assets/tasknotcheck.png")
const check2 = require("../../../assets/taskcheck.png")
const edit = require("../../../assets/pen.png")


const ActivityCard = ({ onPress, text, onChange, source, detail }) => {
    const [image, setImage] = useState(check);

    const handleChange = () => {
        if(image == check) { 
        return setImage(check2)
    }
        return setImage(check)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={handleChange}
            style={styles.imageContainer}>
                <Image
                    style={styles.checkImage}
                    source={image}
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.detail}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30
    },

    imageContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15
    },

    checkImage: {
        width: 40,
        height: 40,

    },

    editImage: {
        width: 40,
        height: 40,
        
    },

    content: {
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },

    head: {
        alignSelf: 'center'
    },

    header: {
        color: '#252A34',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    detail: {
        fontSize: 14,
        alignSelf: 'center'
    },

})

export default ActivityCard;