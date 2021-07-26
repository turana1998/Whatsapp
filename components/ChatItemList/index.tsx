import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { Chatroom } from "../../types";
import styles from "./style";

export type ChatlistProps = {
    chatroom: Chatroom
}
const ChatItemList = (props: ChatlistProps) => {
    const { chatroom } = props;

    const user = chatroom.users[1];
    return (
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
                    <Text style={styles.content}>
                        {chatroom.lastMessage.content}
                    </Text>
                </View>
            </View>
            <Text style={styles.time}>
                {moment(chatroom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
            {/* <Text style={styles.time}>Yesterday</Text> */}
        </View>
    )
};


export default ChatItemList