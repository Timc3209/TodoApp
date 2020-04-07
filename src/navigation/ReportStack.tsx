import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Report from '../screens/Report/Report';

const Stack = createStackNavigator();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Report',
        }}
      />
    </Stack.Navigator>
  );
}
