import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";


export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        
        tabBarBackground: () => (
          <View
            style={[
              styles.tabBarBackground,
              {
                borderTopStartRadius: 0,
                borderTopEndRadius: 0,
                borderColor: "#000",
              },
            ]}
          />
        ),
      }}
      sceneContainerStyle={styles.sceneContainer}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            //  <AntDesign name="home" size={size} color={color} />
            <View
              style={styles.navleft}
            >
              <Image
                source={require("../assets/home.png")}
                style={{ width: 20, height: 20, borderColor: "black" }}
              />
            </View>

          ),
          
        }}
      />
      {/* <Tabs.Screen  name="payment" options={{title:"Yolo Payment",headerShown:false}}/> */}
      <Tabs.Screen
        name="payments"
        options={{
          title: "Yolo Pay",
          headerShown: false,
           
          tabBarIcon: ({}) => (
            
            <View
              style={styles.navmid}
            >
              <Image
                source={require("../assets/scan2.png")}
                style={{ width: 20, height: 20, borderColor: "black" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ginie"
        options={{
          // title: "Ginie",
          headerShown: false,
          tabBarIcon: ({}) => (
            //  <AntDesign name="home" size={size} color={color} />
            <View
              style={styles.navright}
            >
              <Image
                source={require("../assets/frame.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: "black",
  },
  tabBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 110, // Adjust as needed
  },
  tabBarBackground: {
    flex: 1,
    backgroundColor: "black",
    // borderTopLeftRadius: 10, // Adjust radius for curve
    // borderTopRightRadius: 10, // Adjust radius for curve
    // borderTopStartRadius: 300,
    // borderTopEndRadius: 200,
    // backfaceVisibility: "hidden",
  },
  navleft:{
      borderRadius: 70,
      borderWidth: 1,
      borderColor: "#FFFFFF",
      padding: 15,
      borderStartColor: "#FFFFFF",
      borderTopWidth: 0.2,
      
    },
    navmid:{
      borderRadius: 70,
      borderWidth: 1,
      borderColor: "#FFFFFF",
      padding: 25,
      gap: 3,
      marginTop: 20,
      marginBottom: 30,
      borderStartColor: "#FFFFFF",
    
      borderTopWidth: 0.2,
     
     
    },
    navright:{
      borderRadius: 70,
      borderWidth: 1,
      borderColor: "#FFFFFF",
      padding: 15,
      borderStartColor: "#FFFFFF",
      borderTopWidth: 0.2,
  
      
    }

});
