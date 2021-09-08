
import React, { useState } from "react";
import { TextInput, Keyboard } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useStateValue } from "../context/StateProvider";
import { EvilIcons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from "react-native";
import UpdateItem from "../components/model/item/updateItem";
import AddItem from "../components/model/item/addItem";
import { ScrollView } from "react-native";
const Item = () => {
  const [{ item }, dispatch] = useStateValue();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddItem,setModalAddItem] = useState(false)
  const [id,setId] = useState()
  var no = 1;
  // console.log(item);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchBar}>
          <EvilIcons
            style={{ width: "10%", paddingLeft: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput style={styles.inputSearch} placeholder="search..." />
          <TouchableNativeFeedback onPress={()=>setModalAddItem(!modalAddItem)}>
            <Text style={styles.add}>add</Text>
          </TouchableNativeFeedback>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.header}>
        <Text style={{width: "10%",textAlign:"center", fontWeight: "bold", color:"#FFFF"}}>id</Text>
        <Text style={{width: "30%",textAlign:"center", fontWeight: "bold", color:"#FFFF"}}>Item</Text>
        <Text style={{width: "20%",textAlign:"center" ,fontWeight: "bold", color:"#FFFF"}}>U/M</Text>
        <Text style={{width: "20%",textAlign:"center" ,fontWeight: "bold", color:"#FFFF"}}>price</Text>
        <Text style={{width: "20%",textAlign:"center" ,fontWeight: "bold",  color:"#FFFF"}}>inStock</Text>
      </View>
      <ScrollView>
      {
       item?.map((item)=>{
        return(
          <TouchableWithoutFeedback key={item.id} onPress={()=> {setModalVisible(true),setId(item.id)}}>
          <View style={styles.cart} key={item.id}>
            <Text style={{width: "10%",textAlign:"center"}}>{no++}</Text>
            <Text style={{width: "30%",textAlign:"center"}}>{item.item}</Text>
            <Text style={{width: "20%",textAlign:"center"}}>{item.Um}</Text>
            <Text style={{width: "20%",textAlign:"center"}}>{item.price}$</Text>
            <Text style={{width: "20%",textAlign:"center"}}>{item.inStock}</Text>

          </View>
          </TouchableWithoutFeedback>
        )
       })
      }
      </ScrollView>
      <View style={{flex: 1}}>
        <AddItem modalAddItem={modalAddItem} setModalAddItem={setModalAddItem} />
      </View>
      <View style={{flex: 1}}>
        <UpdateItem modalVisible={modalVisible} setModalVisible={setModalVisible} id={id}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFF"
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputSearch: {
    width: "80%",
    // backgroundColor:"red",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  add: {
    width: "10%",
    backgroundColor: "orange",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 5,
    color: "#FFFF"
  },
  header: {
    width:"100%",
    fontWeight: "bold",
    flexDirection: "row",
    backgroundColor:"orange",
    justifyContent:"space-between",
    paddingVertical:12,
    
  },
  cart: {
    width:"100%",
    borderBottomWidth: 1,
    borderBottomColor: "green",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between"
  }
});
export default Item;
