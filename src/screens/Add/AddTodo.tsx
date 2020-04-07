import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import InputText from '../../components/InputText';
import DatePicker from '../../components/DatePicker';
import DefaultButton from '../../components/DefaultButton';
import { addTodo } from '../../redux/actions';
import { getTodoID } from '../../lib/tools';

interface Props {
  navigation: any;
  addTodo: typeof addTodo;
  currentDate: string;
}

interface States {
  name: string;
  date: any;
}

class AddTodo extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: '',
      date: this.props.currentDate,
    };
  }

  handleChange = (key: string, value: string) => {
    this.setState({ [key]: value } as any);
  };

  goHome = () => {
    this.props.navigation.navigate('Home');
  };

  submit = () => {
    const { date, name } = this.state;

    if (date == null) {
      return false;
    }
    if (name === '') {
      return false;
    }

    const id = getTodoID();
    const item = {
      date,
      data: { id, date, name, complete: false },
    };
    this.props.addTodo(item);
    this.setState({ name: '' });
    this.goHome();
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <InputText
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
        <DatePicker
          label="Date"
          name="date"
          onChange={this.handleChange}
          value={this.state.date}
          style={{ marginBottom: 25 }}
        />
        <DefaultButton text="Submit" onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ Todo }: any) => {
  const { currentDate } = Todo;
  return { currentDate };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
