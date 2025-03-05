import { View, Text, StyleSheet  ,Image, TextInput, Pressable, FlatList, ScrollView} from "react-native";
import React from "react";
import CommonHeader from "./CommonHeader";

const History = () => {
    return (
        <View style={styles.container}>
            <CommonHeader />
            <View style={styles.searchBar}>
                <Image source={require('../assets/search.png')} style={styles.serch} />
                <TextInput placeholder= "Search By Name Number or UPI ID" style={styles.TextInput} />
           </View>
           <View style={styles.card}>
            <View style={styles.filterView}>
                
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={styles.dropdownbtn}>
                        <Text>Month</Text>
                        <Image source={require('../assets/down.png')} style={styles.icon}/>
                    </Pressable>
                    <Pressable style={[styles.dropdownbtn ,{marginLeft:15}]}>
                        <Text>Categories</Text>
                        <Image source={require('../assets/down.png')} style={styles.icon}/>
                    </Pressable>
                    </View>
                    <Pressable style={styles.dropdownbtn}>
                        <Text>Filter</Text>
                        <Image source={require('../assets/down.png')} style={styles.icon}/>
                    </Pressable>
                </View>
                 
                <FlatList contentContainerStyle={{marginTop:30}} data={[1,1,1,1,1]} renderItem={({item,index})=>{
                    return(
                      <View style={styles.transtionitem}>
                        <View>
                            <View style={styles.topLeftView}> 
                                <View style={styles.iconView}>
                                    <Image source={index%2==0? require('../assets/up.png'):require('../assets/left.png')} style={styles.iconto}/>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={styles.toPaid}>Paid To</Text>
                                    <Text style={styles.nameText}>Vaibhav Patil</Text>
                                </View>

                            </View>
                            <Text style={styles.time}>Yesterday</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.ammount}>{'₹ 10,000'}</Text>
                            <View style={styles.bankView}>
                              <Text style={[styles.time,{marginTop:0}]}>{index%2==0?'Debited From':'Credited Form'}</Text>
                              <Image source={require('../assets/hdfc.png')} style={styles.hdfc}/>
                            </View>
                        </View>

                      </View>  
                    )
                }}
                />
                

           </View>
        </View>
    );
}

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    searchBar: {
        width: '94%', 
        height: 45,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center', 
        // paddingHorizontal: 10,
        borderRadius:10,
        borderWidth:.5,
        borderColor:'#929292' ,
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15

    
    },
    serch: {
        width:18,
        height:18,
    },
    TextInput:{
        marginRight:120,
        marginLeft:10,
    },
    card:{
        width:'94%',
        backgroundColor:'white',
        marginTop:15,
        alignSelf:'center',
        borderRadius:10,
        shadowOpacity:1,
        shadowColor:'rgba(0,0,0,.5)',
         shadowOffset:{
            x:1,
            y:1
        }
    },
    filterView:{
        width:'90%',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        flexDirection:'row',
        alignSelf:'center'
    },
    dropdownbtn:{
        borderRadius:10,
        borderWidth:1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:5,
        paddingTop:5,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        marginLeft:10,
        width:8,
        height:8
    },
    transtionitem:{
        width:'94%',
        height:100,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    topLeftView:{
       flexDirection:'row',
       alignItems:'center' ,
       marginLeft:15
    },
    iconView:{
       width:36,
       height:36 ,
       backgroundColor:'#6839B3',
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center'
    },
    iconto:{
        width:16,
        height:16,
        tintColor:'white'

    },
    nameText:{
        fontSize:14,
        fontWeight:'600',
        color:'black'
    },
    toPaid:{
        color:'#929292'
    },
    time:{
        marginLeft:20,
        marginTop:10,
        color:'#929292'

    },
    ammount:{
        fontWeight:'700',
        fontSize:18,
    },
    bankView:{
      flexDirection:'row',
      marginTop:10  
    },
    hdfc:{
      width:20,
      height:20 ,
      marginLeft:15
    },
    rightView:{
     alignItems:'flex-end'
    }
});
