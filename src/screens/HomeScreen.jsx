import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import CreateScreen from './CreateScreen';
import AllItems from './AllItems';





 

const HomeScreen = () => {


   //using view and setveiew to track which component to show based on their value.
   //const[view,setView] = useState(0);
  const[view,setView] = useState(0);
const [data, setdata] = useState([
    {id:1, name: "wheat", stock:5, unit: "kg"},
    {id:2, name: "rice", stock:15, unit: "kg"},
    {id:3, name: "basmati rice", stock:25, unit: "kg"},
    {id:4, name: "pulse", stock:50, unit: "kg"},
    {id:5, name: "corn", stock:19, unit: "kg"},
  
 ])
 return (
    <SafeAreaView >
     <Text style={styles.title}>DashBoard</Text>
    
      <View style={styles.buttonContainer}> 


      <Pressable  onPress={()=>setView(0)} style=  {[styles.button, view===0 ? {backgroundColor: "#72C37AFF"} : null]} >
           <Text style={[styles.btnText, view===0 ? {color:"white"}: null]}>All Items</Text>
       </Pressable>


       <Pressable style={[styles.button, view===1 ? {backgroundColor: "#72C37AFF"} : null]} onPress={()=>setView(1)}>
           <Text style={[styles.btnText, view===1 ? {color:"white"}: null]}>Low Stock</Text>
       </Pressable>




       <Pressable style={[styles.button, view===2 ? {backgroundColor: "#72C37AFF"} : null]} onPress={()=>setView(2)}>
           <Text style={[styles.btnText, view===2 ? {color:"white"}: null]}>Create</Text>
       </Pressable>



</View> 

{view === 0 && <AllItems data={data} />}
{view === 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}
{view === 2 && <CreateScreen data={data} setdata={setdata}/>}

</SafeAreaView>
)
}


export default HomeScreen




const styles  = StyleSheet.create({
container:{
// width: "100%",
// height: "100%",
flex: 1,
padding: "4%",
backgroundColor: "#ffffff",
},
title:{

fontSize: 24,
fontWeight: "bold",
color: "#333",
},
buttonContainer:{
flexDirection: "row",
gap: 10,
marginVertical:10
},
button:{
paddingVertical:3.5,
paddingHorizontal:10,
borderRadius:50,
borderWidth: 0.8,
borderColor: "#72C37AFF"
},
btnText:{
color:"#72C37AFF",
fontSize: 12
}




})
