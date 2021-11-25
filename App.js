import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from'@react-navigation/native'
//import {createStackNavigator} from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack=createNativeStackNavigator() 
 import UserList from './screens/UsersList';
 import UserDetailScreen from './screens/UserDetailScreen';
 import CreateUserScreen from './screens/CreateUserScreen';

function MyStack(){
  return(
    <Stack.Navigator>
       <Stack.Screen name="UserList" component={UserList} options={{title:'Lista de Alumnos'}}></Stack.Screen>
       <Stack.Screen name="UserCreate"component={CreateUserScreen}options={{title:'Agregar Alumnos'}}></Stack.Screen>
      <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{title:'Detalle de Alumnos'}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
