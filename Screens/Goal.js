import React,{useState,useEffect} from "react";
import {KeyboardAvoidingView, ScrollView, Text,View,TouchableOpacity} from 'react-native'
import styles from "../StyleSheet/styles";
import Icon2  from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from "react-native-size-matters";
import {ref,set } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { useSelector} from "react-redux";
const Goal=({navigation})=>{
    const [backgroundColor1,setBackgroundColor1]=useState('white');
    const [backgroundColor2,setBackgroundColor2]=useState('white');
    const [backgroundColor3,setBackgroundColor3]=useState('white');
    const [backgroundColor4,setBackgroundColor4]=useState('white');
    const LoginEmail=useSelector(state=>state.EmailReducer.email)
    const [goal,setGoal]=useState('');
    const [date_,setDate]=useState('');
    useEffect(() => {
        var today = new Date();

       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
       
       setDate(date);
    }, [goal]);
    const colorChange=()=>{
        setBackgroundColor1('#C1B890');
        setBackgroundColor2('white');
        setBackgroundColor3('white');
        setBackgroundColor4('white');
        setGoal('Weight Loss')
        }
      const colorChange2=()=>{
         
          setBackgroundColor2('#C1B890');
          setBackgroundColor1('white');
          setBackgroundColor3('white');
          setBackgroundColor4('white');
          setGoal('Weight Gain')
          }
          const colorChange3=()=>{
         
            setBackgroundColor3('#C1B890');
            setBackgroundColor1('white');
            setBackgroundColor2('white');
            setBackgroundColor4('white');
            setGoal('Muscle Gain')
            }
            const colorChange4=()=>{
         
              setBackgroundColor4('#C1B890');
              setBackgroundColor3('white');
              setBackgroundColor2('white');
              setBackgroundColor1('white');
              setGoal('Stay Fit')
              }
          const GoTo=()=>{
        var userEmail = LoginEmail.replace(".", ",");
           set(ref(database,'Goal/'+userEmail),{
            Goal:goal,
            date:date_
           }).then(()=>{  
              navigation.navigate('Exercise')})
          .catch((error)=>
          { Alert.alert('You already Add Your Data')
            console.log(error);
          })
          }    
    return(
  <KeyboardAvoidingView style={styles.container}>
    <ScrollView>
       <View style={[styles.viewContainer,{marginTop:moderateScale(80),marginHorizontal:20}]}>
        <View style={{flex:1,backgroundColor:'white',borderRadius:10,paddingHorizontal:20,paddingVertical:40}}>
          <Text style={styles.heading}> Goal </Text>
          
            <View style={[styles.InputViewTEEg]}>
                     <View style={styles.InputViewTE}>
                         <Icon2
                          name='human-handsdown'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5,marginBottom:7}}
                          />
                         <Text style={{marginTop:10,marginStart:5,color:'black',fontSize:16,marginBottom:5}}>Please Select Goal</Text>
                         
                        </View>
                      <View style={styles.InputViewTE}> 
                      <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor1,borderRadius:10}}onPress={()=>{colorChange()}} >
                      <Icon2
                           name='walk'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                     
                     
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:10,color:'black'}}> Weight Loss</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor2,marginStart:5,borderRadius:10}} onPress={()=>{colorChange2()}}>
                          <Icon2
                           name='run'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5,marginRight:5}}
                       />
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:10,color:'black'}}>Weight Gain</Text>
                      </TouchableOpacity>

                  
                  </View>
                  <View style={styles.InputViewTE}>
                  <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor3,borderRadius:10}}onPress={()=>{colorChange3()}} >
                      <Icon2
                           name='weight-lifter'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:10,marginStart:5,color:'black'}}>Muscle Gain </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor4,borderRadius:10,marginStart:5}}onPress={()=>{colorChange4()}} >
                      <Icon2
                           name='run-fast'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                      />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,marginLeft:5,color:'black'}}> Stay Fit</Text>
                    </TouchableOpacity>
                  </View>
                </View> 
                <View style={[styles.InputView,{marginBottom:30}]}>
                 <Text style={styles.Paragraph}> Click Save to find relative Exercise </Text>
                </View>
                      <TouchableOpacity
                          style={ goal!='' ?
                            {
                           ...styles.enabledButtonStyleGoal,
                           
                           }
                           :{
                             ...styles.disabledButtonStyleGoal,
                             
                           }}  
                          disabled={goal!='' ?false:true} onPress={()=>{GoTo()}}
                          >

                         <Text style={[styles.buttonText,{textAlign:'center'}]}> Save </Text>
                        </TouchableOpacity>
                        
                          
                
          </View>
       </View>
    </ScrollView>
    
  </KeyboardAvoidingView>
    );
}
export default Goal;