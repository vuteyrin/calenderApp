import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useStateValue} from "../../../context/StateProvider"
import { setLocalstorage } from "../../../function/Function";
import {actionTypes} from "../../../context/Reducer"
const AddItem = ({modalAddItem,setModalAddItem}) => {
  const [{item},dispatch] = useStateValue();
  const [items,setItem] = useState();
  const [um,setUm] = useState();
  const [price,setPrice] = useState();
  const [inStock,setInStock] = useState();

  const handleAddItem =()=>{
    var newArray = [];
      newArray = [
        ...item,
        {
          id: item.length +1,
          item: items,
          Um: um,
          price: price,
          inStock: inStock,
        },
      ];
    // }
    setLocalstorage("item",newArray);
    dispatch({
      type: actionTypes.ITEM,
      item: newArray
    })
    setItem("");
    setUm("");
    setPrice("");
    setInStock("");
  }
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddItem}
      >
        <TouchableWithoutFeedback style={styles.centeredView} >
          <View style={styles.modalView}>
          <TouchableWithoutFeedback
              onPress={()=> setModalAddItem(!modalAddItem)}
            >
              <View style={{ width: "100%", paddingLeft: 12 }}>
                <Ionicons name="backspace-outline" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
              <Text style={styles.label}>Create New Items</Text>
              <Text>add Item</Text>
              <View style={styles.input}>
              <Ionicons name="fast-food-outline" size={20} color="black" />
                <TextInput value={items} onChangeText={(e)=> setItem(e)} style={{width:"100%",marginLeft:10}} placeholder="item.."/>
              </View>
              <View style={styles.input}>
              <MaterialIcons name="category" size={20} color="black" />
                <TextInput value={um} onChangeText={(e) => setUm(e)} style={{width:"100%",marginLeft:10}} placeholder="U/M.."/>
              </View>
              <View style={styles.input}>
              <Feather name="dollar-sign" size={20} color="black" />
                <TextInput value={price} onChangeText={(e) => setPrice(e)} style={{width:"100%",marginLeft:5}} placeholder="price.."/>
              </View>
              <View style={styles.input}>
              <FontAwesome5 name="store" size={18} color="black" />
                <TextInput value={inStock}  onChangeText={(e) => setInStock(e)} style={{width:"100%",marginLeft:10}} placeholder="inStock.."/>
              </View>
              <View style={styles.btn}>
              <TouchableWithoutFeedback  onPress={() => {handleAddItem(),setModalAddItem(!modalAddItem)}}>
                <Text style={styles.btnText}>save</Text>
              </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 110,
    width:width,
    height:height,
    // backgroundColor: "red"

  },
  modalView: {
    marginTop: 70,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5,
    width:"100%",
    height:"100%",
  },
  form: {
    width:"100%",
    height:"100%",
    // backgroundColor:"red",
    // justifyContent:"center",
    alignItems:"center"
  },
  label:{
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 12,
  },
  input: {
  flexDirection: "row",
  width:"95%",
  paddingHorizontal: 10,
  marginTop: 12,
  borderBottomWidth:1,
  borderBottomColor: "#EEEE",
  // justifyContent: "center",
  alignItems:"center"
  
  },


  btn: {
    marginTop: 30,
    // borderWidth: 1,
    width: "90%",

  },
  btnText :{
    backgroundColor: "orange",
    borderRadius: 5,
    textAlign: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    color: "#FFFF"
  }


});

export default AddItem;