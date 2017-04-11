import React from 'react';
import { View, ListView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      friendList: [],
      friendName: '',
      friendEmail: '',
    };
    this.onPressAddButton = this.onPressAddButton.bind(this);
  }

  onPressAddButton() {
    console.log(this.state.friendName);
    let temp = this.state.friendList.slice();
    temp.push(this.state.friendName);
    this.setState({ friendList: temp });
    console.log(temp);
    this.setState({
       dataSource: this.state.dataSource.cloneWithRows(temp),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>'halal guys for Steve!!!!============='</Text>
        <TextInput
          onChangeText={(name) => this.setState({ friendName: name })}
          style={styles.place}
          placeholder="friend's name"
        />
        <TextInput
          onChangeText={(email) => this.setState({ friendEmail: email })}
          style={styles.place}
          keyboardType="email-address"
          autoCorrect={false}
          placeholder="friend's email"
        />
        <TouchableOpacity onPress={this.onPressAddButton} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add to Invite List</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <ListView style={{ height: 600, width: 600 }}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
      </View>
    );
  }
}

export default AddFriends;




