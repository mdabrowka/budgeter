import React from 'react';
import { AppRegistry, StyleSheet, Text, View , Image, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { calculateSaving } from './calculations';


const Form = t.form.Form;

const Spending = t.struct({
  purchased: t.String,
  price: t.String
});

class HomeScreen extends React.Component {
  state = {
    spendings: [],
    savedToCoinJar: null,
  }

  handleSubmit = (event) => {
    const actualPrice = this._form.getValue().price;
    const savedToCoinJar = calculateSaving(actualPrice);
    this.setState({
      savedToCoinJar: savedToCoinJar
    });
  }

  render() {
    let pic = {
      uri: "http://themellorpractice.co.uk/wp-content/uploads/2014/06/cash-money-pounds.jpg"
    }
    if (this.state.savedToCoinJar) {
      return <Text style={styles.coinJarText}>You have saved {this.state.savedToCoinJar} to your Coin Jar</Text>
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
  },
  coinJarText: {
    fontSize: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}