import React, {Component} from 'react';  
import { ActivityIndicator, View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';  
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Stylesheet from './Stylesheet';



export default class landingPage extends Component {  

  //Sets starting state to loading while render populates
  constructor() {
      super();
      this.state = {
          isLoading: true,

          HeadTable: ['Name', 'Date Registered', 'Is Active', 'Edit'],
          DataTable: [[]]

        };
    }

// handles the mount information, setting session variables, etc
componentDidMount= async() =>{

  this.fetchPeople();
  
  
  //console.log("Data Table:" + this.state.DataTable[0][0]);
}


fetchPeople = async () =>{

  const url = "http://localhost:4500/people";
  

  //Fetches JSON
  fetch(url)
  .then (res => res.json())
  .then (res => {
    

    this.setState({
          data: res,
          isLoading: false
      })

      this.assignDataToTable(res);
  })
  .catch(error => {
    //Reports error if fetch and assignment fails
      console.log("get data error from:" + url + " error:" + error);
    });

    
}


assignDataToTable = async (peopleList) =>{
  const elementButton = (value) => (
    <Button
      title="Edit"
      onPress={() => this.onPressItem(value)}
    />
  );


  var peopleData=[];
  var currentPersonIndex = 0;

  console.log("Current Person Name: " + peopleList[currentPersonIndex].name);

  peopleList.forEach(person => {
      console.log("Person Info: " + person.name);

      if (person.isActive == true) {
        person.isActive = "isActive";
      } else {
        person.isActive = "Disabled";
      }
      
      //using phone as placefiller for edit
      peopleData.push({name: person.name, registered: person.registered, isActive: person.isActive, edit: elementButton(person)});

      
  });

  console.log("People Data: " + JSON.stringify(peopleData[0]));

  //var outputData = peopleData.map( Object.values );

  var outputData = peopleData.map(function(obj) {
    return Object.keys(obj).map(function(key) { 
      return obj[key];
    });
  });
  
  console.log("Output Data: "+ outputData[2])
  this.setState({
    DataTable: outputData
  })

}





onPressItem = (personInfo) => {
console.log("Person Info Name: " + personInfo.name);
  this.props.navigation.navigate('personEditPage');
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
            
        <View style={styles.containerOld}>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
              <Row data={this.state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Rows data={this.state.DataTable} textStyle={styles.TableText}/>
            </Table>
          </View>
        </View>

      
            
        );  


        
    }  
} 

const styles = StyleSheet.create({
  containerOld: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    minWidth: 500,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});