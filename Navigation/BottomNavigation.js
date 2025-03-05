import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Home from '../Screen/Home'
import Stores from '../Screen/Stores';
import Insurance from '../Screen/Insurance';
import Wealth from '../Screen/Wealth';
import History from '../Screen/History';

const BottomNavigation=({navigation}) =>{
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? <Home navigation={navigation}/> : 
       selectedTab === 1 ? <Stores /> : 
       selectedTab === 2 ? <Insurance /> : 
       selectedTab === 3 ? <Wealth /> : 
       selectedTab === 4 ? <History /> : null}

      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <Pressable style={styles.bottomBtn} onPress={() => setSelectedTab(0)}>
            <View style={[styles.tabIconBg, { backgroundColor: selectedTab === 0 ? '#6839B3' : '#fff' }]}>
              <Image source={require('../assets/Home.png')} style={[styles.tabIcon, { tintColor: selectedTab === 0 ? 'white' : 'black' }]} />
            </View>
            <Text style={{ color: selectedTab === 0 ? '#6839B3' : 'black' }}>Home</Text>
          </Pressable>

          <Pressable style={styles.bottomBtn} onPress={() => setSelectedTab(1)}>
            <View style={[styles.tabIconBg, { backgroundColor: selectedTab === 1 ? '#6839B3' : '#fff' }]}>
              <Image source={require('../assets/Store.png')} style={[styles.tabIcon, { tintColor: selectedTab === 1 ? 'white' : 'black' }]} />
            </View>
            <Text style={{ color: selectedTab === 1 ? '#6839B3' : 'black' }}>Store</Text>
          </Pressable>

          <Pressable style={styles.bottomBtn} onPress={() => setSelectedTab(2)}>
            <View style={[styles.tabIconBg, { backgroundColor: selectedTab === 2 ? '#6839B3' : '#fff' }]}>
              <Image source={require('../assets/Inscurnce.png')} style={[styles.tabIcon, { tintColor: selectedTab === 2 ? 'white' : 'black' }]} />
            </View>
            <Text style={{ color: selectedTab === 2 ? '#6839B3' : 'black' }}>Insurance</Text>
          </Pressable>

          <Pressable style={styles.bottomBtn} onPress={() => setSelectedTab(3)}>
            <View style={[styles.tabIconBg, { backgroundColor: selectedTab === 3 ? '#6839B3' : '#fff' }]}>
              <Image source={require('../assets/rupee.png')} style={[styles.tabIcon, { tintColor: selectedTab === 3 ? 'white' : 'black' }]} />
            </View>
            <Text style={{ color: selectedTab === 3 ? '#6839B3' : 'black' }}>Wealth</Text>
          </Pressable>

          <Pressable style={styles.bottomBtn} onPress={() => setSelectedTab(4)}>
            <View style={[styles.tabIconBg, { backgroundColor: selectedTab === 4 ? '#6839B3' : '#fff' }]}>
              <Image source={require('../assets/history.png')} style={[styles.tabIcon, { tintColor: selectedTab === 4 ? 'white' : 'black' }]} />
            </View>
            <Text style={{ color: selectedTab === 4 ? '#6839B3' : 'black' }}>History</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default  BottomNavigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  bottomNav2: {
    width: '100%',
    height: 55,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomBtn: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  tabIconBg: {
    width: 29,
    height: 29,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
