import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { primary,bglight,lightcard } from "../../App.css.module.js"
import InputField from "../components/InputField"
import Button from "../components/Button"

export default function Register() {
  // const [userId, setUserId] = React.useState('');
  return (
    <View style={styles.container}>
        <View style={{marginTop:25}}>
            <Text style={styles.f1}>Register</Text>
        </View>
        <View style={{minWidth:200,marginVertical:20}}>
      <InputField
      style={styles.input}
        placeholder="Email or Phone"
        onChangeText={text => setUserId(text)}
        // value={userId}
      />
 
      <InputField
      style={styles.input}
        placeholder="Password"
        onChangeText={text => setUserId(text)}
        // value={userId}
      />
      <View 
      style={styles.otpBtn}>
      <Button
         styleBtn={styles.styleBtn}
         styleText={styles.styleText}
        title="send"
      
      />
      </View>
      <InputField
      style={styles.input}
        placeholder="OTP"
        // onChangeText={text => setUserId(text)}
        // value={userId}
      />
      <View 
      style={styles.submit}>
      <Button
      styleBtn={styles.styleBtn}
      styleText={styles.styleText}
      // onPress={}
      title="Submit"
      />
      </View>

      <Text style={styles.f2}>Connecting {'\n'} You to your future {'\n'} Growth Partners</Text>
      <View 
      style={styles.submit}>
      <Button
         styleBtn={styles.styleBtn}
         styleText={styles.styleText}
         // onPress={}
      title="Login"
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
    fontStyle:"italic",
    fontWeight:"bold",
    alignItems: 'center',
    marginVertical:10,
    color:primary
  },
  f2:{
    fontSize:30,
    fontStyle:"italic",
    fontWeight:"bold",
    alignItems: 'center',
    color:primary,
    marginVertical:20,
    textAlign:"center",
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
    margin:5,
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
    marginVertical:15,
    marginHorizontal:50
  },
  otpBtn:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end"
  }
});
