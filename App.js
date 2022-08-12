import React, { Profiler } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import BMI from './Screens/BMI'
import RegisterDetail from './Screens/RegisterDetail';
import HealthStatus from './Screens/HealthStatus';
import EnergyExpenditure from './Screens/EnergyExpenditure';
import WorkoutTime from './Screens/WorkoutTime';
import Goal from './Screens/Goal';
import Exercise from './Screens/Exercise';
import Profile from './Screens/Profile'
const Stack=createNativeStackNavigator();
const App= () => {
   return (
   <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
           name="Login"
           component={Login}
           options={{ title: 'Login',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
           <Stack.Screen
           name="SignUp"
           component={SignUp}
           options={{ title: 'Register',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
           <Stack.Screen
           name="Home"
           component={Home}
           options={{ title: 'Home',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
          <Stack.Screen
           name="Register Details"
           component={RegisterDetail}
           options={{ title: 'Register Details',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
           <Stack.Screen
           name="BMI"
           component={BMI}
           options={{ title: 'BMI Calculator',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
          <Stack.Screen
           name="HealthStatus"
           component={HealthStatus}
           options={{ title: 'Health Status',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
          />
          <Stack.Screen
           name="EnergyExpenditure"
           component={EnergyExpenditure}
           options={{ title: 'Energy Expenditure',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}
           />
            <Stack.Screen
           name="WorkoutTime"
           component={WorkoutTime}
           options={{ title: 'Work out Time',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}/>
          <Stack.Screen
           name="Goal"
           component={Goal}
           options={{ title: 'Goal',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}/>
            <Stack.Screen
           name="Exercise"
           component={Exercise}
           options={{ title: 'Exercise',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}/>
           <Stack.Screen
           name="Profile"
           component={Profile}
           options={{ title: 'Profile',
           headerStyle: {
           backgroundColor: 'white',
           },headerTitleAlign:'center',
           headerTintColor: 'black',
           headerTitleStyle: {
           fontWeight: 'bold',
           fontSize:20,
           },}}/>
      </Stack.Navigator>
   </NavigationContainer>
      
  );
};



export default App;
