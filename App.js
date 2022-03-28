import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from  "./src/screens/start"
import Register from  "./src/screens/Register"
import Login from "./src/screens/login"
import CreateProfile from "./src/screens/CreateProfile"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="home" component={Start} /> */}
      {/* <Stack.Screen options={{headerShown: false}} name="Register" component={Register} /> */}
      {/* <Stack.Screen options={{headerShown: false}} name="Login" component={Login} /> */}
       <Stack.Screen options={{headerShown: false}} name="CreateProfile" component={CreateProfile} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}