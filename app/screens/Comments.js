import { View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity, AlertIOS, ScrollView } from 'react-native';
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
  buttonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#e67e22',
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    width: 100,
  },
  buttonText: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
  message: {
    marginTop: 15,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    paddingLeft: 20,
    borderRadius: 8,
    width: '99%',
  },
  title: {
    marginLeft: 10,
    color: 'white',
    opacity: 1,
    fontSize: 15,
    fontWeight: '500',
  },
});

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // do not know if I will need yet?
      message: '',
    };

    this.displayComments = this.displayComments.bind(this);
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
    return (<ScrollView style={styles.container}>
      <TextInput
        style={styles.message}
        placeholder='comment here...'
        onChangeText={(text) => { this.setState({message: text}); }}
        value={this.state.message}
        clearTextOnFocus={false}
        autoCorrect={false}
        placeholderColor='gray'
      />
      <TouchableOpacity onPress={this.submitComment} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        Comments:
      </Text>
      <View>
        {this.displayComments()}
      </View> 
    </ScrollView>);
  }
}

function mapStateToProps(state) {
  return { activeEvent: state.activeEvent, comments: state.comments };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


