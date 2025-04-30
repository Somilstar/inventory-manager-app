import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'


const CreateScreen = ({data, setdata}) => {


const [itemName, setitemName] = useState('')
const [stockAmt, setstockAmt] = useState('')
const [isedit, setisedit] = useState(false)
const [edititemid, setedititemid] = useState(null)
const handerAddItem = ()=>{

const newitem = {
    id: Date.now(),
    name: itemName,
    stock: stockAmt
}
setdata([...data, newitem])

setitemName('')
setstockAmt('')
setisedit(false)

}

const deleteitemhandler = (id) =>{
setdata(data.filter((item)=> item.id !== id))
}

const edititemhandler = (item) =>{
    setisedit(true)
    setitemName(item.name);
    setedititemid(item.id);
}

const updatehandler = () =>{
setdata(data.map((item)=> (
    item.id === edititemid ?  {...item, name: itemName, stock: stockAmt} : item
)))
}

 return (
   <View style={styles.container}>
     <TextInput
     placeholder='Enter an item name...'
     placeholderTextColor="#999"
     style={styles.input}
     value={itemName}
     onChangeText={(item)=> setitemName(item)}
     />
      <TextInput
     placeholder='Enter stock amount...'
     placeholderTextColor="#999"
     style={styles.input}
     value={stockAmt}
     onChangeText={(item)=> setstockAmt(item)}
     />


     <Pressable style={styles.button} onPress={()=> isedit ?  updatehandler() : handerAddItem()}>
       <Text style={styles.btntext}>{isedit ? "EDIT ITEM" : "ADD ITEM"}</Text>
     </Pressable>


<View  style={{marginTop:10}}>

       <Text style={styles.headingText}>All items in the Stock</Text>
      
     

<FlatList

data={data}
keyExtractor={(item)=> item.id}

renderItem={({item})=>(


   <View style={[styles.itemContainer, {backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF"}]}>
               <Text style={styles.itemText}>{item.name}</Text>
              

               <View style={{flexDirection:'row',  gap:30}}>
               <Text style={styles.itemText}>{item.stock}</Text>

              <Pressable onPress={()=> edititemhandler(item)}>
              <Text style={styles.itemText}>Edit</Text>
              </Pressable>


               <Pressable onPress={()=> deleteitemhandler(item.id)}>
               <Text style={styles.itemText}>Delete</Text>
               </Pressable>
               </View>
   </View>
)}

contentContainerStyle = {{gap:10}}

/>
</View>


     
   </View>
 )
}


export default CreateScreen


const styles = StyleSheet.create({
    container:{
      paddingVertical: "4%",
      gap:10
   
   
    },
    input:{
      borderWidth:1.5,
      borderColor:"#D7F6BFFF",
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius: 7
    },
    button:{
     backgroundColor:"#CABFEEFF",
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius: 7,
      justifyContent: "center",
      alignItems: "center"
    },
    btntext:{
      color: "white",
      fontWeight: "bold",
      fontSize: 16
    },
    headingContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:10
    },
    headingText:{
        fontWeight: "500",
        fontSize: 16,
        marginVertical: 10
    },
    itemContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
    },
    itemText:{
        fontWeight: "400",
        fontSize: 15,
    }
   })
   