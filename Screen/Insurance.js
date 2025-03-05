import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import React from "react";
import CommonHeader from "./CommonHeader";

const Insurance = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <View style={styles.investmentIdeas}>
        <View style={styles.quotesView}>
          <Text style={styles.heading}>Vehicle Insurance</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Enter Vehicle Number"
              placeholderTextColor="#929292"
            />
            <Pressable style={styles.searchButton}>
              <Text style={styles.buttonText}>View Quotes</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.heading}>Motor And Travel</Text>
        <View style={styles.moneyTransfarSection}>
          <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/bycicle.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"Bike"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/sedan.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"Car"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/plane.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 14 }]}>
                {"Plane"}
              </Text>
            </Pressable>
        </View>
        </View>
     </View>
     <View style={styles.investmentIdeas}>
        
        <Text style={styles.heading}>Heath And Life</Text>
        <View style={styles.moneyTransfarSection}>
          <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/save.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"Team Life"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/accident.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"Accident"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/Inscurnce.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 11 }]}>
                {"Inscurnce"}
              </Text>
            </Pressable>
            
          </View>
        </View>
     </View>
   
    </View>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  searchBar: {
    width: "94%",
    height: 45,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "space-between", // Ensures space between input and button
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#929292",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 10, // Add padding for right button
  },
  input: {
    flex: 1,
    height: "100%",
    color: "black",
  },
  searchButton: {
    backgroundColor: "#6839B3",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  quotesView:{
    width:'94%',
    height:120,
    backgroundColor:'#bad1f7',
    alignSelf:'center',
    marginTop:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 15,
  },
  investmentIdeas: {
    width: "94%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
  },
  moneyTransfarSection: {
    width: "100%",
    height: 110,
    justifyContent: "center",
  },
  transfarView: {
    width: "100%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
  },
  trasferbtn: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  transferCart: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#6839B3",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  transferText: {
    marginTop: 5,
    textAlign: "center",
  },
});
