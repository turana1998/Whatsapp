import moment from "moment";
import React from "react";
import { View, Text, Image ,TouchableWithoutFeedback} from "react-native";
import { User } from "../../types";
import styles from "./style";
import {useNavigation} from '@react-navigation/native';
// import { useNavigation } from "@react-navigation/core";
export type ContactlistProps = {
    user: User
}
const ContactItemList = (props: ContactlistProps) => {
    const { user } = props;
    const navigation=useNavigation();

    const onclick=()=>{
        // navigation.navigate('ChatRoom',{
        //     id:chatroom.id,
        //     name:user.name,
        // });
     }
    return (
        <TouchableWithoutFeedback onPress={onclick}>
               <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: user.imageUri,
                    }}
                />
                <View style={styles.midContainer}>
                    <Text style={styles.userName}>
                        {user.name}
                    </Text>
                    <Text style={styles.status} numberOfLines={2}>
                {user.status}
            </Text>
                 
                </View>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
     
    )
};


export default ContactItemList