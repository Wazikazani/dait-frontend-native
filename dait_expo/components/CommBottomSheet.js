import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleDownIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import Animated, { event, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50
const CommBottomSheet = (show, onDismiss, children) => { /**/
    const translateY= useSharedValue(0)

    const navigation = useNavigation();

    /*const scrollTo = useCallback((destination: number) => {
        translateY.value = withSpring(0, {damping: 50});
    }, [])*/

   /* 
    (show, onDismiss, children)
    <ArrowCircleDownIcon onPress={onDismiss}></ArrowCircleDownIcon>
    {children} */
    const [open, setOpen] = useState(show); 
    const bottom = useRef(new Animated.Value(-SCREEN_HEIGHT)).current;

    useEffect(() => {
        if(show) {
            setOpen(show);
            Animated.timing(bottom, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            setOpen(show);
            Animated.timing(bottom, {
                toValue: -SCREEN_HEIGHT,
                duration: 500,
                useNativeDriver: false,
            }).start(() => {
                setOpen(false);
            }); 
        }
    }, [show])
    if(!open) {
        return null;
    }

    const context = useSharedValue({y: 0});

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
        console.log(event.translationY);
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    }).onEnd(() => {
        if (translateY.value > SCREEN_HEIGHT) {
            translateY.value = withSpring(MAX_TRANSLATE_Y, {damping: 50});
        } else if (translateY.value < SCREEN_HEIGHT/1) {
            translateY.value = withSpring(0, {damping: 50});
        }
    })

    useEffect(() => {
        translateY.value = withSpring(-1150/1.5, {damping: 50});
    }, [])

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value, 
            [MAX_TRANSLATE_Y+50, MAX_TRANSLATE_Y], 
            [25, 5],
            Extrapolate.CLAMP
        );
        return {
            borderRadius,
            transform: [{translateY: translateY.value}]
        }
    })
  return (
    <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                <View style={styles.line}></View>
                <ScrollView>
                    <View style={Community.Card}><Text style={Card.Text} onPress={() => {
                                navigation.navigate('Community')
                            }}>ethical vegans</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>enviromental vegans</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>health vegans</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>religious vegans</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>ital</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Raw Food Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Gluten-Free Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>South Beach Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Lacto Vegetarianism</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Low-fat Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Paleolithic Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Flexitarian</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Mayo Clinic Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Whole30</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Plant-based Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Renal Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Diabetic Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Fruitarianism</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Macrobiotic Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Very-low-calori Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Blood Type Community</Text></View>
                    <View style={Community.Card}><Text style={Card.Text}>Zone Community</Text></View>
                </ScrollView>
            </Animated.View>
    </GestureDetector>
  )
}

export default CommBottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#1E2425',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        bottom: 0,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    }
})

const Community = StyleSheet.create({
    Card: {
        height: 90,
        backgroundColor: '#ff760d',
        margin: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const Card = StyleSheet.create({
    Text: {
        color: '#fff',
        fontSize: 15,
    }
})