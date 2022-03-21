import React from "react";
import { View, Text, StyleSheet } from 'react-native'


import BackButton from "./BackButton";

const Header = ({ text, onBack }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <View style={styles.backButtonContainer} >
                    <BackButton
                        onPress={onBack}
                    />
                </View>
                <Text style={styles.head}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#9088D4',
        marginBottom: 10
    },

    head: {
        fontSize: 22,
        fontStyle: 'normal',
        color: 'beige',
        
    },

    backButtonContainer: {
        position: 'absolute',
        left: 15,
        justifyContent: 'center',
        height: 70,
        alignSelf: 'flex-start'
    },
})

export default Header;