import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

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
    this.props.navigation.navigate('Me');
  }
 
  render() {
    return (
      <View style={styles.container}>
      <Text>
        Feed;
      </Text>
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        iconSize={50}
        onPress={() => this.moreInfo()}
      />

      </View>
    );
  }
}

export default Feed;
