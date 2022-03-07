import * as React from 'react';
import { Button, Text, View } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('detail')}
        />
      </View>
    );
  }

  export default ProfileScreen;