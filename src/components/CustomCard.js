import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const CustomCard = ({ source, onPress, style, text, footerText }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
        
            <View style={styles.card} >
                <Image
                    style={styles.image}
                    source={source}
                />
                <Text style={styles.text}>{text}</Text>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'beige',
        width: 150,
        height: 150,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        borderColor: '#9088D4',
        borderWidth: 3
    },

    text: {
        paddingTop: 10,
        color: '#252A34',
        fontWeight: 'bold',
    },

    image: {
        height: 80,
        width: 80,

    }

})

export default CustomCard;

