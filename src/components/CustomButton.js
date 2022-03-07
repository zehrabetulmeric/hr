import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'


const CustomButton = ({ onPress, text, loading }) => {
    return (
        <TouchableOpacity
            // disabled={loading}
            onPress={onPress}
            style={styles.container}>
            <Text
                style={styles.button}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9088D4',
        width: '60%',
        height: 60,
        padding: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        paddingHorizontal: 20,
        marginTop: 20
    },

    button: {
        color: 'beige',
        alignSelf: 'center',
        fontSize: 15
    }
})

export default CustomButton;
