export const language = false;
import { View, Text,AsyncStorage } from "react-native";
import {db} from "../api/firebase"
export const setLocalstorage =  async (key,value) =>{
    await AsyncStorage.setItem(key,JSON.stringify(value));
}

const customber = db.collection('customers');
// get data 
export const getFood = async() => {
  const Foods = await customber.then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    });
  });
  }
// add data
export const addCustomer = async() => {
  const addFoods = await customber.add({
    name: "Baby",
    price: 10,
    address: "bmc",
    remark: "test bmc te bro",
    tel: "232323232"
  })
  .then((querySnapshot) => {
    console.log(querySnapshot.id)
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}
// detele data
export const deleteFood = async () => {
  const deteteFood  = await customber.doc("6abPn0V2K3f8PN5pkXXK").delete()
  .then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}
// update data
export const updateFood = async () => {
  const updateFood  = await customber.doc("Byzz2YPfXkcDB3mWl88d").update(
    {
      name: "GOOD PM",
      price: "12",
    }
  )
  .then(() => {
      console.log("Document successfully update!");
  }).catch((error) => {
      console.error("Error updateing document: ", error);
  });
}