import React from 'react';
import { Text, View } from 'react-native';
import { ListItem} from "react-native-elements";
import Stylesheet from './Stylesheet';


//Returns formatted date as a String in form Month D, YYYY
//Requires a String date formatted as YYYY-MM-DD
convertDate = (preConvertDate) => {

    //Splits date into its parts for easy conversion
    year = preConvertDate.substring(0, 4);
    month = preConvertDate.substring(6, 7);
    day = preConvertDate.substring(8, 10);

    //Swaps month number for month name
    switch (month) {
        case '1':
            month = 'January'
            break;
        case '2':
            month = 'February'
            break;
        case '3':
            month = 'March'
            break;
        case '4':
            month = 'April'
            break;
        case '5':
            month = 'May'
            break;
        case '6':
            month = 'June'
            break;
        case '7':
            month = 'July'
            break;
        case '8':
            month = 'August'
            break;
        case '9':
            month = 'September'
            break;
        case '10':
            month = 'October'
            break;
        case '11':
            month = 'November'
            break;
        case '12':
            month = 'December'
            break;
        
        default:
            break;
    }

    //Tests values of each part of the date
    console.log('Year: ' + year)
    console.log("Month: " + month)
    console.log("Day: " + day)


    //Returns formatted date in form Month D, YYYY
    returnValue = month + " " +  day + ", " + year

return returnValue
}

//Returns the render for the Address ListItem on contactDetails
//Requires Object Array for individual Contact
export function renderAddress (item) {
    return (
        <View>
        {item.value.street ? (
            <ListItem     
            bottomDivider
            >

            <ListItem.Content>
            <ListItem.Title style={Stylesheet.contactDetailLabel}>{item.label.toUpperCase()}:</ListItem.Title>
            <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{
                                <View>
                                    <Text style={Stylesheet.contactDetailSubtitle}>{item.value.street}</Text>
                                    <Text style={Stylesheet.contactDetailSubtitle}>{item.value.city}, {item.value.state} {item.value.zipCode}, {item.value.country}</Text>
                                </View>}
            </ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            ): null}
        </View>
        );
    }

//Returns the render for the Phone ListItems on contactDetails
//Requires Object Array for individual Contact
export function renderPhone (item) {
    return (
        <View>
            {item.value.home ? (
                <ListItem     
                bottomDivider                 
                >
                 
                <ListItem.Content>
                <ListItem.Title style={Stylesheet.contactDetailLabel}>{item.label.toUpperCase()}:</ListItem.Title>
                <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{item.value.home}</ListItem.Subtitle>
                </ListItem.Content>
                    <Text style = {Stylesheet.elementStyling} >Home</Text>
                </ListItem>
                ): null}
                
                
            {item.value.mobile ? (
                <ListItem     
                bottomDivider
                >
                
                <ListItem.Content>
                <ListItem.Title style={Stylesheet.contactDetailLabel}>{item.label.toUpperCase()}:</ListItem.Title>
                <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{item.value.mobile}</ListItem.Subtitle>                
                </ListItem.Content>
                    <Text style = {Stylesheet.elementStyling}>Mobile</Text>
                </ListItem>
                ): null}

            {item.value.work ? (
                 <ListItem     
                bottomDivider
                >

                <ListItem.Content>
                <ListItem.Title style={Stylesheet.contactDetailLabel}>{item.label.toUpperCase()}:</ListItem.Title>
                <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{item.value.work}</ListItem.Subtitle>
                </ListItem.Content>
                    <Text style = {Stylesheet.elementStyling}>Work</Text>
                </ListItem>
                ): null}


        </View>
        );
    }

//Returns the render for the Birthdate ListItem on contactDetails
//Requires Object Array for individual Contact
export function renderBirthdate (item) {

    birthDateConverted = this.convertDate(item.value);

    return (
            <View>
            {item.value ? (
                <ListItem     
                bottomDivider
                >

                <ListItem.Content>
                <ListItem.Title style={Stylesheet.contactDetailLabel}>{item.label.toUpperCase()}:</ListItem.Title>
                <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{birthDateConverted}</ListItem.Subtitle>
                </ListItem.Content>                
                </ListItem>
                ): null}
            </View>
            );
    }

//Returns the render for the Email ListItem on contactDetails
//Requires Object Array for individual Contact
export function renderEmail (item) {
    return (
            <View>
            {item.value ? (
                <ListItem     
                bottomDivider
                >

                <ListItem.Content>
                <ListItem.Title style={Stylesheet.contactDetailLabel}>EMAIL:</ListItem.Title>
                <ListItem.Subtitle style={Stylesheet.contactDetailSubtitle}>{ item.value}</ListItem.Subtitle>
                </ListItem.Content>
                 
                </ListItem>
                ): null}
            </View>
        );
    }

