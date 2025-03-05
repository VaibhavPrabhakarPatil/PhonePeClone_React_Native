import { View, Text, StyleSheet ,Image, Pressable, ScrollView} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "./CommonHeader";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View>
         <CommonHeader navigation={navigation}/>
      </View>
     
      <ScrollView>
      <View style={styles.updateCart}>
        <View style={styles.updateTopView}>
            <Image source={require('../assets/phonepe.png')} style={styles.logo}/>
        <View>
            <Text style={styles.updateTitle}>Link UPI Number To PhonePe</Text>
            <Text style={styles.updateMsg}>Recive payment from any app to your bank account via PhonePe</Text>

        </View>
        </View>

        <View style={styles.updatebtnView}>
            <Text style={styles.laterbtn}> LEARN MORE </Text>

           <Pressable style={styles.Linkbtn}>
             <Text  style={styles.LinkText}> LINK TO PHONEPE </Text>
           </Pressable>         
        </View>

      </View>
      <Image source={require('../assets/banner.png')} style={styles.banner}/>
      <View style= {styles.moneyTransfarSection}>
        <Text style={styles.heading}>Money Trasfers</Text>
        <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn} onPress={()=>{navigation.navigate('Send_Money')}}>
                <View style={styles.transferCart}>
                  <Image source={require('../assets/user.png')} style={styles.icons}/>
                </View>
                <Text style={styles.transferText}>{'To Mobile\n  Number'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View style={styles.transferCart}>
                <Image source={require('../assets/bank.png')} style={styles.icons}/>
               </View>
               <Text style={styles.transferText}>{'To Bank/\n  UPI ID'}</Text>
              </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View style={styles.transferCart}>
                <Image source={require('../assets/reload.png')} style={styles.icons}/>
                </View>
                <Text style={styles.transferText}>{'To Self\nAccount'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn} onPress={()=>{navigation.navigate('Account_Click')}}>
                <View style={styles.transferCart}>
                <Image source={require('../assets/bankb.png')} style={styles.icons}/>
                </View>
                <Text style={styles.transferText}>{'Check Bank \n    Balance'}</Text>
            </Pressable>
        </View>

      </View>
      <View style={styles.otherOptions}>
        <Pressable style={styles.otherOptionsbtn}>
          <Image source={require('../assets/wallet.png')} style={styles.icons1}/>
          <Text style={styles.otherOptionsText}>PhonePe Wallet</Text>
        </Pressable>
        <Pressable style={styles.otherOptionsbtn}>
        <Image source={require('../assets/gift.png')} style={styles.icons1}/>
          <Text style={styles.otherOptionsText}>Rewards</Text>
        </Pressable>
        <Pressable style={styles.otherOptionsbtn}>
        <Image source={require('../assets/bullhorn.png')} style={styles.icons1} />
          <Text style={styles.otherOptionsText}>Refer & 100</Text>
        </Pressable>
       </View>
       <View style={styles.RechargeBils}>
          <Text style={styles.heading}>Recharge & Pay Bills</Text>
          <View style= {styles.moneyTransfarSection}>
        <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
                <View style={[styles.transferCart,{backgroundColor:'white'}]}>
                  <Image source={require('../assets/mobile.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40}]}/>
                </View>
                <Text  style={[styles.transferText,{marginTop:10}]}>{'  Mobile\nRecharge'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/loan.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40}]}/>
               </View>
               <Text  style={[styles.transferText,{marginTop:10}]}>{'      Loan\nRepayment'}</Text>
              </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/credit-cart.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40}]}/>
                </View>
                <Text style={[styles.transferText,{marginTop:14}]}>{'Credit Card\n  Payment'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/income.png')}style={[styles.icons,{tintColor:'purple', width:40,height:40, marginTop:-40}]}/>
                </View>
                <Text style={[styles.transferText,{marginTop:-5}]}>{'Rent'}</Text>
            </Pressable>
          </View>
        </View>
      <View style= {[styles.moneyTransfarSection,{marginTop:-15}]}>
        <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
                <View style={[styles.transferCart,{backgroundColor:'white'}]}>
                  <Image source={require('../assets/light.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40, marginTop:-33}]}/>
                </View>
                <Text  style={[styles.transferText,{marginTop:-10}]}>{' Electricity'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/toll.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40}]}/>
               </View>
               <Text  style={[styles.transferText,{marginTop:10}]}>{' FASTag\nRecharge'}</Text>
              </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/gas.png')} style={[styles.icons,{tintColor:'purple', width:40,height:40, marginTop:9}]}/>
                </View>
                <Text style={[styles.transferText,{marginTop:14}]}>{'  Book a\n Cylinder'}</Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
                <View  style={[styles.transferCart,{backgroundColor:'white'}]}>
                <Image source={require('../assets/signal.png')}style={[styles.icons,{tintColor:'purple', width:40,height:40, marginTop:-15}]}/>
                </View>
                <Text style={[styles.transferText,{marginTop:2}]}>{'DTH'}</Text>
            </Pressable>
           </View>
        </View> 
      </View>
       </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", 
  },
