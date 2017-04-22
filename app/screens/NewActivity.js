import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-native-elements';
import { ActionCreators } from '../actions';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
    height: 40,
  },
});


class NewActivity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description, endTime, eventDate, id, location, name, photourl, startTime, username } = this.props.activeEvent;
    return (
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{location}</Text>
        <Text>host: {username}</Text>
        <Text>start time: {startTime}</Text>
        <Text>end time: {endTime}</Text>
        <TextInput
          style={styles.textInput}
          clearTextOnFocus={true}
          autoCorrect={false}
          value={''}
          placeholder="enter a place name"
        />
        <TextInput
          style={styles.textInput}
          clearTextOnFocus={true}
          autoCorrect={false}
          value={''}
          placeholder="enter an address"
        />
        <Button
          onPress={() => console.log('button is pressed')}
          title="OK"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { activeEvent: state.activeEvent };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);
