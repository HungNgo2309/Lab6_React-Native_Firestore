import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import { create } from "react-test-renderer";
import Home from "./HomeScreen";
import SearchAutoComplete from "./Search";
import { HomeStack } from "./HomeStack";
import Logout from "./Logout";

const Tab = createBottomTabNavigator();
const Tabs=()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                showLabel:false,
                headerShown:false,
                style:{
                    height:"10%",
                    backgroundColor:'black'
                },
                tabBarIcon:({focused})=>{
                    const tintColor=focused?'white':'gray';
                    switch(route.name){
                        case "Home":
                            return(
                                <Image
                                source={require('../img/dashboard_icon.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor:tintColor,
                                    width:25,
                                    height:25
                                }}/>
                            )
                        case "Search":
                            return(
                                <Image
                                source={require('../img/dashboard_icon.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor:tintColor,
                                    width:25,
                                    height:25
                                }}/>
                            )
                        case "Notification":
                            return(
                                <Image
                                source={require('../img/notification_icon.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor:tintColor,
                                    width:25,
                                    height:25
                                }}/>
                            )
                        case "Setting":
                            return(
                                <Image
                                source={require('../img/menu_icon.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor:tintColor,
                                    width:25,
                                    height:25
                                }}/>
                            )
                    }
                }
            })}>
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Search" component={SearchAutoComplete}/>
                <Tab.Screen name="Notification" component={Home}/>
                <Tab.Screen name="Setting" component={Logout}/>
        </Tab.Navigator>
    )
}
export default Tabs;