import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const InputText = (props: any) => (
  <View
    style={props.style ? [styles.container, props.style] : styles.container}
  >
    <Text>{props.label}</Text>
    <View style={styles.textContainer}>
      <TextInput
        value={props.value}
        onChangeText={(text: string) => props.onChange(props.name, text)}
        style={styles.text}
      />
    </View>
  </View>
);

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
  },
});

export default InputText;