updateCart:{
    width:'90%',
    height:100,
    borderRadius:10,
    alignSelf:'center',
    marginTop:10,
    shadowRadius:10,
    shadowColor:'rgba(0,0,0,.5)',
    backgroundColor:'white',
    backgroundColor:'#f2f2f2',
    shadowOffset:{x:0,y:1}
},

updateCart:{
    width:'94%',
    // height:130,
    borderRadius:5,
    alignSelf:'center',
    marginTop:10,
    backgroundColor:'white'
},
updateTopView:{
   flexDirection:'row',
   width:'100%' ,
   paddingLeft:15,
   paddingRight:15,
   marginTop:20
},
logo:{
    width:30,
    height:30,
},
updateTitle:{
   fontSize:15 ,
   fontWeight:'700',
   marginLeft:10

},
updateMsg:{
    fontSize:14,
    width:'70%',
    marginLeft:10,
},
updatebtnView:{
    alignSelf:'flex-end',
    flexDirection:'row',
    marginTop:25,
    marginBottom:15,
    alignItems:'center',
    marginHorizontal:10
},
Linkbtn:{
    backgroundColor:'#6839B3',
    paddingBottom:7,
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:20,
    marginLeft:15,
},
laterbtn:{
    color:'#6839B3',
    fontWeight:'600',
    fontSize:15
},
LinkText:{
    color:'white',
    fontWeight:'600',
    fontSize:15
},
banner:{
    width:'94%',
    height:100,
    alignSelf:'center',
    marginTop:20,
    borderRadius:10
},
moneyTransfarSection:{
    width:"94%",
    height:130,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:15,
    borderRadius:10
},
heading:{
    fontSize:16,
    fontWeight:'600',
    marginLeft:15,
    marginTop:15,
},
transfarView:{
    width:"100%",
    height:80,
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    marginTop:8,

},
trasferbtn:{
    width:"25%",
    justifyContent:'center',
    alignItems:'center'
},
transferCart:{
    width:36,
    height:36,
    borderRadius:10,
    backgroundColor:'#6839B3',
    justifyContent:'center',
    alignItems:'center'
},

icons:{
  width:25,
  height:25,
  tintColor:'white'
},
icons1:{
    width:25,
    height:25,
    tintColor:'black'
  },
  
transferText:{
    marginTop:5
},
otherOptions:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'94%',
    marginTop:15,
    alignSelf:'center',

},
otherOptionsbtn:{
    width:'32%',
    height:60,
    backgroundColor:'white',
    borderRadius:18,
    justifyContent:'center',
    alignItems:'center'
},
otherOptionsText:{
    color:'black',
    fontWeight:'600',
    marginTop:10

},
RechargeBils:{
    backgroundColor:"white",
    borderRadius:5,
    marginTop:15,
    alignSelf:'center',
    height:350,
    width:'94%'
}


});
