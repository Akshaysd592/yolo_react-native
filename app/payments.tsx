import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";

export default function Payments() {
  const [freeze, setFreeze] = useState(true);
  const [date, setDate] = useState("00/0000");
  const [creaditCardNum, setCrediCardNo] = useState("0000000000000000");
  async function getData() {
    let date = await faker.date.future().toISOString(); // to generate random date

    let newFormateDate = date.split("-");
    setDate(`${newFormateDate[1]}/${newFormateDate[0]}`); // converting into required format

    let creditCardNumdata = await faker.finance.creditCardNumber({
      // generating and converting into required format
      issuer: "63[7-9]#-####-####-###L",
    }); // '6375-3265-4676-6646'
    let creditCardFormated = creditCardNumdata.split("-").join("");
    setCrediCardNo(creditCardFormated);
  }

  useEffect(() => {
    getData(); // setting data when freeze value changed
  }, [freeze]);

  return (
    <ScrollView >
      <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.paymentText}>select payment mode</Text>
        <Text style={styles.subPaymentText}>
          choose your preferred payment method to make payment.
        </Text>
        <View style={styles.buttonRow}>
         
          <CustomButton text={"Pay"} styleColor={"#FFFFFF"} />
          <CustomButton text={"Card"} styleColor={"#A90808"} />

          
        </View>

        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>your digital debit card</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.cardBox}>
            <View style={styles.cardInnerBox}>
              {freeze ? (
                <Image
                  source={require("../assets/design_layer.png")}
                  alt="design-layer"
                  style={{ left: -15, top: -60 }}
                />
              ) : (
                <>
                  <View style={styles.cardStructure}>
                    <Image
                      source={require("../assets/yolo_logo.png")}
                      alt="yolo_logo"
                      style={styles.yoloLogoStyle}
                    />
                    <Image
                      source={require("../assets/yes_bank.png")}
                      alt="yes_blank"
                      style={styles.yesbankLogoStyle}
                    />

                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 2 }}>
                        <Text style={styles.creditcard}>{creaditCardNum}</Text>
                      </View>
                      <View style={styles.cardLeftStyle}>
                        <View>
                          <Text style={styles.expiryStyle}>expiry</Text>

                          <Text  style={{color:'#FFFFFF'}}>{date}</Text>
                        </View>
                        <View>
                          <Text style={styles.cvvStyle}>cvv</Text>

                          <View style={styles.passwordRow}>
                            <Image
                              source={require("../assets/password.png")}
                              alt="password"
                              style={styles.passwordSize}
                            />
                            <Image
                              source={require("../assets/eye.png")}
                              alt="eye"
                              style={styles.eyeStyle}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.copyStyle}>
                      <Image
                        style={{ left: 0 }}
                        source={require("../assets/u_copy.png")}
                      />
                      <Text style={styles.copyTextStyle}>copy details</Text>
                    </View>

                    <Image
                      source={require("../assets/Group.png")}
                      alt="group"
                      style={styles.groupStyle}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
          <View style={styles.cardrightside}>
            <TouchableOpacity
              onPress={() => {
                setFreeze(!freeze);
              }}
            >
              <View
                style={[
                  styles.starStyle,
                  { borderColor: freeze ? "#A90808" : "#FFFFFF" },
                ]}
              >
                {
                  freeze? <Image
                  style={styles.snowflakeStyle}
                  source={require("../assets/u_snowflake.png")}
                />: <Image
                style={styles.snowflakeStyle}
                source={require("../assets/u_snowflakewhite.png")}
              />
                }
               
              </View>
            </TouchableOpacity>

            <Text
              style={[
                styles.freezeText,
                { color: freeze ? "#A90808" : "#FFFFFF" },
              ]}
            >
              {freeze ? "unfreeze" : "freeze"}
            </Text>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  container: {
    backgroundColor: "#000",
    marginLeft: 16,
    //   marginBottom:80,
    //   marginTop:10,
    flex: 1,
    alignItems: "flex-start",
  },
  paymentText: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -0.17,
    marginTop: 64,
  },
  subPaymentText: {
    color: "#FFFFFF",
    marginTop: 32,
    opacity: 0.5,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.17,
  },
  buttonRow: { marginTop: 70, flexDirection: "row", gap: 8 },
  buttonStyle: {
    width: 96,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    padding: 8,
    gap: 8,
    borderColor: "#FFFFFF",
    borderTopWidth: 1,
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.17,
    textAlign: "center",
    color: "#FFFFFF",
  },
  cardHeader: { width: 149, height: 18, marginTop: 30, opacity: 0.2 },
  cardHeaderText: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  cardBox: {
    width: 186,
    height: 296,
    marginTop: 20,
    borderRadius: 16,
    shadowColor: "#000000B2",
    elevation: 70,
    borderWidth: 2,
  },
  cardInnerBox: {
    width: 186,
    height: 296,
    borderRadius: 16,
  },
  cardStructure: {
    borderColor: "#FFFFFF",
    height: 290,
    borderLeftWidth: 2,
    borderRightWidth: 2,

    borderRadius: 12,
  },
  yoloLogoStyle: {
    width: 48.44,
    height: 15.29,
    left: 19.06,
    top: 19,
  },
  yesbankLogoStyle: {
    width: 40.44,
    height: 15.29,
    top: 8.55,
    left: 124,
  },
  creditcard: {
    width: 34.34,
    height: 92.92,
    borderRadius: 0.8,
    marginLeft: 33.29,
    top: 76.08,
    color: "#FFFFFF",
  },
  cardLeftStyle: {
    flex: 1,
    height: 92.92,
    borderRadius: 0.8,
    top: 76.08,
    left: -19,
  },
  expiryStyle: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    width: 39,
    height: 15,
    opacity: 0.5,
    color: "#FFFFFF",
  },
  cvvStyle: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    width: 39,
    height: 15,
    opacity: 0.5,
    color: "#FFFFFF",
  },
  passwordRow: {
    width: 71,
    height: 24,
    flexDirection: "row",
    gap: 4,
  },
  passwordSize: {
    width: 30.44,
    height: 10.29,
  },
  eyeStyle: {
    width: 20.44,
    height: 13.29,
  },
  copyStyle: {
    flexDirection: "row",
    gap: 2,
    top: 100,
    left: 19,
  },
  copyTextStyle: {
    color: "#A90808",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
  },
  groupStyle: {
    width: 71.44,
    height: 34.29,
    left: 105.06,
    top: 110,
  },
  cardrightside: {
    width: 130,
    height: 296,
    marginTop: 20,
    marginLeft: 6,
  },
  starStyle: {
    width: 58,
    height: 58,
    top: 79,
    borderRadius: 70,
    borderWidth: 1,
    marginLeft: 6,
  },
  snowflakeStyle: { width: 20, height: 20, left: 18, marginTop: 20 },
  freezeText: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    marginLeft: 15,
    opacity:0.8,
    top: 80,

  }
});
