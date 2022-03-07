import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder,  secureTextEntry, value, onType }) => { 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E6F5',
    width: 150,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    marginVertical: 10,
  },
  input: {
  }

})

export default CustomInput;