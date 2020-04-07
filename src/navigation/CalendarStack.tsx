import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from '../screens/Calendar/Calendar';

const Stack = createStackNavigator();

export default function CalendarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
        }}
      />
    </Stack.Navigator>
  );
}
