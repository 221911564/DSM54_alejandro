//importamos react
import React, { Component } from 'react';
//importamos componetes nativos en react-native
import {View, Text} from 'react-native';

//declaración de un componente de class

class CoinDetailScreen extends Component{
    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Mi primer pantalla detalle Pantalla De Detalle DEL DSM-54</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "yellow"
    },
    text:{
        color : "#000",
        textAlign: "center",
    }

});

export default  CoinDetailScreen;