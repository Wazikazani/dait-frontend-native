import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
/* This is the daily meals card, which contains recomended meal shorts */

const DailyMealsCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.shorts}>
        <Image source={{
            uri: imgUrl,
        }}
        className="h-20 w-20 rounded"/>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    shorts: {
        marginRight: 10,
        marginTop: 30,
        width: 200,
        height: 350,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
});

export default DailyMealsCard