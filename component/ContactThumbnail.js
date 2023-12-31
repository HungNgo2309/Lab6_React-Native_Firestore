import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import protoTypes from 'prop-types'
const ContactThumbnail =({name,phone,onPress,})=>
{
    const colorStyle={
        color:'black',
    };
    const ImageComponent = onPress?TouchableOpacity:View;

    return(
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image
                source={
                    require('../img/person.png')}
                style={styles.avatar}/>                    
            </ImageComponent>
            {name!==''&&<Text styles={[styles.name,colorStyle]}>{name}</Text>}
            {phone!==''&&(
                <View style={styles.phoneSection}>
                    <Icon name="phone" size={16} style={{color:"blue"}}/>
                    <Text style={[styles.phone,colorStyle]}>{phone}</Text>
                </View>
            )}
        </View>
    );
}
export default ContactThumbnail;
ContactThumbnail.protoTypes={
    name: protoTypes.string,
    phone:protoTypes.string,
    onPress:protoTypes.func,
};
ContactThumbnail.defaultProps={
    name:'',
    phone:'',
    textColor:'white',
    onPress:null,
};
const styles=StyleSheet.create({
    container:{
        paddingVertical: 30,
        marginHorizontal: 15, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar:{
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name:{
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2, 
        fontWeight: 'bold',
    },
    phoneSection:{
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone:{
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
})




