import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { resetTodo } from '../../redux/actions';
import DefaultButton from '../../components/DefaultButton';

interface Props {
  resetTodo: typeof resetTodo;
}

class Settings extends React.Component<Props> {
  reset = () => {
    this.props.resetTodo();
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DefaultButton text="Reset Todos" onPress={this.reset} />
      </View>
    );
  }
}

const mapDispatchToProps = {
  resetTodo,
};

export default connect(undefined, mapDispatchToProps)(Settings);
