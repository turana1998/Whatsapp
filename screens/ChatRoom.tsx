import React from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native'
// import { FlatList } from 'react-native-gesture-handler';
import ChatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox';
const ChatRoomScreen = () => {

    const route = useRoute();
    return (
        <ImageBackground style={{width:'100%',height:'100%'}} source={BG}>
            <FlatList
                data={ChatRoomData.messages}
                renderItem={({ item }) =>
                    <ChatMessage messages={item}></ChatMessage>
                }
                inverted
            ></FlatList>
            <InputBox></InputBox>
        </ImageBackground>

    )
}

export default ChatRoomScreen;