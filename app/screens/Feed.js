import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Login from './Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Feed extends Component {
  moreInfo() {
    console.log(this.props.navigation);
    this.props.navigation.navigate('Me');
  }
 
  render() {
    return (
      <View style={styles.container}>
      <Text>
        Feed;
      </Text>
      <Login />
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='sign-in'
        iconSize={50}
        onPress={() => this.moreInfo()}
      />
      </View>
    );
  }
}

export default Feed;
