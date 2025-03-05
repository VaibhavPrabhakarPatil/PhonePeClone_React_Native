import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Succeful_Page({ navigation }) {
  const route = useRoute();
  const { amount } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image source={require('../assets/correct.png')} style={styles.logo} />
        <Text style={styles.textHeading}>
          Payment of ₹ {amount} to Vaibhav {'\n'}successful
        </Text>
      </View>
      <Pressable style={styles.doneButton} onPress={() => navigation.navigate('BottomNavigation')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#187a34',
    justifyContent: 'space-between', 
  },
  heading: {
    alignItems: 'center',
    marginTop: 200, 
  },
  logo: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 150,
  },
  textHeading: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center', 
    color: 'white', 
    fontWeight:'bold'
  },
  doneButton: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  doneButtonText: {
    color: '#187a34',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
