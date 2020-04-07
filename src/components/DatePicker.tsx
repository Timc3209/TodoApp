import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { DATEFORMAT } from '../lib/config';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: Function;
  style?: any;
}

interface States {
  visible: boolean;
  date: any;
}

class DatePicker extends React.Component<Props, States> {
  readonly state: States = {
    visible: false,
    date: null,
  };

  handleChange = (event: any, date: any) => {
    this.setState({ visible: false, date: null });

    if (date === undefined) {
      return false;
    }

    const dateString = moment(date).format(DATEFORMAT);
    this.props.onChange(this.props.name, dateString);
    return true;
  };

  showPicker = () => {
    const date = this.props.value
      ? moment(this.props.value, DATEFORMAT).toDate()
      : new Date();
    this.setState({ date, visible: true });
  };

  render() {
    return (
      <View
        style={
          this.props.style
            ? [styles.container, this.props.style]
            : styles.container
        }
      >
        <Text>{this.props.label}</Text>
        <TouchableWithoutFeedback onPress={this.showPicker}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.value}</Text>
          </View>
        </TouchableWithoutFeedback>
        {this.state.visible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode="date"
            display="spinner"
            onChange={this.handleChange}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textContainer: {
    height: 40,
    borderColor: '#8997B0',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: '#111111',
    marginTop: 4,
    marginLeft: 4,
  },
});

export default DatePicker;
