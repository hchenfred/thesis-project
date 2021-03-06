import { RefreshControl, View, StyleSheet, TextInput, Text, KeyboardAvoidingView, Image, TouchableOpacity, AlertIOS, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Post from './Post';
import endpoint from '../config/global';

const baseURL = endpoint.baseURL;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 10,
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
    backgroundColor: '#27ae60',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    paddingLeft: 20,
    borderRadius: 8,
    width: '98%',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    marginBottom: 6,
  },
  subtitle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
});

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // do not know if I will need yet?
      message: '',
      refreshing: false,
    };

    this.displayComments = this.displayComments.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  _onRefresh() {
    const render = this.render;
    const processComs = this.props.getComments;
    const com = this;
    this.setState({ refreshing: true });
    // reset the props
   fetch(`${baseURL}/comments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.activeEvent.id,
      }),
    })
    .then(re => re.json())
    .then((resJ) => {
      processComs(resJ.reverse());
      com.setState({ refreshing: false });
      render();
    });
  }
  displayComments() {
    if (this.props.comments.length > 0) {
      return this.props.comments.map((post, i) => {
        return (<Post post={post}/>)
      });
    } else { 
      return (<Text>No one has posted to this event</Text>);
    }
  }

  submitComment() {
    const com = this;
    const body = this.state.message;
    const userId = this.props.user.id;
    const eventId = this.props.activeEvent.id;
    const processComs = this.props.getComments;

    console.log(body, userId, eventId);

    fetch(`${baseURL}/post`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body,
        userId,
        eventId,
      }),
    })
    //then get the new messages
    .then(() => {
      fetch(`${baseURL}/comments`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.activeEvent.id,
        }),
      })
      .then(res => res.json())
      .then((resJson) => {
        processComs(resJson.reverse());
        com.setState({message: ''});
      });
    })
    .catch((err) => { console.log(err) });
  }

  render() {
    return (<ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
      }
      style={styles.container}
      >
      <TextInput
        style={styles.message}
        placeholder='This event is going to be fun!'
        onChangeText={(text) => { this.setState({message: text}); }}
        value={this.state.message}
        clearTextOnFocus={false}
        autoCorrect={false}
        placeholderColor='gray'
      />
      <Text style={styles.subtitle}>
        Enter you comment above. Scroll beyond the top of the screen to refresh the comments.
      </Text>
      <TouchableOpacity onPress={this.submitComment} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        Comments
      </Text>
      <View>
        {this.displayComments()}
      </View>
    </ScrollView>);
  }
}

function mapStateToProps(state) {
  return { activeEvent: state.activeEvent, comments: state.comments, user: state.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


