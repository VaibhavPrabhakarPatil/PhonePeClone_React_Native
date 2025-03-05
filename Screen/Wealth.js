import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import React from "react";
import CommonHeader from "./CommonHeader";

const Wealth = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <View style={styles.searchBar}>
        <Image source={require("../assets/search.png")} style={styles.serch} />
        <TextInput placeholder="Search Mutual Funds" style={styles.TextInput} />
      </View>
      <View style={styles.sipView}>
        <View>
          <Text style={styles.siptittle}>Create Wealth With SIP</Text>
          <Text style={styles.desctittle}>
            {"6 Cr+ SIP Investments Every Month"}
          </Text>
          <Pressable style={styles.startsipbtn}>
            <Text style={styles.btnText}>START A SIP</Text>
            <Image source={require("../assets/next.png")} style={styles.sipIcon} />
          </Pressable>
        </View>
        <Image source={require("../assets/sip.png")} style={styles.sipImage} />
      </View>
      <View style={styles.investmentIdeas}>
        <Text style={styles.heading}>Investment Ideas</Text>
        <View style={styles.moneyTransfarSection}>
          <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/invest.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {" Best\nSIP Funds"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/save.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {" Better\n Than FD"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/investment.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 14 }]}>
                {"  Trending \n Themes"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/income.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40, marginTop: -40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: -5 }]}>
                {"Rent"}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.moneyTransfarSection}>
          <View style={styles.transfarView}>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/gold.png")}
                  style={[styles.icons, { tintColor: "purple", width: 50, height: 50 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"Gold"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/growth.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 3 }]}>
                {"Top \n Companies"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/discount.png")}
                  style={[styles.icons, { tintColor: "purple", width: 40, height: 40 }]}
                />
              </View>
              <Text style={[styles.transferText, { marginTop: 10 }]}>
                {"   Tax Seving \n Funds"}
              </Text>
            </Pressable>
            <Pressable style={styles.trasferbtn}>
              <View style={[styles.transferCart, { backgroundColor: "white" }]}>
                <Image
                  source={require("../assets/rupee.png")}
                  style={[styles.icons, { tintColor: "purple", width: 30, height: 30, marginTop: -2 }]}
                />
              </View>
              <Text style={[styles.transferText, {marginTop:10}]}>
                {"Start With\n₹ 100 "}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wealth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  searchBar: {
    width: "94%",
    height: 45,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "#929292",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
  },
  serch: {
    width: 18,
    height: 18,
  },
  TextInput: {
    marginRight: 180,
    marginLeft: 10,
  },
  sipView: {
    width: "94%",
    height: 120,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  siptittle: {
    fontWeight: "700",
    fontSize: 18,
    color: "black",
    marginTop: 10,
  },
  desctittle: {
    color: "#929292",
    marginTop: 5,
    fontSize: 14,
  },
  startsipbtn: {
    backgroundColor: "#6839B3",
    width: 120,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 15,
    flexDirection: "row",
  },
  btnText: {
    color: "white",
    fontWeight: "600",
  },
  sipIcon: {
    width: 16,
    height: 16,
    tintColor: "white",
    marginLeft: 10,
  },
  sipImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 15,
  },
  transfarView: {
    width: "100%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
  },
  trasferbtn: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  transferCart: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#6839B3",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  moneyTransfarSection: {
    width: "100%",
    height: 110,
    justifyContent: "center",
  },
  transferText: {
    marginTop: 5,
    textAlign: "center",
  },
  investmentIdeas: {
    width: "94%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
  },
});
