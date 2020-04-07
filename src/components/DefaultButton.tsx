import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PRIMARYCOLOR } from '../lib/config';

const DefaultButton = (props: any) => (
  <TouchableOpacity
    style={props.style ? [styles.container, props.style] : styles.container}
    onPress={props.onPress}
  >
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PRIMARYCOLOR,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default DefaultButton;
