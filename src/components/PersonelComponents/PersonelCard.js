import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'

const profile = require("../../../assets/profile.png");

const PersonelCard = ({ source, onPress, onDetail, text, header }) => {
    return (
        
        <TouchableOpacity
        onPress={onDetail}
        style={styles.container}>
            
            <View style={styles.imageContainer}>
        
            <Image
                    style={styles.image}
                    source={profile}
                />
            </View>

            <View style={styles.content}>
                
                <Text style={styles.personelName}>{header}</Text>
                <Text style={styles.personelDetail}>{text}</Text>
                <TouchableOpacity onPress={onPress}>
                    {/* <Text style={styles.moreText}>
                        More
                    </Text> */}
                </TouchableOpacity> 
                
            </View>
            
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection:"row",
        flex: 1,
        width: '100%'
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

export default PersonelCard
