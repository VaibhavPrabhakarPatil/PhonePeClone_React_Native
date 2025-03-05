import { View, Text, StyleSheet, Pressable,Image, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const QrCodeScanner = ({navigation}) => {
  return (
    <>
        <StatusBar barStyle={'drak-content'}  hidden={false} />
        <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.subHeader}>
                <Pressable style={styles.backbtn} onPress={()=>{navigation.navigate('BottomNavigation')}}>
                    <Image source={require('../assets/backs.png')} style={styles.icon}/>
                </Pressable>
                <Text style={styles.scanText}>Scan & Pay</Text>
                <Pressable style={styles.backbtn}>
                    <Image source={require('../assets/que.png')} style={styles.icon}/>
                </Pressable>


            </View>
        </View>

        <View style={styles.optionHeader}>
            <Image source={require('../assets/gallery.png')} style={styles.icon}/>
            <Image source={require('../assets/flash.png')} style={[styles.icon,{marginRight:10, marginHorizontal:10}]}/>
        </View>

        <View style={styles.recentList}>
            <Text style={[styles.scanText ,{marginLeft:20, fontWeight:'600'}]}>Resents</Text>
            <FlatList
              horizontal
              contentContainerStyle={{marginBottom:20, marginTop:20}}
              showsHorizontalScrollIndicator={false}
              data={[1,1,1,1,1,1]}
              renderItem={({item,index})=>{
                return(
                    <View style={styles.recentIteamView}>
                        <Pressable style={styles.nameView} onPress={()=> {navigation.navigate("PayNow")}}>
                           <Text style={styles.nameChar}>{index==0?"V":index==2?"S":index==3?"M":index==4?"Y":"K"}</Text>
                        </Pressable>
                        <Text style={styles.name}>{"Vaibhav"}</Text>
                    </View>
                )
              }}
            />
        </View>

     </View>
    </>
  );
};

export default QrCodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  header:{
    width:'100%',
    height:90,
    backgroundColor:'#6839B3',
    justifyContent:'center'
  },
  subHeader:{
    width:"100%",
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    marginTop:20
  
  },
  backbtn:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
   },
  icon:{
    width:25,
    height:25,
    tintColor:'white'
  },
  scanText:{
     color:'white',
     fontSize:20
  },
  optionHeader:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:30

  },
  recentList:{
    position:'absolute',
    bottom:10,
  },
  nameView:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },
  recentIteamView:{
    marginLeft:23,
    alignItems:'center'
  },
  nameChar:{
    fontSize:30,
    fontWeight:'600',
    color:'black'
  },
  name:{
    marginTop:5,
    color:'white',
    fontWeight:'600',
    fontSize:14,
  }
});
