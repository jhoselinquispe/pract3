/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createAppContainer} from 'react-navigation'
import {createDrewerNavigator} from 'react-navigation-drawer'
import {Dimensions} from 'react-native'

import{Feather} from '@expo/vector-icons';

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen,
  }
  from "./pantalla";
 import $idebar from './components/$idebar';

  const DrewerNavigator=createDrewerNavigator(
    {
      ProfileScreen:{
        screen: ProfileScreen,
        navigationOptions:{
          title: "Profile",
          drawerIcons: ({tintColor}) => <Feather name="user" size= {16} color={tintColor}/>
        }
      },
      MessageScreen:{
        screen: MessageScreen,
        navigationOptions:{
          title: "Message",
          drawerIcons: ({tintColor}) => <Feather name="message-square" size= {16} color={tintColor}/>
        }
      },


  ActivityScreen:{
    screen:  ActivityScreen,
    navigationOptions:{
      title: "  Activities",
      drawerIcons: ({tintColor}) => <Feather name="  Activity" size= {16} color={tintColor}/>
    }
  },
  ListScreen:{
    screen:  ListScreen,
    navigationOptions:{
      title: "  Lists",
      drawerIcons: ({tintColor}) => <Feather name="List" size= {16} color={tintColor}/>
    }
  },
  ReportScreen:{
    screen:  ReportScreen,
    navigationOptions:{
      title: " Reports",
      drawerIcons: ({tintColor}) => <Feather name=" bart-chart" size= {16} color={tintColor}/>
    }
  },
  StatisticScreen:{
    screen:  StatisticScreen,

    navigationOptions:{
      title: "Statistic",
      drawerIcons: ({tintColor}) => <Feather name=" trending-up" size= {16} color={tintColor}/>
    },
  
  SignOutScreen:{
    screen: SignOutScreen,
    navigationOptions:{
      title: "SignOut",
      drawerIcons: ({tintColor}) => <Feather name=" log-out" size= {16} color={tintColor}/>
    }
  }
  
},
  


  contentComponent: props =><$idebar {...props} />,

  drawerWidth: Dimensions.get("window").width * 0.85,
  hideStatusBar: true,

  contenOptions: {
    activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
    activeTinColor: "#53115B",
    itemsContainersStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
    }
  }
  
  );


export default createAppContainer(DrawerNavigator);


