import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class Redirect extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Create another Event</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default Redirect;
