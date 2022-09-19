import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleDownIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from 'react-native-web';
import CommBottomSheet from '../components/CommBottomSheet';
import DailyMealsCard from '../components/DailyMealsCard';

const DietScreen = () => {

  const navigation = useNavigation();
  const [show, setShow] = useState(true);
    /*<TouchableOpacity onPress={() => setShow(true)}></TouchableOpacity> */

  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>
        <View>
          <View style={styles.Button} >
                <ArrowRightIcon style={Forward.Button} size='40' color={'#fff'}>
                  <TouchableOpacity></TouchableOpacity>
                </ArrowRightIcon>
          </View>
          <View>
            <Text style={Tittle.Text}>Veganism:</Text>
            <Text style={Content.Text}>This is where information aboout Veganism would be rendered</Text>
          </View>
        </View>
        <ArrowCircleDownIcon 
        onPress={() =>  {
          setShow(true);
          console.log();
        }}
        size={50} style={Community.Card}>
        </ArrowCircleDownIcon>
      <ScrollView contentContainerStyle={{
          paddingHorizontal: 15,
      }}
      Vertical
      showsHorizontalScrollIndicator={false}>
        <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="Shorts"/>
        <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="Shorts"/>
        <DailyMealsCard imgUrl="https://links.papareact.com/wru" title="shorts"/>
      </ScrollView>

      <CommBottomSheet show={show} onDismiss={() => {
          setShow(false);
        }}></CommBottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
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

const Forward = StyleSheet.create({
  Button: {
      alignItems: 'flex-start',
      paddingLeft: 10,
  }
})

const Community = StyleSheet.create({
  Card: {
      alignSelf: 'center',
  }
})

const Tittle = StyleSheet.create({
  Text: {
      color: '#111',
      fontSize: 30,
  }
})

const Content = StyleSheet.create({
  Text: {
      color: '#111',
      fontSize: 15,
      letterSpacing: 2,
      textAlign: 'center',
      writingDirection: 'auto',
      flexWrap: 'wrap',
      padding: 10,
  }
})

export default DietScreen