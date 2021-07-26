import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types'
import styles from './style'
export type ChatMessageprops = {
    messages: Message;
}
const ChatMessage = (props: ChatMessageprops) => {
    const { messages } = props;

    const isMymsg=()=>{
      return  messages.user.id==='u1';
    }
    return (
        <View style={ styles.container }>
            <View style={[
                styles.messageBox,
                {
                    backgroundColor:isMymsg() ? '#DCF8C5' : 'white',
                    marginLeft:isMymsg() ? 50: 0,
                    marginRight:isMymsg() ? 0: 50
                }
              
            ]}>
               {!isMymsg() && <Text style={ styles.name }>{messages.user.name}</Text>}
                <Text style={ styles.message }>{messages.content}</Text>
                <Text style={ styles.time }>{moment(messages.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;