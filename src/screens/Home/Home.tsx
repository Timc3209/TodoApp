import React from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, Alert, StyleSheet } from 'react-native';
import TodoItem from '../../components/TodoItem';
import { getTodaysDate, getDisplayDate } from '../../lib/tools';
import { setDate, toggleTodo, deleteTodo } from '../../redux/actions';
import { PRIMARYCOLOR } from '../../lib/config';

interface Props {
  todoItems: [];
  totalItems: number;
  totalComplete: number;
  currentDate: string;
  todosExtraData: string;
  setDate: typeof setDate;
  toggleTodo: typeof toggleTodo;
  deleteTodo: typeof deleteTodo;
}

class Home extends React.Component<Props> {
  componentDidMount() {
    const todaysDate = getTodaysDate();
    this.props.setDate(todaysDate);
  }

  toggleTodo = (id: string, date: string) => {
    this.props.toggleTodo({ id, date });
  };

  deleteTodo = (id: string, date: string) => {
    Alert.alert('Confirm', 'Are you sure you want to delete this item?', [
      {
        text: 'NO',
        style: 'cancel',
      },
      { text: 'YES', onPress: () => this.props.deleteTodo({ id, date }) },
    ]);
  };

  render() {
    const {
      totalItems,
      totalComplete,
      currentDate,
      todoItems,
      todosExtraData,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Total: {totalItems}</Text>
            <Text style={styles.smallText}>Complete: {totalComplete}</Text>
          </View>
          <Text style={styles.mediumText}>{currentDate}</Text>
        </View>
        <FlatList
          data={todoItems}
          extraData={todosExtraData}
          contentContainerStyle={{ paddingBottom: 35 }}
          renderItem={({ item }: any) => (
            <TodoItem
              name={item.name}
              id={item.id}
              date={item.date}
              calendar={false}
              complete={item.complete}
              onPress={this.toggleTodo}
              onDelete={this.deleteTodo}
            />
          )}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallText: {
    color: '#FFF',
    fontSize: 16,
  },
  mediumText: {
    color: '#FFF',
    fontSize: 18,
  },
});

const getTodoItems = (todos: any, currentDate: string) => {
  if (todos == null) {
    return [];
  }
  if (todos[currentDate] == null) {
    return [];
  }
  if (todos[currentDate].length === 0) {
    return [];
  }
  return todos[currentDate];
};

const getCompleteItems = (todoItems: any) => {
  return todoItems.filter((t: any) => t.complete);
};

const mapStateToProps = ({ Todo }: any) => {
  const { todos, currentDate, todosExtraData } = Todo;
  const todoItems = getTodoItems(todos, currentDate);
  const completeItems = getCompleteItems(todoItems);

  return {
    totalItems: todoItems.length,
    totalComplete: completeItems.length,
    currentDate: getDisplayDate(currentDate),
    todosExtraData,
    todoItems,
  };
};

const mapDispatchToProps = {
  setDate,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
