import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'

const PersonelCard = ({ source, onPress, text, header }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
                    style={styles.image}
                    source={source}
                />
            </View>

            <View style={styles.content}>
                
                <Text style={styles.personelName}>{header}</Text>
                <Text style={styles.personelDetail}>{text}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.moreText}>
                        More
                    </Text>
                </TouchableOpacity> 
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'pink',
        height: 180,
        width: '45%',
        borderRadius: 30,
        borderColor:  '#9088D4',
        borderWidth: 3,
        marginBottom: 20,   
    },

    imageContainer: {
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAA471',
        width: '100%',
        borderTopEndRadius: 27,
        borderTopStartRadius: 27
    },

    image: {
        width: 66,
        height: 66,
        backgroundColor: 'beige',
        borderRadius: 999,
        borderColor: 'black',
        
    },

    content: {
        height: 89,
        alignItems: 'center',
        borderBottomLeftRadius: 27,
        borderBottomRightRadius: 27,
        backgroundColor: 'pink',
        justifyContent: 'space-evenly',
    },

    personelName: {
        
        color: '#252A34',
        fontSize: 16
    },

    personelDetail: {
        fontSize: 12,
        
    },

    moreText: {
        
        fontSize: 13,
        
    }

})

export default PersonelCard
