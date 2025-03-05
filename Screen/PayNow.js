import { View, Text, StyleSheet, Pressable, Image, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const PayNow = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} hidden={false} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
            <Pressable style={styles.backbtn} onPress={() => { navigation.navigate('Qrcodepage') }}>
              <Image source={require('../assets/backs.png')} style={styles.icon} />
            </Pressable>
            <Text style={styles.scanText}>Pay</Text>
            <Pressable style={styles.backbtn}>
              <Image source={require('../assets/que.png')} style={styles.icon} />
            </Pressable>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.TopView}>
            <View style={styles.leftView}>
              <View style={styles.nameView}>
                <Text style={styles.namchar}>VP</Text>
              </View>
              <View>
                <Text style={styles.nameText1}>Vaibhav Patil</Text>
                <Text style={styles.UplId}>960754@ybl</Text>
              </View>
            </View>
            <Text style={styles.viewHistory}>View History</Text>
          </View>
          <View style={styles.amountView}>
            <Image source={require('../assets/rupee.png')} style={[styles.icon, { tintColor: "black", width: 15, height: 20, fontSize: 25, fontWeight: '600' }]} />
            <TextInput
              placeholderTextColor={"#929292"}
              keyboardType='number-pad'
              placeholder="Enter Amount"
              style={styles.Input}
              value={amount}
              autoFocus={true}
              onChangeText={txt => setAmount(txt)}
            />
          </View>
          <View style={styles.amountView}>
            <TextInput
              placeholderTextColor={"#929292"}
              keyboardType='name-phone-pad'
              placeholder="Add a Message (optional)"
              style={[styles.Input, { fontSize: 14 }]}
            />
          </View>
        </View>
        <Pressable
          style={[styles.procedTopay, { backgroundColor: amount !== '' ? '#6839B3' : '#929292' }]}
          onPress={toggleModal}
        >
          <Text style={styles.PayNow}>Pay Now</Text>
        </Pressable>

        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={toggleModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalText}>Total Payment</Text>
                <View style={styles.paymentRow}>
                  <Image source={require('../assets/rupee.png')} style={styles.paymentIcon} />
                  <Text style={styles.paymentAmountText}>{amount}</Text>
                </View>
                <Pressable style={styles.closeButton} onPress={toggleModal}>
                  {/* <Image source={require('../assets/close.png')} style={styles.closeIcon} /> */}
                </Pressable>
              </View>
              
              <View style={styles.separator} />
              <View style={styles.bankView}>
                <View style={styles.bankLeftView}>
                  <Image source={require('../assets/hdfc.png')} style={styles.logoBank}/>
                  <View style={{marginLeft:15}}>
                    <View style={styles.upi_View}>
                    <Text>{'HDFC BANK   ******430'}</Text>
                    <Image source={require('../assets/visa.png')} style={styles.logoBank}/>
                    </View>
                    <Text style={styles.bankAccount}>{'Bank  Account'}</Text>
                  </View>
                </View>
                <View style={styles.bankRightView}>
                <Text style={styles.paymentAmountText}>{'₹ '+amount}</Text>
                 <Image source={require('../assets/correct.png')} style={[styles.logoBank,{width:18,marginRight:10}]}/>
               </View>
                 </View>
                 <Pressable style={styles.ConformPayment} onPress={()=>{ navigation.navigate('UPI_Page',{amount})}}>
                 <Text style={[styles.paymentAmountText,{color:'white'}]}>{'Pay ₹ '+amount}</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
      </View>
    </>
  );
};

export default PayNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#6839B3',
    justifyContent: 'center',
  },
  subHeader: {
    width: "100%",
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  backbtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  scanText: {
    color: 'white',
    fontSize: 20,
  },
  cardView: {
    width: "94%",
    height: 200,
    alignSelf: 'center',
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 5,
  },
  TopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameView: {
    width: 40,
    height: 40,
    backgroundColor: '#929292',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  namchar: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  UplId: {
    fontSize: 14,
    color: '#929292 ',
    marginLeft: 10,
  },
  nameText1: {
    fontSize: 18,
    color: '#000 ',
    marginLeft: 10,
  },
  viewHistory: {
    color: '#6839B3',
    fontSize: 18,
    fontWeight: '600',
  },
  amountView: {
    width: "94%",
    height: 45,
    borderWidth: .5,
    alignSelf: 'center',
    borderColor: "#929292",
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  Input: {
    fontSize: 25,
    marginLeft: 15,
    fontWeight: '600',
  },
  procedTopay: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  PayNow: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    height: 230,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    padding: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#929292',
    marginVertical: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft:100
  },
  paymentAmountText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 5,
  },
  paymentIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  bankView:{
    width:'100%',
    height:60,
    backgroundColor:'#f2f2f2',
    alignSelf:'center',
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bankLeftView:{
    flexDirection:'row',
    alignItems:'center',
  },
  bankRightView:{
    flexDirection:'row',
    alignItems:'center',
  },
  logoBank:{
    width:30,
    height:30,
    marginLeft:10,
    resizeMode:'contain'
  },
  upi_View:{
    flexDirection:'row',
     alignItems:'center'
  },
  bankAccount:{
    color:'#929292',
    fontSize:13,
 },
 ConformPayment:{
   width:'94%',
   height:40,
   backgroundColor:'#6839B3',
   borderRadius:30,
   marginTop:20,
   marginBottom:20,
   alignSelf:'center',
   justifyContent:'center',
   alignItems:'center'
 }

});
