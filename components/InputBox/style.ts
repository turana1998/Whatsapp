import {StyleSheet} from 'react-native'
import Colors  from '../../constants/Colors';

const styles=StyleSheet.create({
   container:{
       flexDirection:'row',
       margin:10,
       alignItems:'center'
   },
   maincontainer:{
    flexDirection:'row',
    backgroundColor:'white',
    padding:10,
    marginRight:10,
    borderRadius:50,
    flex:1,
    alignItems:'center'
   },
   buttoncontainer:{
       backgroundColor:Colors.light.tint,
       borderRadius:50,
       width:50,
       height:50,
       justifyContent:"center",
       alignItems:"center"
   },
   textinput:{
       flex:1,
       marginHorizontal:10
   },
   icon:{
      marginHorizontal:5
   }
});

export default styles;