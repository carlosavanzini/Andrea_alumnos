import React,{useEffect,useState} from "react"; 
import { StyleSheet, View,TextInput,ScrollView, Button, ActivityIndicator,Alert  } from "react-native";
import firebase from "../DataBase/firebase";

const UserDetailScreen=(props)=>{
    const initialState={
            id:'',
            nombre:'',
            escuela:'',
            anio:'',
            telefono:'', 
            correo:''
    }
    const [user,setUser]=useState(initialState) 

    const[loading,setLoading]=useState(true)

    const getUserId=async(id)=>{
        const dbRef=  firebase.db.collection('users').doc(id)
        const doc = await dbRef.get()
        const user= doc.data() 
        setUser({
            ...user,
            id:doc.id,
        })
        setLoading(false)
    }
    useEffect(()=>{
       getUserId(props.route.params.userId);
    },[]) 
    
   

    const handleChangeText=(nombre, value)=>{
        setUser({...user,[nombre]:value})
}

const deleteUser =async ()=>{
  const dbRef=firebase.db.collection('users').doc(props.route.params.userId);
  await dbRef.delete()
  props.navigation.navigate('UserList')
}

const updateUser= async()=>{
    const dbRef= firebase.db.collection('users').doc(user.id);
    await dbRef.set({
           nombre:user.nombre,
           escuela:user.escuela,
           anio:user.anio,
           telefono:user.telefono,
           correo:user.correo
    })
    setUser(initialState)
    props.navigation.navigate('UserList')
}

const openConfirmationAlert=()=>{
    Alert.alert('Alumno Eliminado', 'Estas Seguro?',[
        {text:'Si', onPress:()=> deleteUser()},
        {text:'No', onPress:()=> console.log('Cancelado') }
    ]  ) 
}

if(loading){
    return(
        <View>
            <ActivityIndicator size="large" color="#9e9e9e"/>
        </View>
    )
}
    return(
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            < TextInput placeholder="Nombre y Apellido" value={user.nombre} onChangeText={(value)=> handleChangeText('nombre', value)}/>
        </View>
        <View style={styles.inputGroup}>
            < TextInput placeholder="Escuela" value={user.escuela} onChangeText={(value)=> handleChangeText('escuela', value)}/>
        </View >
        <View style={styles.inputGroup}>
            < TextInput placeholder="Año de Secundaria" value={user.anio} onChangeText={(value)=> handleChangeText('anio', value)}/>
        </View >
        <View style={styles.inputGroup}>
            < TextInput placeholder="Telefono" value={user.telefono} onChangeText={(value)=> handleChangeText('telefono', value)}/>
        </View>
        <View style={styles.inputGroup}>
            < TextInput placeholder="Correo" value={user.correo} onChangeText={(value)=> handleChangeText('correo', value)}/>
        </View>
        <View>
            <Button color="#19ac52" title="Actualizar Alumno" onPress={()=>updateUser()}/>
        </View>
        <View>
        <Button color="#e37399" title="Eliminar Alumno" onPress={()=>openConfirmationAlert()}/>
        </View>
    </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
}) 
export default UserDetailScreen