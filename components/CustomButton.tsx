import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity } from "react-native";




export default function CustomButton({text,styleColor}:{text:string,styleColor:string}){
    return(
<TouchableOpacity
            style={[styles.buttonBox,{borderColor:`${styleColor}`}]}
          >
            <Text
              style={styles.buttonText}
            >
              {text}
            </Text>
          </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonBox:{
        width: 96,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        padding: 8,
        gap: 8,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        alignItems: "center",
        justifyContent: "center",
      },
     buttonText:
     {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.17,
        textAlign: "center",
        color: "#FFFFFF",
      }
})