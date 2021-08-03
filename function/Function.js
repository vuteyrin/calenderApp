export const language = false;
import { View, Text,AsyncStorage } from "react-native";
export const setLocalstorage =  async (key,value) =>{
    await AsyncStorage.setItem(key,JSON.stringify(value));
}