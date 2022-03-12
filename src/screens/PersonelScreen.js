import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, FlatList } from 'react-native'

import AddButton from '../components/AddButton';
import BackButton from '../components/BackButton';
import PersonelCard from '../components/PersonelComponents/PersonelCard';
import SearchInput from '../components/SearchInput';

const zbm = require("../../assets/zbm.jpg");

const PersonelScreen = ({ navigation, personel }) => {
    const [personels, setPersonels] = useState(personels);
    const [isLoading, setLoading] = useState(false);

    const renderCard = ({ item }) => 
                    <PersonelCard
                        key={item.id}
                        header={item.name + ' ' + item.surname}
                        text={item.department}
                    />

    const handleSearch = text => {
       const filteredPersonel = personels.filter (personel => {
            const searchedText = text.toLowerCase();
            const currentName = personel.name.toLowerCase();

            return currentName.indexOf(searchedText) > -1;
       });
       setPersonels(filteredPersonel);
    }

    const fetchPersonels = async () => {
        const personelCollection = await firestore().collection('personels').get()
        setPersonels(
            personelCollection.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        )
    }

    useEffect(() => {
        setLoading(true);
        fetchPersonels()
        firestore().collection('personels').where("type", "==", "personel").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    console.log("New personel added.")
                }
                if (change.type == 'removed') {
                    console.log("New personel removed.")
                }
                if (change.type == 'modified') {
                    console.log("New personel modified.")
                }
                
                setLoading(false);
            })
        })
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }
    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <View style={styles.backButtonContainer} >
                    <BackButton
                        onPress={() => {
                            navigation.navigate('home');
                        }}
                    />
                </View>
                <Text style={styles.head}>Personel List</Text>
            </View>

            <SearchInput
                placeholder="Search Personel"
                onSearch={handleSearch}
            />

            <View style={styles.cardContainer}>
                <FlatList
                style={{}}
                    keyExtractor={item => item.id}
                    data={personels}
                    renderItem={renderCard}
                    ItemSeparatorComponent={() => <View style={styles.seperator} />}
                />
            </View>

            <View style={styles.addButtonContainer}>
                <AddButton
                    onPress={() => {
                        navigation.navigate('PersonelForm');
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'beige',
        width: '100%',
        
    },

    cardContainer: {
        
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flex: 1,
        width: '100%',
        
    },

    seperator: {
        borderWidth: 1,
        borderColor:'#9088D4'
    },

    addButtonContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        alignSelf: 'flex-end'
    },

    backButtonContainer: {
        position: 'absolute',
        left: 15,
        justifyContent: 'center',
        height: 70,
        alignSelf: 'flex-start'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#9088D4',
        marginBottom: 10
    },

    head: {
        fontSize: 22,
        fontStyle: 'normal',
        color: 'beige',
        
    },
})

export default PersonelScreen;

