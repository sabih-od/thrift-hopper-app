import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Auth/Login';
import SignIn from './src/Auth/Sign-In';
import Splash from './src/pages/Splash';
import Home from './src/pages/Home';
import Auth from './src/Auth/Auth';

const Stack = createNativeStackNavigator();

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);
  }, []);

  return (
    appReady ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Sign-In" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <Splash />
    )
  );
};

export default App;
