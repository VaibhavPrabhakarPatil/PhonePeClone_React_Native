import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Account_Click({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.row}>
          <View style={styles.LeftView}>
            <Pressable onPress={()=>{navigation.navigate('BottomNavigation')}}>
            <Image source={require('../assets/backs.png')} style={styles.icon} />
            </Pressable>
            <Text style={styles.Textheader}>Check Balance</Text>
          </View>
          <View style={styles.RightView}>
            <Image source={require('../assets/que.png')} style={styles.icon1} />
          </View>
        </View>
      </View>
      <View style={styles.AcDetais}> 
        <View style={styles.HeaddingDetais}>
          <Text style={styles.Text}>Check Balance</Text>
          <View style={styles.Detais}>
            <View style={styles.logoAndText}>
              <Image source={require('../assets/hdfc.png')} style={styles.logo}/>
              <Text style={styles.bankText}>HDFC BANK</Text>
            </View>
            <Pressable onPress={()=>{navigation.navigate('Check_Blance')}}>
            <Image source={require('../assets/next.png')} style={styles.backlogo}/>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  Header: {
    backgroundColor: '#6839B3',
    width: '100%',
    height: 80,
    justifyContent: 'center', 
    paddingHorizontal: 10, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  LeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white'
  },
  Textheader: {
    marginLeft: 20,
    fontSize: 20,
    color: 'white'
  },
  RightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    width: 20,
    height: 20,
    tintColor: 'white' 
  },
  AcDetais:{
    backgroundColor:'white',
    width:'94%',
    height:150,
    marginTop:10,
    alignSelf:'center',
    borderRadius:10,
  },
  HeaddingDetais:{
    marginTop:10,
    marginLeft:20,
    marginRight:10
  },
  Text:{
    fontSize:20,
    fontWeight:'700'
  },
  Detais:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20,
    justifyContent: 'space-between', 
  },
  logoAndText: {
    flexDirection: 'row', 
    alignItems: 'center',
    flex: 1,
  },
  logo:{
    width: 50,
    height: 50,
    marginRight: 10, 
  },
  bankText: {
    fontSize: 18,
    fontWeight: '600'
  },
  backlogo: {
    width: 20,
    height: 20,
  }
});
