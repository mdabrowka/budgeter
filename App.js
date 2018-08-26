import React from 'react';
import { StyleSheet, Text, View , Image, Button } from 'react-native';
import t from 'tcomb-form-native';
import { calculateRoundedPrice, calculateSaving } from './calculations';


const Form = t.form.Form;

const Spending = t.struct({
  purchased: t.String,
  price: t.String
});

export default class App extends React.Component {
  state = {
    spendings: [],
  }

  handleSubmit = (event) => {
    const actualPrice = this._form.getValue().price;
    const roundedPrice = calculateRoundedPrice(actualPrice);
    const savedToCoinJar = calculateSaving(roundedPrice, actualPrice);
    console.log('logging saving', savedToCoinJar);
  }

  render() {
    let pic = {
      uri: "http://themellorpractice.co.uk/wp-content/uploads/2014/06/cash-money-pounds.jpg"
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Coin Jar</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.text}>Log spending and calculate your Coin Jar saving</Text>
          <Form 
          ref={c => this._form = c} 
          type={Spending} />
          <Button
          title="Submit"
          onPress={this.handleSubmit}
        />
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
    marginTop: 30,
    padding: 20,
  },
  text: {
    fontSize: 20,
    padding: 20,
  }
});
