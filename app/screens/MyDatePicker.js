import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  datePicker: {
    width: 335,
    backgroundColor: '#27ae60',
    marginBottom: 20,
  },
  timePicker: {
    width: 335,
    backgroundColor: '#27ae60',
    marginBottom: 20,
  },
});

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: null,
    };
  }

  render() {
    return (
      <View>
        <DatePicker
          style={styles.datePicker}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: 'white',
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date: date })}}
        />
        <DatePicker
          style={styles.timePicker}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: 'white',
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(time) => { this.setState({ time: time }); }}
        />
      </View>
    );
  }
}
