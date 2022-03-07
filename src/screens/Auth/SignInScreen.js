import React from "react";
import { View, Image, StyleSheet, useWindowDimensions, Alert, } from "react-native";
import { Formik } from 'formik';
import { useState } from "react";
import CustomInput from '../Auth/AuthComponents/SigninInput'
import CustomButton from "./AuthComponents/SigninButton";
import LoginButton from "./AuthComponents/LoginButton";
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMessage from "../../utils/authErrorMessage";
import Logo from '../../../assets/b_logo.png';

const initialFormValues = {
    email: '',
    password: '',
    repassword: ''
}

const SigninScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    function handleLogin() {
        navigation.navigate('LoginScreen')
    }

    async  function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "Şifreler uyuşmuyor",
                type: "danger",
            });

        };
        try {
            setLoading(true)
            await   auth().createUserWithEmailAndPassword(
                formValues.email,
                formValues.repassword
            )
            showMessage({
                message: "Kullanıcı oluşturuldu",
                type: "success",
            });
            navigation.navigate('home')
            setLoading(false)

        } catch (error) {
            showMessage({
                message: authErrorMessage(error.code),
                type: "danger",
            });
            setLoading(false)
        }
        console.log(formValues)
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
                            { height: height * 0.2 }]}
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
                        <CustomInput
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder="Enter your password again"
                        />

                        <CustomButton
                            text="GET STARTED"
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </>
                )}
            </Formik>

            <LoginButton
                text="LOGIN"
                onPress={handleLogin}
            />
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

export default SigninScreen;