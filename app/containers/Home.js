import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

const {
  Text,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
      <Text>
        "hello"
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
});

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
