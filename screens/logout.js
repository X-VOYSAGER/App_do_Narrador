import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import firebase from "firebase";



export default class Logout extends Component {

    componentDidMount() {
        firebase.auth().signOut();
        this.props.navigation.replace("Login")
    }
    render() {

        return (
            <View style={styles.container}>

                <Text>Logout</Text>
            </View>


        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
    },
});
