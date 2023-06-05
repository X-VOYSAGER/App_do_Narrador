import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};



export default class Meh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        if (this.state.fontsLoaded) {
            SplashScreen.hideAsync();
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Criar Histórias</Text>
                        </View>
                    </View>
                </View>

            )
        }
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
    },
    droidSafeArea: {
        marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row",
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center",
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans",
    },
    fieldsContainer: {
        flex: 0.85,
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain",
    },
    inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        marginTop: RFValue(10),
        fontFamily: "Bubblegum-Sans",
    },
    inputFontExtra: {
        marginTop: RFValue(15),
    },
    inputTextBig: {
        textAlignVertical: "top",
        padding: RFValue(5),
    },
});
