/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contact:undefined;
  ChatRoom:undefined;
};

export type BottomTabParamList = {
  Camera: undefined;
  Chat: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User={
  id:String;
  name:String;
  imageUrl:String;
  status:String;
}

export type Message={
  id:String;
  content:string;
  createdAt:number;
  user:User;
  
}
export type Chatroom={
  id:String;
  users:User[];
  lastMessage:Message;
}
