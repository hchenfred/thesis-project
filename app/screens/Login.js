import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>
        Login Page;
       </Text>
      </View>
    );
  }
}

export default Login;
