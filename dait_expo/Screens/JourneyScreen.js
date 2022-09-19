import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GlobeIcon, UserIcon, CogIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from 'react-native-web';

const JourneyScreen = () => {

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
            <ScrollView height='100%'>
                <View style={Diet.Card} ><Text style={Card.Text}
                              onPress={() => {
                                navigation.navigate('Diets')
                            }}>Veganism</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Vegetarianism</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Mediterranean Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Ketogenic Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Low-carbohydrate Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Intermittent Fasting</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Raw Food Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Gluten-Free Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>South Beach Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Lacto Vegetarianism</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Low-fat Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Paleolithic Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Flexitarian</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Mayo Clinic Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Whole30</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Plant-based Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Renal Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Diabetic Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Fruitarianism</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Macrobiotic Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Very-low-calori Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Blood Type Diet</Text></View>
                <View style={Diet.Card}><Text style={Card.Text}>Zone Diet</Text></View>
            </ScrollView>
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

const Diet = StyleSheet.create({
    Card: {
        height: 200,
        backgroundColor: '#1E2425',
        margin: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const Card = StyleSheet.create({
    Text: {
        color: '#fff',
        fontSize: 25,
    }
})

const Back = StyleSheet.create({
    Button: {
        alignItems: 'flex-start',
        paddingLeft: 10,
    }
})

export default JourneyScreen