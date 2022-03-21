import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';

const addButton = require("../../assets/addButton.png");
const ActivityCard = ({ onPress, text, header }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}>
            
            <Image
        style={styles.image}
        source={addButton}
        
      />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text>Buraya girdiğimiz şey gelicek</Text>
            </View>

            <TouchableOpacity style={styles.imageContainer}>
                
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
       
        width: '100%',
        backgroundColor: 'red'
    },

    imageContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 66,
        height: 66,
        backgroundColor: 'pink',
        borderRadius: 999,

    },

    content: {
        width: '70%',
        alignItems: 'flex-start',
        backgroundColor: 'beige',
        justifyContent: 'center',
    },

    personelName: {
        color: '#252A34',
        fontSize: 18,
        fontWeight: 'bold'
    },

    personelDetail: {
        fontSize: 14,

    },

    moreText: {
        fontSize: 13,
    }

})

export default ActivityCard;