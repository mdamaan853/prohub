import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { primary,bglight,lightcard } from "../../App.css.module.js"
import InputField from "../components/InputField"
import Button from "../components/Button"

export default function Login() {
  // const [userId, setUserId] = React.useState('');
  return (
    <View style={styles.container}>
        <View style={{marginTop:40}}>
            <Text style={styles.f1}>Profile</Text>
        </View>
        <View style={styles.profileImg}>
        <Image 
        source={require('../images/demoprofile.gif')} 
        style={{width:80 ,height:80}}
        resizeMode={'cover'} 
        />
        </View>
        <View style={{marginTop:25}}>
            <Text style={styles.f1}>Log In</Text>
        </View>

        <View style={{minWidth:200,marginVertical:20}}>
      <InputField
      style={styles.input}
        placeholder="Email or Phone"
        // onChangeText={text => setUserId(text)}
        // value={userId}
      />
 
      <InputField
      style={styles.input}
        placeholder="Password"
        // onChangeText={text => setUserId(text)}
        // value={userId}
      />
      <Text style={styles.forgetText}>Forget Password</Text>
      <View 
      style={styles.submit}>
      <Button
      styleBtn={styles.styleBtn}
      styleText={styles.styleText}
      // onPress={}
      title="Log In"
      />
      </View>
      <View 
      style={styles.submit}>
      <Button
      styleBtn={styles.styleBtn}
      styleText={styles.styleText}
      // onPress={}
      title="Sign In"
      />
      </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:bglight,
    alignItems: 'center',
  },
  f1:{
    fontSize:50,
    fontWeight:"bold",
    alignItems: 'center',
    marginVertical:10,
    color:primary
  },
  forgetText:{
    fontSize:12,
    fontStyle:"italic",
    marginVertical:10,
    paddingStart:8,
    color:"red",
  },
  input:{
    padding:10,
    width:300,
    borderRadius:12,
    marginVertical:7,
    backgroundColor:lightcard,
    // borderColor:"black"
  },
  styleBtn:{
    margin:2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
    backgroundColor:primary,
  },
  styleText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  submit:{
    // flexDirection: 'row',
    // justifyContent: 'center',
    marginVertical:6,
    marginHorizontal:50
  },
  otpBtn:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  profileImg:{
    //   display:"flex",
    //   border:"1px solid",
    //   flexDirection:"row-reverse"
  }
});
