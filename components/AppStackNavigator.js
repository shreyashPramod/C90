import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import MyDiary from '../screens/MyDiary';


export const AppStackNavigator = createStackNavigator({
  MyDiaryList : {
    screen :MyDiary,
    navigationOptions:{
      headerShown : false
    }
  },
},
  {
    initialRouteName: 'MyDiaryList'
  }
);
