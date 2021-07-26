import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style'
const NewMessage = () => {

    const navigation = useNavigation();

    const onpress = () => {
        navigation.navigate('Contacts')
    }
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onpress}>
            <MaterialCommunityIcons
                name="message-reply-text" size={28} color={"white"}>

            </MaterialCommunityIcons>
            </TouchableOpacity>
        </View >
       
    )
}

export default NewMessage;