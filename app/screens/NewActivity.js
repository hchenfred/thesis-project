import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { Icon } from 'react-native-elements';
import { ActionCreators } from '../actions';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class NewActivity extends Component {
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { simpleCounter: state.simpleCounter, user: state.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);
