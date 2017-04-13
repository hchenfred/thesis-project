import React from 'react';
import { View, ListView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import util from '../lib/utility';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  formContainer: {
    marginTop: 10,
    padding: 20,
    flexGrow: 1,
  },
  place: {
    height: 40,
    backgroundColor: '#27ae60',
    marginBottom: 15,
    color: 'white',
    paddingLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    height: 40,
    marginBottom: 10,
  },
  buttonText: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
});

class AddFriends extends React.Component {
  constructor(props) {
    super(props);
    // this.friendList = ['fred', 'hello', 'steve'];
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      friendList: [],
      friendName: '',
      friendEmail: '',
    };
    this.onPressAddButton = this.onPressAddButton.bind(this);
    this.onPressDoneButton = this.onPressDoneButton.bind(this);
  }

  onPressAddButton() {
    const temp = this.state.friendList.slice();
    temp.push({ name: this.state.friendName, email: this.state.friendEmail });
    this.setState({ friendList: temp });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(temp),
    });
  }

  onPressDoneButton() {
    console.log('Done button is pressed', this.props.user);
    // event will be saved to DB in here
    if (this.props.user.id) {
      fetch('http:127.0.0.1:5000/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.props.event.location,
        creator_id: this.props.user.id,
        location: this.props.event.location,
        eventDate: this.props.event.eventDate,
        description: this.props.event.description,
        startTime: util.formatTime(this.props.event.startTime),
        endTime: util.formatTime(this.props.event.endTime),
      }),
    })
    .then((data) => console.log('save event to DB'))
    .catch((err) => console.log(err));
    } else {
      alert('user id is not available, please log in again');
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={name => this.setState({ friendName: name })}
            style={styles.place}
            placeholder="friend's name"
          />
          <TextInput
            onChangeText={email => this.setState({ friendEmail: email })}
            style={styles.place}
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="friend's email"
          />
          <TouchableOpacity onPress={this.onPressAddButton} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>ADD TO INVITATION LIST</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressDoneButton} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>DONE</Text>
          </TouchableOpacity>
          <Text>A notification email will be sent to friends.</Text>
        </View>
        <View style={{ flexGrow: 10, marginTop: 0, padding: 10 }}>
          <ListView
            enableEmptySections={true}
            style={{ height: 600, width: 600 }}
            dataSource={this.state.dataSource}
            renderRow={rowData => <Text>{rowData.name}</Text>}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.event,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);




