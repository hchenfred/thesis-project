import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity, AlertIOS } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Post from './Post';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingTop: 0,
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  title: {
    color: 'white',
    opacity: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  formContainer: {
    marginTop: 10,
    padding: 20,
    flexGrow: 10,
  },
  buttonContainer: {
    backgroundColor: '#e67e22',
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonText: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
});

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // do not know if I will need yet?
      messageText: ''
    };

  }

  componentWillRecieveProps() {

  }

  displayComments() {
    return this.props.comments.map((post, i) => {
        return (<Post post={post}/>)
      });
  }

  submitComment() {
    AlertIOS.alert('WHAT"S UP?');
  }

  render() {
    return (<View style={styles.container}>
      <Text>
        Comments for {this.props.activeEvent.name}
      </Text>
      <TextInput style={styles.formContainer}/>
      <TouchableOpacity onPress={this.submitComment} style={styles.buttonContainer}>
        <Text> 
        </Text>
      </TouchableOpacity>
      <Text>
        Comments:
      </Text>
      <View>
        
      </View> 
    </View>);
  }
}

function mapStateToProps(state) {
  return { activeEvent: state.activeEvent, comments: state.comments };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


