import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert, marginBottom, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Calculator from '../components/Calculator';

const CalculatorScreen = () => {


  const [integerfirst, first] = useState('');
  const [integersecond, second] = useState('');
  const [operator, setOperator] = useState('');
  const [answer, setAnswer] = useState(0)

  validate = (integerfirst, integersecond, operator) => {
    let value
    let regex = /^([+-]?[1-9]\d*\.?\d*|0)$/
    console.log(integerfirst);
    if (regex.test(integerfirst) === true) {
      if (regex.test(integersecond) === true) {
          if (operator === "+") {
            let value = parseInt(integerfirst) + parseInt(integersecond)
            return value
          } else if (operator === "-") {
            let value = (integerfirst) - (integersecond)
            return value
          } else if (operator === "*") {
            let value = (integerfirst) * (integersecond)
            return value
          } else if (operator === "/") {
            let value = (integerfirst) / (integersecond)
            return value
          }
        
      } else {
        Alert.alert("Error Input", "Please Enter a valid Integer");
      }
    } else {
      Alert.alert("Error Input", "Please Enter a valid Integer");
    }
  }

  return (

    <View style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={{width: 300, height: 60, backgroundColor: 'grey', marginTop: 30,  justifyContent: 'flex-end'}}>
          <Text style={{alignSelf: 'flex-end', marginRight: 7, fontSize: 40}}>
            {answer}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text style={styles.textSpace}>First Number</Text>
          <Text style={styles.textSpace}>Second Number</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}} >
          <TextInput
            value={integerfirst}
            style={{ height: 35, width: 100, borderColor: 'black', borderWidth: 2, color: 'white', paddingLeft: 45 }}
            onChangeText={value => first(value)}
            keyboardType="numeric"
          />
          <Text style={styles.textOperator}>{"    "}{operator}{"    "}</Text>
          <TextInput
            value={integersecond}
            style={{ height: 35, width: 100, borderColor: 'black', borderWidth: 2, color: 'white', paddingLeft: 45 }}
            onChangeText={value => second(value)}
            keyboardType="numeric"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Calculator name="plus" onPress={() => { setOperator('+'); }}></Calculator>
          <Calculator name="minus" onPress={() => { setOperator('-'); }}></Calculator>
          <Calculator name="times" onPress={() => { setOperator('*'); }}></Calculator>
          <Calculator name="divide" onPress={() => { setOperator('/'); }}></Calculator>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <TouchableOpacity
           onPress={() => {
              setOperator('')
              first('')
              second('')
            }}
            style={styles.buttonX}
          ><Text style={{ color: 'white'}}>Clear</Text>
          </TouchableOpacity>

          <Text>{"        "}</Text>
          <TouchableOpacity
            onPress={() => {
              setAnswer(validate(integerfirst, integersecond, operator));
            }}
            style={styles.buttonZ}
          ><Text style={{ color: 'white' }} >Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    color: 'white'
  },

  container2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white'
  },

  container3: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white'
  },

  textSpace: {
    paddingLeft: 2,
    color: 'white',
    marginBottom: 10
  },

  textOperator: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  iconSpace: {
    justifyContent: 'center',
  },

  buttonX: {
    marginBottom: 50,
    marginTop: 50,
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingLeft: 30,
    width: 100,
  },

  buttonZ: {
    marginBottom: 50,
    marginTop: 50,
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingLeft: 23,
    width: 100,
  }
});

export default CalculatorScreen;
