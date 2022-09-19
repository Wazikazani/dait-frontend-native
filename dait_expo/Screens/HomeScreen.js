import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet';
import { useNavigation } from '@react-navigation/native';
import { GlobeIcon, ArrowSmRightIcon, ArrowSmLeftIcon, CogIcon, ArrowsExpandIcon } from "react-native-heroicons/outline";


const HomeScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const navigation = useNavigation();

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
    return <Text>Requestion permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Video
          style={styles.video}
          source={{uri: video.uri}}
          useNativeControls
          resizeMode='contain'
          isLooping
        />
        <Button title="Share" onPress={shareVideo} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={saveVideo} /> : undefined}
        <Button title="Discard" onPress={() => setVideo(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Camera flex='1' ref={cameraRef} type={type}>
      <SafeAreaView>
        <GlobeIcon onPress={() => { navigation.navigate('Globe') }} color="#ff760d" size={40} style={Globe.headerButton}></GlobeIcon>
        <CogIcon color="#ff760d" size={40} style={Cog.headerButton}></CogIcon>
        <StatusBar style="dark" />
        <ArrowSmRightIcon style={Cog.flipCamera} onPress={toggleCameraType} size='40' color='#ff760d'></ArrowSmRightIcon>
        <ArrowSmLeftIcon style={Cog.flipCamera} onPress={toggleCameraType} size='40' color='#ff760d'></ArrowSmLeftIcon>
          <View style={styles.Button}>
            <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} color="white" />
          </View>
      </SafeAreaView>
      </Camera>
      <BottomSheet/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  Button: {
    top: 450,
    width: 75,
    height: 75,
    backgroundColor: '#ff760d',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 75,
  },
});

const Cog = StyleSheet.create({
  headerButton: {
       marginLeft: 10,
       bottom: 400/ 10.0
  },
  flipCamera: {
    left: 340,
    top: 400,
  }
});

const Globe = StyleSheet.create({
  headerButton: {
      marginLeft: 10,
      paddingLeft: 700,
  },
});


export default HomeScreen