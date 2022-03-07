import * as React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
const Search = require("../../assets/search.png");
const Exit = require("../../assets/exit.png");


const SearchInput = ({ placeholder, onChangeText, value }) => {



    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>
                <Image
                    style={styles.search}
                    source={Search}
                />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>

            <Text>Vazgeç</Text>
             {/* <TouchableOpacity>
                <Image
                    source={Exit}
                    style={styles.exit}
                />
            </TouchableOpacity>  */}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
     
        
        
    },

    input: {
        left: 30,
       
    },

    search: {
        height: 30,
        width: 30,
        position: 'absolute',
        left: -5,
        bottom: 7
        },

    exit: {
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 7,
        right: -5

    }


})
export default SearchInput;