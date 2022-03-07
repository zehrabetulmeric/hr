import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const addButton = require("../../assets/addButton.png");

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
    <Image
        style={styles.image}
        source={addButton}
        
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({



    image: {
            height: 70,
            width: 70,
           
            
    }
})

export default AddButton;
