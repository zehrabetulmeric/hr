import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, ScrollViewComponent } from 'react-native';
import CustomCard from '../components/CustomCard';
import auth from '@react-native-firebase/auth';

const MainCard1 = require("../../assets/teamwork.png");
const MainCard2 = require("../../assets/permission.png");
const MainCard3 = require("../../assets/upload.png");
const MainCard4 = require("../../assets/calendar.png");

function MainScreen({ navigation }) {
  const userMail = auth().currentUser.email;
  return (
    <View style={styles.container}>
    
    <View style={styles.header}>
                <View style={styles.image}></View>
                <Text style={styles.head}>Merhaba</Text>
                <Text style={styles.head}>{userMail.split('@')[0]}</Text>  
            </View>

    

      <View style={styles.CardContainer}>
        <CustomCard
          style={{}}
          source={MainCard1}
          text="Personels"
          onPress={() => {
            navigation.navigate('PersonelScreen');
          }}
        />

        <CustomCard
          style={{ marginTop: 20 }}
          source={MainCard2}
          text="Permission"
          onPress={() => {
            navigation.navigate('PermissionScreen');
          }}
        />

        <CustomCard
          style={{}}
          source={MainCard3}
          text="Activity"
          onPress={() => {
            navigation.navigate('ActivityScreen');
          }}
        />

        <CustomCard
          style={{}}
          source={MainCard4}
          text="Calender"
          onPress={() => {
            navigation.navigate('CalenderScreen');
          }}
        />
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textContainer: {
    marginTop: 60,
    width: '90%',
    alignItems: 'flex-end',
    borderStyle: 'dashed',
    borderWidth:4,
    backgroundColor: 'beige',
    borderColor: '#9088D4',
    
  },

  CardContainer: {
    
    margin: 100,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    
  },

  image: {
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    borderRadius: 999,
    borderColor: 'black',
    opacity: .5
  },

  header: {
    color: '#252A34',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    backgroundColor: '#9088D4',
    marginBottom: 20,

},

head: {
    fontSize: 22,
    fontStyle: 'normal',
}




})

export default MainScreen;