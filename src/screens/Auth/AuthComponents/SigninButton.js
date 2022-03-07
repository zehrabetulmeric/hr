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
        width: '100%',
        padding: 20,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        paddingHorizontal: 20,
        marginVertical: 30,
    },

    button: {
        color: 'white',
        alignSelf: 'center'
    }
})

export default CustomButton;
