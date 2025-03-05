import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";

const Check_Blance = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (pin.length === 4) {
      navigation.navigate('Blance');
    } else {
      alert("Please enter a 4-digit UPI PIN");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Pressable onPress={() => { navigation.navigate('Account_Click') }}>
            <Text style={{ marginLeft: 20, fontSize: 20 }}>CANCEL</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.topView}>
        <View>
          <Text style={styles.BankName}>HDFC BANK</Text>
          <Text style={styles.account}>XXXXXXX430</Text>
        </View>
        <Image source={require('../assets/upi.png')} style={styles.logo} />
      </View>

      <View style={styles.SecondView}>
        <View>
          <Text>To :</Text>
          <Text>Sending :</Text>
        </View>
        <View style={styles.SecondRightView}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>960754@ybl</Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Check Balance</Text>
        </View>
      </View>
      <Text style={styles.title}>ENTER 4-DIGIT UPI PIN</Text>

      <View style={styles.pinView}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              borderWidth: 0.5,
              marginLeft: 20,
              backgroundColor: pin.length > index ? 'black' : 'white'
            }}
          />
        ))}
      </View>
      
      <View style={styles.Numpad}>
        {[...Array(3)].map((_, row) => (
          <View key={row} style={{ flexDirection: 'row', width: '100%' }}>
            {[...Array(3)].map((_, col) => {
              const number = row * 3 + col + 1;
              return (
                <Pressable
                  key={number}
                  style={styles.numberpadbtn}
                  onPress={() => {
                    if (pin.length < 4) {
                      setPin(pin + number.toString());
                    }
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 25 }}>{number}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Pressable
            style={styles.numberpadbtn}
            onPress={() => {
              let newPin = pin.substring(0, pin.length - 1);
              setPin(newPin);
            }}
          >
            <Image source={require('../assets/clear.png')} style={styles.icon} />
          </Pressable>
          <Pressable
            style={styles.numberpadbtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '0');
              }
            }}
          >
            <Text style={{ color: 'black', fontSize: 25 }}>0</Text>
          </Pressable>
          <Pressable style={styles.numberpadbtn} onPress={handleSubmit}>
            <Text style={{ color: 'black', fontSize: 20 }}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Check_Blance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 80,
    justifyContent: 'flex-end',
  },
  subHeader: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBlockColor: '#929292'
  },
  Numpad: {
    width: '100%',
    position: 'absolute',
    bottom: 30
  },
  icon: {
    width: 23,
    height: 23,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  BankName: {
    fontSize: 14,
    fontWeight: '600'
  },
  account: {
    fontSize: 18,
    fontWeight: '600'
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  SecondView: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#b3b3b3",
    flexDirection: 'row',
    alignItems: 'center'
  },
  SecondRightView: {
    alignItems: 'flex-end'
  },
  title: {
    alignSelf: 'center',
    marginTop: 70,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15
  },
  pinView: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  numberpadbtn: {
    width: '33.3%',
    height: 45,
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
