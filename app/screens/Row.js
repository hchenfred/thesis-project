import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  friendContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e67e22',
    marginBottom: 10,
  },
  friendText: {
    marginLeft: 12,
    fontSize: 16,
    color: 'white',
  },
});

// When cancel button is clicked, it should delete the participant from DB
// and also remove it from the invited friend list

const Row = props => (
  <View style={styles.friendContainer}>
    <Text style={styles.friendText}>
      {`Invitee: ${props.username} `}
    </Text>
    <TouchableOpacity onPress={() => console.log(props.email)}>
      <Text>Cancel</Text>
    </TouchableOpacity>
  </View>
);

//export default Row;