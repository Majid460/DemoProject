import React,{useState} from "react";
import {Text,View} from 'react-native'
import { Input } from 'react-native-elements'
import styles from '../StyleSheet/styles'
const Test=()=>{
    const [isFocused, setFocused] = useState(false);
    const [feedback, setFeedback] = useState('');

    return (
        <View style={[styles.container,{marginBottom:20,paddingBottom:10}]}>
            <Text style={{alignSelf:'center',color:'white',fontSize:24}}>Input</Text>
            <View style={{flex:2}}>

            </View>
            <View style={{flex:1}}>
            
             <Input
             onFocus={() => {
                setFocused(true);
            }}
            onBlur={() => {
                setFocused(false);
            }}
            multiline={true}
            borderColor={isFocused ? '#F9B34C' : 'gray'}
            borderWidth={isFocused ? 2 : 0.5}
            blurOnSubmit
            autoCapitalize='sentences'
            autoCorrect={false}
            selectionColor='#F9B34C'
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder='Type your suggestion (if Any)'
            value={feedback}
            onChangeText={(newFeedback) => {
                setFeedback(newFeedback)
            }}
             />
            </View>
            
        </View>
    )
}
export default Test;