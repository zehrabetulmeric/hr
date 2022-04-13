import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, FlatList, Keyboard } from 'react-native';
import AddButton from '../components/addButton';
import Header from '../components/Header';
import AddInput from '../components/ActivityComponents/addInput';
import ActivityCard from '../components/ActivityComponents/activityCard';
import firestore from '@react-native-firebase/firestore';


const ActivityScreen = ({ navigation, personel }) => {

    const [task, setTask] = useState(" ")
    const [tasks, setTasks] = useState(tasks);
    const onBack = () => {
        navigation.navigate('home');
    }

    const createTask = async (task) => {
        try {
            await firestore().collection('tasks').add(task);
            
        } catch (error) {
            console.log(error)
        }
    }

     

    const renderCard = ({ item }) => 
                    <ActivityCard
                        key={item.id}
                        text={item.task}
                    />

     const fetchTasks = async () => {
         const taskCollection = await firestore().collection('tasks').get()
         setTasks(
             taskCollection.docs.map((doc) => {
                 return {...doc.data(), id: doc.id}
             })
         )
     }

    //  useEffect(() => {
        
    //     fetchTasks(task)
    //     firestore().collection('tasks').where("type", "==", "task").onSnapshot(querySnapshot => {
    //         querySnapshot.docChanges().forEach(change => {
    //             if (change.type == 'added') {
    //                 console.log("New activity added.")
    //             }
    //             if (change.type == 'removed') {
    //                 console.log("New activity removed.")
    //             }
    //             if (change.type == 'modified') {
    //                 console.log("New activity modified.")
    //             }
               
    //         })
    //     })
    //     fetchTasks()
    // }, [])

    React.useEffect(() => {
        fetchTasks(task)
      }, [])

    const addTask = () => {
        Keyboard.dismiss();
        createTask(task)
        setTask(" ")
        
    }

    return (
        <View style={styles.container}>
            <Header
                text="Activity List"
                onBack={onBack}
            />
            
            <View style={styles.cardContainer}>
               
                <FlatList
                    
                    keyExtractor={item => item.id}
                    data={tasks}
                    renderItem={renderCard}
                    
                />
            
            </View>

            <View style={styles.addInputContainer}>
                <AddInput 
                    placeholder="Write a task"
                    value={task.task}
                    onChangeText={(task) => { setTask({ ...task, task:task }) }}
                />
            </View>

            <View style={styles.addButtonContainer}>
                <AddButton
                onPress={() => addTask()}
                />
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'beige'

    },

    addInputContainer: {
        flex: 1,
        position: 'absolute',
        width: '70%',
        bottom: 20,
        left: 20,
        height: 70,
        justifyContent: 'center'
    },

    addButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignSelf: 'flex-end',
        height: 70,
    },


})

export default ActivityScreen;

