import { Entypo, FontAwesome5, MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import React, { useState } from 'react';
import {Text,View,TextInput, TouchableOpacity} from 'react-native';
import styles from './style'
const InputBox=()=>{

    const [message,setMessage]=useState(); 

    const onMicrophonePress=()=>{
        console.warn("Microphone")
    }

    const onSendPress=()=>{
        console.warn(`Sending ... ${message}`);
        setMessage('');
    }
    const onPress=()=>{
        if(!message){
            onMicrophonePress();
        }
        else{
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.maincontainer}>
              <FontAwesome5 name="laugh-beam" size={24} color={"grey"}></FontAwesome5>
              <TextInput style={styles.textinput}
               multiline
               placeholder={"Type a message"}
               value={message}
               onChangeText={setMessage}
              ></TextInput>
              <Entypo name="attachment" size={24} color={"grey"}style={styles.icon}></Entypo>
            {!message && <Entypo name="camera" size={24} color={"grey"}style={styles.icon}></Entypo>}  
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttoncontainer}>
                {
                    !message ? <MaterialCommunityIcons name="microphone" size={24} color={"white"}></MaterialCommunityIcons> :
                    <MaterialIcons name="send" size={24} color={"white"}></MaterialIcons>

                }
            </View>
            </TouchableOpacity>
        </View>
       
    )
}
export default InputBox;