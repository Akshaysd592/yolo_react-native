import { StyleSheet, Text, View } from "react-native";



export default function GiniePage(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ginie</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text:{
        color:"#FFFFFF"
    }
  });
  