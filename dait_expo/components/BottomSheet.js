import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react'
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler';
import Animated, { event, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { Button, Dimensions, TouchableOpacity } from 'react-native-web';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
import DailyMeals from './DailyMeals';
import { useNavigation } from '@react-navigation/native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50
const BottomSheet = () => {
    const translateY= useSharedValue(0)

    /*const scrollTo = useCallback((destination: number) => {
        translateY.value = withSpring(0, {damping: 50});
    }, [])
    
        <ScrollView>
        <Text>Community</Text>
        <DailyMeals/>
    </ScrollView>*/

    const context = useSharedValue({y: 0});

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
        console.log(event.translationY);
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    }).onEnd(() => {
        if (translateY.value < SCREEN_HEIGHT + 1000 / 5.5) {
            translateY.value = withSpring(MAX_TRANSLATE_Y, {damping: 50});
        } else if (translateY.value > -SCREEN_HEIGHT + 1000 ) {
            translateY.value = withSpring(-0, {damping: 50});
        }
    })

    useEffect(() => {
        translateY.value = withSpring(SCREEN_HEIGHT + 300/3, {damping: 50});
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

    const navigation = useNavigation();


  return (
      <GestureDetector gesture={gesture}>
  <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
    <View style={styles.line}/>
    <View style={styles.Button}>
        <PlusCircleIcon 
        onPress={() => {
            navigation.navigate('Journey')
        }}
        style={Journey.Text} size='50' color={'#fff'}></PlusCircleIcon>
    </View>
    <ScrollView>
        <View>
            <Text>BreakFast</Text>
            <DailyMeals/>
            <DailyMeals/>
        </View>
    </ScrollView>
  </Animated.View>
  </GestureDetector>
  );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT + 1000,
        width: '100%',
        backgroundColor: '#1E2425',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        /*height: '100%',
        width: '100%',
        backgroundColor: '#1E2425',
        position: 'absolute',
        top: 100 / 2.0,
        borderRadius: 20,*/
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
    Button: {
        width: 50,
        height: 50,
        backgroundColor: '#ff760d',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 50,
    }
});

const Journey = StyleSheet.create({
    Text: {
        alignItems: 'flex-start',
        padding: 20,
    }
})

export default BottomSheet
