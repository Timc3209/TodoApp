import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { checkDate, toggleTodo, deleteTodo } from '../../redux/actions';
import TodoItem from '../../components/TodoItem';

interface Props {
  todos: any;
  todosExtraData: any;
  currentDate: string;
  checkDate: typeof checkDate;
  toggleTodo: typeof toggleTodo;
  deleteTodo: typeof deleteTodo;
}

class Calendar extends React.Component<Props> {
  toggleTodo = (id: string, date: string) => {
    this.props.toggleTodo({ id, date });
  };

  deleteTodo = (id: string, date: string) => {
    Alert.alert('Confirm', 'Are you sure you want to delete this item?', [
      { text: 'NO', style: 'cancel' },
      { text: 'YES', onPress: () => this.props.deleteTodo({ id, date }) },
    ]);
  };

  renderItem = (item: any) => {
    return (
      <TodoItem
        name={item.name}
        id={item.id}
        date={item.date}
        calendar
        complete={item.complete}
        onPress={this.toggleTodo}
        onDelete={this.deleteTodo}
      />
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>&nbsp;</Text>
      </View>
    );
  };

  rowHasChanged = () => {
    return true;
  };

  onDayPress = (day: any) => {
    const currentDate = day.dateString;
    this.props.checkDate(currentDate);
  };

  render() {
    const { todos, currentDate } = this.props;
    return (
      <View style={styles.container}>
        <Agenda
          minDate="2020-01-01"
          pastScrollRange={12}
          futureScrollRange={12}
          items={todos}
          selected={currentDate}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
          onDayPress={this.onDayPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

const mapStateToProps = ({ Todo }: any) => {
  const { todos, currentDate, todosExtraData } = Todo;
  return { todos, currentDate, todosExtraData };
};

const mapDispatchToProps = {
  checkDate,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
