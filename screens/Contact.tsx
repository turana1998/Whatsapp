

import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ContactItemList from '../components/ContactItemList';
import Users from '../data/Users';
import NewMessage from '../components/newMessage';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={{width:'100%'}}
      data={Users}
      renderItem={({item})=>
    <ContactItemList user={item}
    keyExtractor={(item)=>item.id}
    ></ContactItemList>
    }
      ></FlatList>
      {/* <ChatItemList chatroom={Chatroom[0]}/> */}
      <NewMessage></NewMessage>
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
