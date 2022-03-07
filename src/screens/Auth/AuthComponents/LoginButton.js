import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

const LoginButton = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <Text>ALREADY HAVE AN ACCOUNT? </Text>
            <Text style={styles.text} onPress={onPress}> {text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: '#9088D4'
    }
})

export default LoginButton;
