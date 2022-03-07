import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import BackButton from './BackButton';
const back = require("../../assets/leftArrow.png");
const Header = ({onPress,  text }) => {
    return (
        <View style={styles.header} >
        <TouchableOpacity  style={styles.backButtonContainer} >
        <Image
        style={styles.image}
        source={back}
        onPress={onPress}
      />
      
        </TouchableOpacity>
            
            
    
   
        
            <Text style={styles.head}>{text}</Text>
            
        </View>


    );
};

const styles = StyleSheet.create({



    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#9088D4',
        marginBottom: 20,
        

    },

    head: {
        fontSize: 22,
        fontStyle: 'normal',
        color: 'beige'
    },

    image: {
        height: 40,
        width: 40,
       
    },

    backButtonContainer: {
        position: 'absolute',
        left: 15,
        justifyContent: 'center',
        height: 70,
        alignSelf: 'flex-start'
    }






})


export default Header;
