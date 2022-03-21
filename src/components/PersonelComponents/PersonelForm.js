import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Touchable, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import PersonelInput from './PersonelInput';
import CustomButton from '../CustomButton';
import BackButton from '../BackButton';


const PersonelForm = ({ navigation }) => {

    const [personel, setPersonel] = useState({
        name: '',
        surname: '',
        school: '',
        department: '',
        dateOfStart: '',
        permissionDays: '',
        dateOfBirth: '',
        type: "personel"

    })

    const createPersonel = async (personel) => {
        try {
            await firestore().collection('personels').add(personel);
            navigation.navigate('PersonelScreen');
        } catch (error) {
            console.log(error)
        }
    }

    const updateForm = () => {
        setPersonel ({
        name: '',
        surname: '',
        school: '',
        department: '',
        dateOfStart: '',
        permissionDays: '',
        dateOfBirth: '',
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButtonContainer} >
                        <BackButton
                            onPress={() => {
                                navigation.navigate('PersonelScreen');
                            }}
                        />
                    </View>
                    <Text style={styles.head}>Add Personel</Text>
                </View>

                <PersonelInput
                    value={personel.name}
                    onChangeText={(name) => { setPersonel({ ...personel, name: name }) }}
                    placeholder="Name"
                />
                <PersonelInput
                    value={personel.surname}
                    onChangeText={(surname) => { setPersonel({ ...personel, surname: surname }) }}
                    placeholder="Surname"
                />
                <PersonelInput
                    value={personel.dateOfBirth}
                    onChangeText={(dateOfBirth) => { setPersonel({ ...personel, dateOfBirth: dateOfBirth }) }}
                    placeholder="Date of Birth"
                />
                <PersonelInput
                    value={personel.school}
                    onChangeText={(school) => { setPersonel({ ...personel, school: school }) }}
                    placeholder="School"
                />
                <PersonelInput
                    value={personel.department}
                    onChangeText={(department) => { setPersonel({ ...personel, department: department }) }}
                    placeholder="Department"
                />
                <PersonelInput
                    value={personel.dateOfStart}
                    onChangeText={(dateOfStart) => { setPersonel({ ...personel, dateOfStart: dateOfStart }) }}
                    placeholder="Date of Start"
                />
                <PersonelInput
                    value={personel.permissionDays}
                    onChangeText={(permissionDays) => { setPersonel({ ...personel, permissionDays: permissionDays }) }}
                    placeholder="Permission Days"
                />
                <CustomButton

                    onPress={() => { createPersonel(personel) }}
                    text="Submit"

                />
                <TouchableOpacity>
                    <Text 
                    onPress={updateForm}
                    style={{ marginTop: 10, fontSize: 14 }}>
                    Clear
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'beige',
        height: 710

    },

    header: {
        // color: '#252A34',
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

    backButtonContainer: {
        position: 'absolute',
        left: 15,
        justifyContent: 'center',
        height: 70,
        alignSelf: 'flex-start'
    },


})

export default PersonelForm;


