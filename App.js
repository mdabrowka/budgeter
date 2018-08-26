import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: "http://themellorpractice.co.uk/wp-content/uploads/2014/06/cash-money-pounds.jpg"
    }
    return (
      <View style={styles.container}>
        <Text>Budgeter</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
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
