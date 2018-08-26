import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    spendings: [],
  }
  render() {
    let pic = {
      uri: "http://themellorpractice.co.uk/wp-content/uploads/2014/06/cash-money-pounds.jpg"
    }
    return (
      <View style={styles.container}>
        <Text>Coin Jar</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <FormLabel>What did you buy?</FormLabel>
        <FormInput
          ref={input => this.input = input} />
        <FormLabel>How much did you spend?</FormLabel>
        <FormInput 
          ref={input => this.input = input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
