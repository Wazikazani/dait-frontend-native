import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { UserCircleIcon, ArrowLeftIcon, UsersIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from 'react-native-web';

const CommunityScreen = () => {
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
            <View style={all.users}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                </ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                </ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                    <UserCircleIcon size='45' color='#ff760d' style={scrollUser.view}></UserCircleIcon>
                </ScrollView>
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
        borderRadius: 41,
    }
})

const scrollUser = StyleSheet.create({
    view: {
        marginRight: 20,
        marginTop: 30,
        width: 200,
        height: 350,
        borderRadius: 15,
    }
})

const all = StyleSheet.create({
    users: {
        height: 300,
        backgroundColor: 'transparent',
        margin: 0,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

const Back = StyleSheet.create({
    Button: {
        alignItems: 'flex-start',
        paddingLeft: 10,
    }
})

export default CommunityScreen