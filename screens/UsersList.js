 import React,{ useEffect, useState} from "react"; 
 import { View, Text, ScrollView, Button } from "react-native";
 import firebase from "../DataBase/firebase";
 import {ListItem,Avatar} from "react-native-elements";

 const UserList=(props)=>{
    const [users, setUsers]= useState([])

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot=>{

            const users=[];

            querySnapshot.docs.forEach(doc=>{
                const {nombre,escuela,anio,telefono,correo}=doc.data()
                users.push({
                    id:doc.id,
                    nombre,
                    escuela,
                    anio,
                    telefono,
                    correo
                })
            })
            setUsers(users)
       })
    },[])
     return(
            <ScrollView>
               <Button  title="Crear Alumno" onPress={()=>props.navigation.navigate('UserCreate') }/>
               {
                   users.map(user=>{
                       return(
                            <ListItem key={user.id} bottomDivider onPress={()=>{
                                props.navigation.navigate('UserDetail',{
                                    userId:user.id 
                                })
                            }}>
                                <ListItem.Chevron/>
                                <Avatar source={{uri:'https://img.eldefinido.cl/portadas/650/2018-11-28-8329HH5529.jpg'}} rounded/>
                                <ListItem.Content>
                                 <ListItem.Title>{user.nombre}</ListItem.Title>
                                 <ListItem.Subtitle>{user.escuela}</ListItem.Subtitle>
                                 <ListItem.Subtitle>{user.anio}</ListItem.Subtitle>
                                 <ListItem.Subtitle>{user.telefono}</ListItem.Subtitle>
                                 <ListItem.Subtitle>{user.correo}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                       )
                   })
               }
            </ScrollView>
       
     )
 }

 export default UserList