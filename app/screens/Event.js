import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
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
    color: 'white',
    opacity: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  formContainer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    marginBottom: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
});

class Event extends Component {
  render() {
    return (
    <View style={styles.container}>    
      <View style={styles.titleContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../img/congratulations.png')}  
        />
        <Text style={styles.title}>
          Your Event with Friends Starts from Here!
        </Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
        <TextInput style={styles.place} placeholder="enter a place/event" />
        <MyDatePicker />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    );
  }
}

export default Event;

