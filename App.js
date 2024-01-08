import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');

  function calculate(){
   const ageVariable = age
   let calcLow = (220 - ageVariable) * 0.65
   let calcHigh = (220 - ageVariable) * 0.85
   calcLow = calcLow.toFixed()
   calcHigh = calcHigh.toFixed()
   setLow(calcLow)
   setHigh(calcHigh)
  }
 return (
   <View style={styles.container}>
     <Text style={styles.field}>Your age</Text>
     <TextInput 
     keyboardType='decimal-pad'
     value={age}
     onChangeText={text => setAge(text)}
     />
     <Text style={styles.field}>HR limits</Text>
     <Text style={styles.field}>{low}   -  {high}</Text>
     <Button onPress={calculate} title="calculate" ></Button>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'left',
    justifyContent: 'center',
    
  },
});
