import React from "react";
import { View, Image, StyleSheet, useWindowDimensions, } from "react-native";
import { useState } from "react";
import CustomInput from '../Auth/AuthComponents/SigninInput'
import CustomButton from "./AuthComponents/SigninButton";
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMessage from "../../utils/authErrorMessage";
import Logo from '../../../assets/b_logo.png';

const initialFormValues = {
    email: '',
    password: ''
}

const LoginScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(formValues) {

        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formValues.email,
                formValues.password
            )
            navigation.navigate('home')
            setLoading(false)
        }
        catch (error) {
            showMessage({
                message: authErrorMessage(error.code),
                type: "danger",
            });
            setLoading(false)
        }
    }

    const { height } = useWindowDimensions();
    return (
        <View style={styles.background}>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>

                        <Image
                            source={Logo}
                            style={[styles.logo,
                            { height: height * 0.3 }]}
                            resizeMode="contain" />
                        <CustomInput
                            value={values.email}
                            onType={handleChange('email')}
                            placeholder="E-mail"
                        />
                        <CustomInput
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder="Password"
                        />

                        <CustomButton
                            text="Login"
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </>
                )}
            </Formik>

        </View>
    )
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

export default LoginScreen;