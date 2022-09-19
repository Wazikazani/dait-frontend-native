import { NavigationContainer } from '@react-navigation/native'
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import JourneyScreen from './Screens/JourneyScreen';
import GlobeScreen from './Screens/GlobeScreen';
import DietScreen from './Screens/DietScreen';
import CommunityScreen from './Screens/CommunityScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Journey" component={JourneyScreen} />
      <Stack.Screen name="Globe" component={GlobeScreen} />
      <Stack.Screen name="Diets" component={DietScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
