import React from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import AddButton from '../components/addButton';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityComponents/activityCard';
import ModalComponent from '../components/ActivityComponents/modal';

const check = require("../../assets/checkmark.png")

const ActivityScreen = ({ navigation, onSend}) => {

    const [tasks, setTasks] = useState(tasks)
    
    const [modalVisible, setModalVisible] = useState(false);
    

    const onBack = () => {
        navigation.navigate('home');
    }



    const renderCard = ({ item }) => 
                    <ActivityCard
                        key={item.id}
                        text={item.task}
                    />

     const fetchActivities = async () => {
         const taskCollection = await firestore().collection('tasks').get()
         setTasks(
             taskCollection.docs.map((doc) => {
                 return {...doc.data(), id: doc.id}
             })
         )
     }

     useEffect(() => {
        
         fetchActivities()
         firestore().collection('tasks').where("type", "==", "task").onSnapshot(querySnapshot => {
             querySnapshot.docChanges().forEach(change => {
                 if (change.type == 'added') {
                     console.log("New activity added.")
                 }
                 if (change.type == 'removed') {
                     console.log("New activity removed.")
                 }
                 if (change.type == 'modified') {
                     console.log("New activity modified.")
                 }
                
             })
         })
     }, [])

    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#5500dc" />
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Header
                text="Activity List"
                onBack={onBack}
            />

            <View style={styles.cardContainer}>
                <FlatList
                    style={{}}
                    keyExtractor={item => item.id}
                    data={tasks}
                    renderItem={renderCard}
                    ItemSeparatorComponent={() => <View style={styles.seperator} />}
                />
            </View>

            <View style={styles.addButtonContainer}>
                <AddButton
                    onPress={setModalVisible(!modalVisible)}
                />
            </View>
            {/* <ActivityCard

            /> */}
            <ModalComponent
               
                
                
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',

    }