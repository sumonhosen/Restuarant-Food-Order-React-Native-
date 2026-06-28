import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ExploreFeatureScreen from './src/screens/ExploreFeatureScreen';
import SplashScreen from './src/screens/SplashScreen';
import RestaurantListScreen from './src/screens/Restaurant/RestaurantListScreen';
import RestaurantDetailsScreen from './src/screens/Restaurant/RestaurantDetailsScreen';
import {CartProvider} from './src/context/CartContext';
import CartScreen from './src/screens/Restaurant/CartScreen';
import CheckoutScreen from './src/screens/Restaurant/CheckoutScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="ExploreFeature" component={ExploreFeatureScreen}/>
          <Stack.Screen name="RestaurantList" component={RestaurantListScreen}/>
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetailsScreen}/>
          <Stack.Screen name="Cart" component={CartScreen}/>
          <Stack.Screen name="Checkout" component={CheckoutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>

  );
}

