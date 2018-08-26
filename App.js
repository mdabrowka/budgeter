import React from 'react';
import { StyleSheet, Text, View , Image, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import t from 'tcomb-form-native';


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
    const value = this._form.getValue(); 
    console.log('value: ', value);
  }

  render() {
    let pic = {
      uri: "http://themellorpractice.co.uk/wp-content/uploads/2014/06/cash-money-pounds.jpg"
    }
    return (
      <View style={styles.container}>
        <Text>Coin Jar</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
          <Form 
          ref={c => this._form = c} 
          type={Spending} />
          <Button
          title="Log spending"
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
    marginTop: 50,
    padding: 20,
  },
});
