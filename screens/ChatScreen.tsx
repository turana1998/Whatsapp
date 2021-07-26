import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatItemList from '../components/ChatItemList';
import Chatroom from '../data/Chatroom';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={{width:'100%'}}
      data={Chatroom}
      renderItem={({item})=>
    <ChatItemList chatroom={item}
    keyExtractor={(item)=>item.id}
    ></ChatItemList>
    }
      ></FlatList>
      {/* <ChatItemList chatroom={Chatroom[0]}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
