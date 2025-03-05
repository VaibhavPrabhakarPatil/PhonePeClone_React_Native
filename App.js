import { View,Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QrCodeScanner from "./Screen/QrCodeScanner";
import BottomNavigation from "./Navigation/BottomNavigation";
import PayNow from "./Screen/PayNow";
import UPI_Page from "./Screen/UPI_Page";
import Check_Blance from "./Screen/Check_Blance";
import Account_Click from "./Screen/Account_Click";
import Blance from "./Screen/Blance";
import Succeful_Page from "./Screen/Succeful_Page";
import Send_Money from "./Screen/Send_Money";
import SendMoney from "./Screen/Tocontactsend";


const Stack= createNativeStackNavigator()

const App =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="Qrcodepage" component={QrCodeScanner} options={{headerShown:false}}/>
                <Stack.Screen name="PayNow" component={PayNow} options={{headerShown:false}}/>
                <Stack.Screen name="UPI_Page" component={UPI_Page} options={{headerShown:false}}/>
                <Stack.Screen name="Check_Blance" component={Check_Blance} options={{headerShown:false}}/>
                <Stack.Screen name="Account_Click" component={Account_Click} options={{headerShown:false}}/>
                <Stack.Screen name="Blance" component={Blance} options={{headerShown:false}}/>
                <Stack.Screen name="Succeful_Page" component={Succeful_Page} options={{headerShown:false}}/>
                <Stack.Screen name="Send_Money" component={Send_Money} options={{headerShown:false}}/>
                <Stack.Screen name="SendMoney" component={SendMoney} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
       
    )
}

export default App