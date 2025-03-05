import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

export default function Blance({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderView}>
        <Image source={require('../assets/correct.png')} style={styles.logo} />
        <Text style={styles.TextHadding}>
          {'Available Balance Fetched\nSuccessfully'}
        </Text>
      </View>
      <View style={styles.AmountDetails}>
        <Image source={require('../assets/hdfc.png')} style={styles.Image} />
        <Text style={styles.textHeading}>HDFC BANK - 0490</Text>
      </View>
      <View style={styles.amountView}>
        <Text style={styles.availableBalanceText}>Available Balance</Text>
        <Text style={styles.amount}>₹ 3000.21</Text>
      </View>
      <View style={styles.BtnView}>
        <Pressable style={styles.doneButton} onPress={() => navigation.navigate('BottomNavigation')}>
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  HeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  logo: {
    width: 100,
    height: 100,
  },
  TextHadding: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  AmountDetails: {
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Image: {
    width: 30,
    height: 30,
  },
  textHeading: {
    marginLeft: 10,
    fontWeight: '500',
  },
  amountView: {
    alignSelf: 'center',
    marginTop: 10,
  },
  availableBalanceText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  amount: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold', 
  },
  BtnView: {
    flex: 1,
    justifyContent: 'flex-end',
    // paddingHorizontal: 20, 
    // paddingBottom: 20, 
  },
  doneButton: {
    width: '100%', 
    height:50,
    backgroundColor: 'white', 
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
