import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/header/Header'
import { dateForMonday,dateForTuesday,
 dateForWendesday,dateForThursday,
 dateForFriday,dateForSatursday,dateForSunday } from '../data/CalendarData'
import { week } from '../data/CalendarData'
const dateDetial = ({navigation,route}) => {
 // console.log(week)
 return (
  <View style={styles.container}>
   <View style={styles.containerHeader}>
    {
     week.map(item=>{
      return(
       <View style={styles.tableHeader}>
         <View style={styles.th}>
          <Text style={styles.headerText}>{item.day}</Text>
         </View>
       </View>
      ) 
    })

   }
   </View>
  <View style={styles.containerBody}>
  <ScrollView>
    {
        dateForSunday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
     <ScrollView>
    {
        dateForMonday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
    <ScrollView>
    {
        dateForTuesday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
    <ScrollView>
    {
        dateForWendesday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
    <ScrollView>
    {
        dateForThursday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
    <ScrollView>
    {
        dateForFriday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
    <ScrollView>
    {
        dateForSatursday.map(item=>{
         return(
          <View style={styles.tableBody}>
            <Text>{item.day}</Text>
          </View>
         ) 
       })
    }
    </ScrollView>
  
  </View>
 
  </View>
 )
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
 container :{
  flex: 1,
  // width: 500,

 },
 containerHeader: {
  flexDirection: "row",
  
 },
 tableHeader:{
  flex: 1,
  backgroundColor: "#FFD700",
  justifyContent: "space-between",
  // alignItems: 'center'
  // borderWidth:1,
  paddingVertical: 5
 },
 th: {
  // flex: 1,
  // backgroundColor: "#FFD700",
  alignItems: 'center',
  // paddingVertical: 100
  
 },





 containerBody: {
  flexDirection: "row",
  justifyContent: "center",
 },
 tableBody: {
  // flex: 1,
  backgroundColor:"yellow",
  height: 50,
  width: "100%",
 alignItems: "center",
 justifyContent: "center",
  borderWidth: 1,
 },
 // td: {
 //  backgroundColor: "#FFFF",

 //  alignItems: 'center',
 //  paddingVertical: 5
 // },
 // BodyText: {
  

 //  backgroundColor: "#FFFF",
 //  borderWidth: 1,

 // }
 
})

export default dateDetial
