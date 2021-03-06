import * as React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { Keyboard } from 'react-native';

const Search = require("../../assets/search.png");
const Exit = require("../../assets/exit.png");


const SearchInput = ({ placeholder, onSearch, }) => {

    
    
    return (
        <View style={styles.container}>

            <View>
                <Image
                    source={Search}
                    style={styles.search}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoCapitalize="none"
                onChangeText={onSearch}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        marginTop: 10,
        
    },

    input: {
        flex: 1,
        backgroundColor: 'white',
        height: 52,
        paddingLeft: 55,
        borderRadius: 30,
        borderColor: '#9088D4',
        borderWidth: 3,
        backgroundColor: 'beige'
    },

    search: {
        height: 30,
        width: 30,
        position: 'absolute',
        left: 16,
        bottom: -15,
        zIndex: 1

    },

    exit: {
        height: 30,
        width: 30,
        marginHorizontal: 5,
       
    }
})
export default SearchInput;