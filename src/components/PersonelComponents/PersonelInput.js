import * as React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const PersonelInput = ({ placeholder, value, onChangeText, text }) => { 
  return (
    <View style={styles.container}>
  
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'beige',
      borderColor: '#9088D4',
      borderWidth: 3,
      height: 50,
      width: '85%',
      paddingHorizontal: 20,
      borderRadius: 30,
      marginVertical: 10,
      justifyContent: 'center'
    },
    input: {
      
    }
  
  })
export default PersonelInput;