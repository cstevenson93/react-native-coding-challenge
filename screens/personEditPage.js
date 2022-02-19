import React, { Component } from 'react';
import { ActivityIndicator, Image,TouchableOpacity, Platform,  Text, View, FlatList, StyleSheet } from 'react-native';
import Stylesheet from './Stylesheet';

export default class personEditPage extends Component {  

  //Sets starting state to loading while render populates
  constructor() {
      super();
      this.state = {
          isLoading: false
          
        };
    }


componentWillMount= async() =>{
  var person = this.props.navigation.state.params.person;

  this.setState({
    personInfo: person
  })
}

// handles the mount information, setting session variables, etc
componentDidMount= async() =>{

  
    
}





    render() {  

        if (this.state.isLoading) {
            return (
              <View  style={ Stylesheet.activityIndicator }>
                <ActivityIndicator size='large' color='#272362' />
              </View>
            );
          }

          
        
        return (  
            
        <View style={styles.container}>
      <Text>{this.state.personInfo.name}</Text>
      </View>
            
        );  


        
    }  
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});