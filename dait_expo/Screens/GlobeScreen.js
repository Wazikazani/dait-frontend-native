import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GlobeIcon, UserIcon, CogIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from 'react-native-web';

const GlobeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView>
        <View>
            <View style={styles.Button} >
            <ArrowLeftIcon
                onPress={navigation.goBack}
                style={Back.Button} size='40' color={'#fff'}>
                                <TouchableOpacity></TouchableOpacity>
                </ArrowLeftIcon>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Button: {
        width: 40,
        height: 40,
        backgroundColor: '#ff760d',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 40,
    }
})

const Back = StyleSheet.create({
    Button: {
        alignItems: 'flex-start',
        paddingLeft: 10,
    }
})

export default GlobeScreen