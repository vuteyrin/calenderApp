import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  Alert
} from "react-native";
import Carts from "../components/Home/Carts";
import Video from "react-native-video";
import { data } from "../data/Data";
import { months } from "../data/CalendarData";
import { useStateValue } from "../context/StateProvider";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { addCustomer } from "../function/Function";
import { Button } from "react-native-elements";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Home = ({navigation,route}) => {
  const [{ language }, dispatch] = useStateValue();
  // const handleGetData = () =>{
  //   try{
  //      db.collection("customers").get().then((doc)=>{
  //        doc.forEach((doc) => {
  //          console.log(doc.data())
  //      });
  //    })
  //     }catch(e){
  //      console.error(e);
  //     }
  // }

  const renderItem = ({ item }) => (
    <TouchableHighlight 
    onPress={()=> navigation.navigate("DateDetail")}
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    >
        <Carts id={item.id} months={item.months} />
    </TouchableHighlight>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="click add" onPress={() => addCustomer()} /> */}
      <FlatList
        data={months}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
});

export default Home;
