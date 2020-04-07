import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddTodo from '../screens/Add/AddTodo';

const Stack = createStackNavigator();

export default function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          title: 'Add Todo',
        }}
      />
    </Stack.Navigator>
  );
}
