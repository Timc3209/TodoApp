import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import CalendarStack from './CalendarStack';
import AddStack from './AddStack';
import ReportStack from './ReportStack';
import SettingsStack from './SettingsStack';
import { PRIMARYCOLOR } from '../lib/config';

enableScreens();
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: any) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Calendar') {
              iconName = 'ios-calendar';
            } else if (route.name === 'Report') {
              iconName = 'ios-document';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            } else if (route.name === 'Add') {
              iconName = 'ios-add-circle';
              const bigSize = size + 40;
              return (
                <View style={{ marginBottom: 20 }}>
                  <Icon name={iconName} size={bigSize} color={color} />
                </View>
              );
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: PRIMARYCOLOR,
          inactiveTintColor: '#8997B0',
          showIcon: true,
          showLabel: false,
          style: {
            backgroundColor: '#f1f6f9',
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Calendar" component={CalendarStack} />
        <Tab.Screen name="Add" component={AddStack} />
        <Tab.Screen name="Report" component={ReportStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
