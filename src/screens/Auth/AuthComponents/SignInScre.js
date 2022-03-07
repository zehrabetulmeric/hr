import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import CustomInput from './SigninInput';
import CustomButton from './SigninButton';



const SignInScree = ({navigation}) => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [loading, setLoading] = useState(false);
    
   const SignUp = () => {
     
       try {
           setLoading(true)
          auth().createUserWithEmailAndPassword(
               email, password
           );
           navigation.navigate('MainScreen');
           setLoading(false)
       } catch (error) {
        setLoading(false)
           Alert.alert("alert")
       }
    }
    
    const { height } = useWindowDimensions();
    return (
        <View style={styles.background}>
            <Image
                source={Logo}
                style={[styles.logo,
                { height: height * 0.3 }]}
                resizeMode="contain" />

            <CustomInput
                placeholder="E-mail"
                value={email}
                setValue={setEmail} />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />

            <CustomButton
                text=" GET STARTED"
                onPress={SignUp}
                loading={loading}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 30,
        height: 1200,
    },

    logo: {
        width: '100%',
        maxHeight: 200,
        maxWidth: 300
    }


})

export default SignInScree;