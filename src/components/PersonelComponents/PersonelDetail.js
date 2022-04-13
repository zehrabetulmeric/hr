import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import Header from "../Header";
import firestore from '@react-native-firebase/firestore';
import PersonelCard from "./PersonelCard";

const profile = require("../../../assets/profile.png");

const PersonelDetail = ({ navigation, onPress, onDetail, text, header, route },) => {

    const {item} = route.params;

    const onBack = () => {
        navigation.navigate("PersonelScreen")
    }

    return (
        <ScrollView
            onPress={onDetail}
            style={styles.container}>

            <Header
                text="Personel Detail"
                onBack={onBack}
            />

            <View style={styles.profile}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={profile}
                    />
                </View>
                <View>
                <Text style={styles.text}>{(item.name) + ' ' + (item.surname)}</Text>
                <Text style={styles.text}>{(item.department)}</Text>
                </View>
            </View>

            <View style={styles.personelName}>
            <Text style={styles.text}>{(item.name) + ' ' + (item.surname)}</Text>
            </View>

            <View style={styles.personelData}>
            <Text style={styles.text}>{(item.department)}</Text>
            </View>


            <View style={styles.permission}>
            <Text style={styles.text}>{(item.permissionDays)}</Text>
            </View>

            <View style={styles.managers}>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "beige"
    },

    profile: {
        height: 150,
        backgroundColor: "red",
        flexDirection: 'row'
    },

    imageContainer: {
        width: '30%',
        alignItems: 'center',
        
    },

    image: {
        width: 60,
        height: 60,
        backgroundColor: 'pink',
        borderRadius: 999,
       
    },

    text: {
        color: 'pink',
        fontSize: 26
    },

    contact: {
        backgroundColor: "blue"

    },

    personelData: {
        backgroundColor: "yellow"
    },

    permission: {
        backgroundColor: "green"
    },

    managers: {
        backgroundColor: "purple"

    },

})

export default PersonelDetail;
