import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const contacts = [
  { id: '1', name: 'John Doe', phone: '1234567890' },
  { id: '2', name: 'Jane Smith', phone: '9876543210' },
  { id: '3', name: 'Alice Brown', phone: '5555555555' },
  { id: '4', name: 'Mahesh', phone: '1234560890' },
  { id: '5', name: 'Samir', phone: '0076543210' },
  { id: '6', name: 'Prashant', phone: '8855555555' },
  { id: '7', name: 'Ganesh', phone: '1234560890' },
  { id: '8', name: 'Ashay', phone: '0076543210' },
  { id: '9', name: 'Pawan', phone: '8855555555' },
];

export default function ContactList() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePressContact = (contact) => {
    navigation.navigate('SendMoney', { contact }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.imageicon}>
          <Image source={require('../assets/back1.png')} style={styles.icon} />
          <View style={styles.rightIcons}>
            <Image source={require('../assets/reload.png')} style={styles.icon} />
            <Image source={require('../assets/que.png')} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.TextHeadding}>Send Money</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder="Enter Your Mobile Number"
          placeholderTextColor="gray" 
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <FlatList
        style={styles.contactListContainer}
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactItem} 
            onPress={() => handlePressContact(item)} 
          >
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Header: {
    backgroundColor: '#6839B3',
    height: 170,
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  imageicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
    tintColor: 'white',
  },
  TextHeadding: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
    fontWeight: '600',
  },
  inputText: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    color: '#333',
    backgroundColor: 'white',
    borderRadius: 12,
    fontSize: 16,
  },
  
  contactListContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contactItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contactName: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  contactPhone: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});
