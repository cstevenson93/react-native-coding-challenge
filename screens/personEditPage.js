import React, { Component, useState } from 'react';
import { ActivityIndicator, Image,TouchableOpacity, Platform,  Text, View, FlatList, StyleSheet, TextInput, Picker } from 'react-native';
import { Switch } from 'react-native-switch';
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
    personInfo: person,
    personActive: person.isActive,
    gender: 'male'
  })
}

// handles the mount information, setting session variables, etc
componentDidMount= async() =>{

  
    
}

changeActiveState = async(val) =>{
  this.setState({
  personActive: val,
  })
}



    render() {  

        if (this.state.isLoading) {
            return (
              <View  style={ Stylesheet.activityIndicator }>
                <ActivityIndicator size='large' color='#272362' />
              </View>
            );
          }

          const [selectedValue, setSelectedValue] = this.state.gender;
          
        
        return (  
            
        <View style={styles.container}>
       
        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          placeholder="Name"
        />

        <Switch
        value={this.state.personActive}
        onValueChange={(val) => this.changeActiveState(val)}
        disabled={false}
        activeText={'isActive'}
        inActiveText={'Disabled'}
        backgroundActive={'green'}
        backgroundInactive={'gray'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'#000000'}
        width={100}/>
      
        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          placeholder="Age"
          keyboardType='number-pad'
        />

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          placeholder="About"
        />

        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 180 }}
          //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          placeholder="Pick a Gender"
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});