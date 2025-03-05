import { View, Text, StatusBar, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";

const CommonHeader = ({ navigation }) => {
    const [imageSize, setImageSize] = useState(40);

    const handleImagePress = () => {
        setImageSize(80);
        setTimeout(() => {
            setImageSize(40);
        }, 2000);
    };

    return (
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor="#6839B3" hidden={false} />

            <View style={styles.header}>
                <View style={styles.header2}>
                    <View style={styles.headerLeftView}>
                        <View>
                            <Pressable onPress={handleImagePress}>
                                <Image source={require('../assets/user.jpg')} style={[styles.user, { width: imageSize, height: imageSize }]} />
                            </Pressable>
                            <Image source={require('../assets/india.png')} style={styles.flag} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.Home}>Home </Text>
                                <Image source={require('../assets/down.png')} style={styles.down} />
                            </View>
                            <Text style={styles.address}>Kundane Varkhedi</Text>
                        </View>
                    </View>
                    <View style={styles.headerRightView}>
                        <Pressable onPress={() => navigation.navigate("Qrcodepage")}>
                            <Image source={require('../assets/scan.png')} style={styles.scanImage} />
                        </Pressable>
                        <Image source={require('../assets/bell.png')} style={[styles.scanImage, { marginLeft: 10, marginRight: 10 }]} />
                        <Image source={require('../assets/que.png')} style={styles.scanImage} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CommonHeader;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        backgroundColor: "#6839B3",
        justifyContent: 'flex-end'
    },
    header2: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    headerLeftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        borderRadius: 50
    },
    flag: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: -3,
        bottom: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    Home: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    down: {
        width: 16,
        height: 16,
        tintColor: 'white',
        marginLeft: 3
    },
    address: {
        color: 'white',
        fontSize: 12,
        marginTop: 2
    },
    headerRightView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scanImage: {
        width: 22,
        height: 22,
        tintColor: 'white'
    },
});
