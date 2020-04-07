import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  totalTask: number;
}

class Report extends React.PureComponent<Props> {
  render() {
    const { totalTask } = this.props;

    return (
      <View style={styles.container}>
        <Text>Total Task: {totalTask}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
  },
  smallText: {
    color: '#FFF',
    fontSize: 16,
  },
});

const mapStateToProps = ({ Todo }: any) => {
  const { totalTask } = Todo;

  return {
    totalTask,
  };
};

export default connect(mapStateToProps, undefined)(Report);
