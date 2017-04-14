import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e67e22',
    marginBottom: 10,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: 'white',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`Invitee: ${props.username} `}
    </Text>
  </View>
);

export default Row;