import React, {Component} from 'react';  
import { createAppContainer } from 'react-navigation';  
import {createStackNavigator} from 'react-navigation-stack';



//import screens
import landingPage from './screens/landingPage' ;
import personEditPage from './screens/personEditPage' ;
  
 

  
const AppNavigator = createStackNavigator(  
    {  
        Home: 
        {
            screen: landingPage,
            navigationOptions: {
              title: 'Landing Page',
              headerTitleAlign: 'center',
              headerTintColor: '#737373',
              headerStyle:{
                  backgroundColor: '#f9f9f9'
              }
            }
        },

        
        
        //contactList,  
        personEditPage: personEditPage 
        
    },  
    
    {
        defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTintColor: '#737373',
        headerStyle:{
            backgroundColor: '#f9f9f9'
            }   
        }
    },

    {  
        initialRouteName: "Home"  ,
        headerStyle: { backgroundColor: 'red' }
    }  

    
);  
  
const AppContainer = createAppContainer(AppNavigator);  

export default class App extends Component {  
    
    render() {  
        return <AppContainer />;  
    }  
} 