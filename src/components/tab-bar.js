import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';


const profile = require("../../assets/profile.png");
const setting = require("../../assets/setting.png");

function TabBar({ state, descriptors, navigation, source }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (

                    <TouchableOpacity
                        key={label}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'beige',
                            paddingTop: 8,
                            paddingBottom:8,
                            borderTopWidth: 2,
                            borderTopColor: '#252A34',
                            
                        }}>
                        {label === 'settings' && <Image
                            style={styles.logo}
                            source={require("../../assets/setting.png")}
                        />}

                        {label === 'profile' && <Image
                            style={styles.logo}
                            source={require("../../assets/profile.png")}
                        />}

                        {label === 'MainScreen' && <Image
                            style={styles.logo}
                            source={require("../../assets/home.png")}
                        />}
                    </TouchableOpacity>
                )

            })}
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 45,
        height: 45,
        
    }
})

export default TabBar;