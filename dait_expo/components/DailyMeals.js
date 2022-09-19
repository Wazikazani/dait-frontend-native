import { View, Text } from 'react-native'
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler';
import React from 'react'
import DailyMealsCard from './DailyMealsCard';

/* This is the daily meal container that holds the cards */

const DailyMeals = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
      <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="Shorts"/>
      <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="Shorts"/>
      <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="shorts"/>
    </ScrollView>
  )
}

export default DailyMeals