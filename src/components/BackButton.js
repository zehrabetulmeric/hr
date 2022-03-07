import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const back = require("../../assets/leftArrow.png");

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
    <Image
        style={styles.image}
        source={back}
        
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({



    image: {
            height: 40,
            width: 40,
           
            
    }
})

export default BackButton;
