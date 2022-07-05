import React,{Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';


export default class RaptorNestActivityScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header centerComponent = {{text : "Raptor Nest Activity Form" , style:{fontSize:20,fontWeight : "bold"}}}/>
           
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1
    }
})