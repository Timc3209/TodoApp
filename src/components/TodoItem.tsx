import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  name: string;
  id: string;
  date: string;
  calendar: boolean;
  complete: boolean;
  onPress: any;
  onDelete: any;
}

const TodoItem = ({
  name,
  id,
  date,
  calendar,
  onPress,
  onDelete,
  complete,
}: Props) => (
  <View style={calendar ? styles.containerCalendar : styles.container}>
    <TouchableOpacity style={styles.checkBox} onPress={() => onPress(id, date)}>
      <Icon
        size={30}
        color="#211f30"
        name={complete ? 'check-box' : 'check-box-outline-blank'}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.deleteIcon}
      onPress={() => onDelete(id, date)}
    >
      <Icon size={22} color="#211f30" name="delete" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  containerCalendar: {
    marginRight: 10,
    marginTop: 17,
    padding: 15,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 17,
    padding: 15,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  checkBox: {
    flexDirection: 'row',
  },
  deleteIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#111111',
    marginLeft: 10,
    marginTop: 2,
  },
});

export default TodoItem;
