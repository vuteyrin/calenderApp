import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Octicons } from '@expo/vector-icons';
const Carts = ({ months,id }) => {
  // console.log(months)
  return (
    <View key={id} style={styles.container}>
      <Text style={styles.title}>{months}</Text>
      <Octicons name="calendar" size={70} color="black" />
      <Text>2021</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    // textAlign: "center",
    width: screenWidth * 0.45,
    height: screenHeight / 5,
    backgroundColor: "#FFFFE0",
    margin: screenWidth *0.025,

    ///
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity: 0.57,
    // shadowRadius: 15.19,
    elevation: 22,
    position: "relative",
    // borderWidth: 1,
    borderRadius: 5,
  },
  calen: {
    // backgroundColor: "yellow",
    // width: "100%",
    // height: "100%"
    
   
  },
  title:{
    fontSize: 21,
    // marginTop: 30,
    // backgroundColor: "red"
  }
});

export default Carts;
