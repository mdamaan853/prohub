import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primary,bglight } from "../../App.css.module.js"

export default function Start() {

  return (
    <View style={styles.container}>
        <View style={{marginTop:"150px"}}>
            <Text style={styles.f1}>Partnership</Text>
        <View
             style={{
             borderBottomColor:primary,
             borderBottomWidth: 3,
                 }}
        />
        </View>
        <View style={{marginTop:"40px",alignItems:"center"}}>
        <Text style={styles.f1}>Connecting</Text>
        <Text style={styles.f2}>You to your future</Text>
        <Text style={styles.f1}>Growth</Text>
        <Text style={styles.f2}>Partners</Text>
        </View>
      <StatusBar style="auto" />
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
    marginVertical:'10px',
    color:primary
  },
  f2:{
    fontSize:35,
    fontStyle:"italic",
    fontWeight:"bold",
    alignItems: 'center',
    color:primary
  },
});
