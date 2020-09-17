import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Calculator = (props) => {
  //title and image are defined in ImageScreen.j
  
  return (
    <View>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.buttonX}
        >
            <Icon name={props.name} size={32}  style={styles.iconSpace} />
        </TouchableOpacity> 
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container2:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container3:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textSpace:{
      paddingLeft: 10
    },
    textOperator:{
      fontWeight: 'bold',
      fontSize: 20
    },
    iconSpace:{
      justifyContent: 'center'
    },
  
    buttonX:{
      marginBottom: 50,
      marginTop: 50,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor:'white',
      borderStyle: 'solid',
      paddingLeft: 10,
      width: 60
    }
  });
export default Calculator; //dont forget to import ImageDetails.js in src/screens/ImageScreen.js
