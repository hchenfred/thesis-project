import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import React, { Component } from 'react';
import MyDatePicker from './MyDatePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  place: {
    height: 40,
    backgroundColor: '#27ae60',
    marginBottom: 15,
    color: 'white',
    paddingLeft: 10,
  },
  titleContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    opacity: 0.8,
    fontSize: 15,
  },
  formContainer: {
    padding: 20,
  }

});

class Event extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Your Event with Friends Starts from Here!
        </Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <TextInput style={styles.place} placeholder="enter a place/event" />
        <MyDatePicker />
      </KeyboardAvoidingView>
    </View>
    );
  }
}

export default Event;

