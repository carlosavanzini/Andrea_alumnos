import React,{useState} from "react"; 
import { View, Button, TextInput, ScrollView,StyleSheet } from "react-native";
import firebase from "../DataBase/firebase";


const CreateUserScreen=(props)=>{
     const [state,setState] = useState({
         nombre:'',
         escuela:'',
         anio:'',
         telefono:'', 
         correo:''
     })

const handleChangeText=(nombre, value)=>{
        setState({...state,[nombre]:value})
}

const AddNewUser= async()=>{
  if(state.nombre ==='' ){
      alert('Por favor introduce un nombre')
  }else{
      try{
    await firebase.db.collection('users').add({
        nombre:state.nombre,
        escuela:state.escuela,
        anio:state.anio,
        telefono:state.telefono,
        correo:state.correo,
    });
    props.navigation.navigate("UserList");
  } catch(error){
      console.log(error)
    } 
  }
}
    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                < TextInput placeholder="Nombre y Apellido" onChangeText={(value)=> handleChangeText('nombre', value)}/>
            </View>
            <View style={styles.inputGroup}>
                < TextInput placeholder="Escuela" onChangeText={(value)=> handleChangeText('escuela', value)}/>
            </View >
            <View style={styles.inputGroup}>
                < TextInput placeholder="Año de Secundaria" onChangeText={(value)=> handleChangeText('anio', value)}/>
            </View >
            <View style={styles.inputGroup}>
                < TextInput placeholder="Telefono" onChangeText={(value)=> handleChangeText('telefono', value)}/>
            </View>
            <View style={styles.inputGroup}>
                < TextInput placeholder="Correo" onChangeText={(value)=> handleChangeText('correo', value)}/>
            </View>
            <View>
                <Button title="Añadir Alumno" onPress={()=>AddNewUser()}/>
            </View>
        </ScrollView>
    )
}

 const styles = StyleSheet.create({
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

export default CreateUserScreen