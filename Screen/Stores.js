import { View,Text  , StyleSheet,Image, TextInput, FlatList, Pressable, ScrollView} from "react-native";
import React from "react";
import CommonHeader from "./CommonHeader";



const Stores=()=>{
    return(
        <View style={styles.container}>
            <CommonHeader/>
            <ScrollView>
            <View style={styles.serchBox}>
               <Image source={require('../assets/search.png')}  style={styles.serchIcon}/>
               <TextInput placeholder="Search by store name or phone Number" style={styles.TextInputPla}/>
               {/* <Text style={styles.TextInputPla}>Search by store name or phone Number</Text> */}
            </View>
            <FlatList 
             data={[1,1,1,1,1]}
             renderItem={({item,index})=>{
               return(
                <View style={styles.shopItem}>
                    <Text style={styles.transcationTime}>Last Paid ₹50 , 3 months ago  </Text>
                    <View style={styles.shopDetails}>
                        <View style={styles.leftSection}>
                            <Image source={require('../assets/shop.jpeg')} style={styles.shopIcon}/>
                           <View style={styles.shopNameView}>
                              <Text>Dmart Store</Text>
                              <View style={styles.shopRatting}>
                                <Image source={require('../assets/star.png')} style={styles.ratting}/>
                                  <Text style={styles.rettingCount}>4.4</Text>
                                  <Text style={[styles.rettingCount,{marginLeft:20}]}>50 m</Text>
                                  <Text style={[styles.rettingCount,{marginLeft:20}]}>Closes at 10:00 Pm</Text>
                              </View>
                           </View>
                        </View>
                    </View>
                  <Pressable style={styles.PayNowbtn}>
                     <Image source={require('../assets/up.png')} style={styles.payNowIcon}/>
                     <Text style={styles.PayNowbtnText}>Pay Now</Text>
                  </Pressable>
                </View>
               ) 
             }}
            />
            <View style={styles.categryCart}>
            <Text style={styles.heading}>Popular Categories</Text>
               <FlatList
               numColumns={4}
               contentContainerStyle={{marginTop:20}}
               data={[
                {
                    icon:require('../assets/shopping.png'),
                    title:"Kirana & \n General Stores"
                },
                {
                    icon:require('../assets/healthy.png'),
                    title:"Fruite & \nVegetables"
                },
                {
                    icon:require('../assets/medicine.png'),
                    title:"Pharmacy"
                },
                {
                    icon:require('../assets/barbecue.png'),
                    title:"Meat Shop"
                },
                {
                    icon:require('../assets/doctor.png'),
                    title:"Doctor & \n Path labs"
                },
                {
                    icon:require('../assets/healthy.png'),
                    title:"Fruite & \nVegetables"
                },
                {
                    icon:require('../assets/metrial.png'),
                    title:"Stationery"
                },
                {
                    icon:require('../assets/drink.png'),
                    title:"Food\n Beverages"
                },
               ]}

               renderItem={({item,index})=>{
                 return(
                    <Pressable style={styles.catgoryItem}>
                        <Image source={item.icon} style={styles.categryIcon}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </Pressable>
                 );
               }}
               />
            </View>
            </ScrollView>
        </View>
    )
}

export default Stores;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    serchBox:{
        width:'90%',
        height:45,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:10,
        borderRadius:30,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:10,

    },
    serchIcon:{
        width:18,
        height:18
    },
    TextInputPla:{
        color:'#9e9e9e',
        marginLeft:15,
        fontSize:15
    },
    shopItem:{
        width:'94%',
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:20,
        padding:10,
    },
    transcationTime:{
        color:'#9e9e9e',
        fontSize:14
    },
    shopDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    leftSection:{
        flexDirection:'row',
        alignItems:'center'
    },
    shopIcon:{
        width:40,
        height:40,
        borderRadius:20
    },
    shopNameView:{
        marginLeft:10
    },
    shopRatting:{
        flexDirection:'row',
        alignItems:'center',
    },
    ratting:{
        width:15,
        height:15,
        marginTop:4,
    },
    rettingCount:{
        color:'9e9e9e',
        marginLeft:3,
        marginTop:4
    },
    PayNowbtn:{
        width:'96%',
        height:30,
        alignSelf:'center',
        borderRadius:30,
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    payNowIcon:{
        width:10,
        height:10,
        tintColor:'purple'

    },
    PayNowbtnText:{
       color:'purple',
       marginLeft:10 
    },
    categryCart:{
        width:'94%',
        height:250,
        alignSelf:'center',
        backgroundColor:'white',
        marginTop:10,
        marginBottom:100
    },
    heading:{
        fontSize:16,
        fontWeight:'600',
        marginLeft:15,
        marginTop:15,
    },
    catgoryItem:{
      width:"25%",
      alignItems:'center',
      marginTop:15
    },
    categryIcon:{
        width:30,
        height:30,
        tintColor:'purple'
    },
    title:{
        fontSize:12,
        textAlign:'center',
        marginTop:5
    }
    



})