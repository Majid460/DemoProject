import React ,{useEffect,useState}from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import {View,Text,Alert,TouchableOpacity} from 'react-native';
import styles from '../StyleSheet/styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moderateScale } from "react-native-size-matters";

const HealthStatus =({route,navigation})=>{

    const {BMI_ME,BMI}=route.params;
    const [MYbMI,setMyBMI]= useState(BMI_ME);
    const [OtherBMI,setOtherBMI]=useState(BMI);
    const [healthStatus,setHealthStatus]=useState('');
    const [Description,setDescription]=useState('');
    
   useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
        console.log(OtherBMI)
        HealthStatusFinder();
    })
    return unsubscribe;
   },[BMI_ME]) 
   const HealthStatusFinder=()=>{
   if(MYbMI<=18.5)
   {
    setHealthStatus('Under Weight');
    setDescription('Your BMI is below the normal BMI Standard (18.5) you have to eat healthy foods and Exercise daily')
   }
   else if (MYbMI>18.5 && MYbMI<25)
   {
    setHealthStatus('Normal');
    setDescription('You have to Maintain That BMI and to maintain you should aware about what to eat that will maintain your current status')
   }
   else if (MYbMI>=25 && MYbMI<40)
   {
     setHealthStatus('Over Weight')
     setDescription('Your BMI is More than normal BMI Standard (24.9) you have to do more exercise daily and eat low Carb and low Fat diet ')
   }
   else if (MYbMI>=40)
   {
    setHealthStatus('Obesity')
    setDescription('You are in Obesity Disease please refer to certain Nutritionist to overcome this disease')
   }
   }

  
    return(
        <KeyboardAvoidingView style={styles.container} enabled>
            <ScrollView>
               <View style={[styles.viewContainer,{marginTop:moderateScale(80),marginHorizontal:20}]}>
                    <View style={styles.mainTextInputView}>
                      <Text style={styles.heading}>Health Status</Text>
                         <View style={{marginVertical:20,alignItems:'center'}}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#20471C'}}> My BMI :: </Text>
                            <Text style={{fontSize:20,fontWeight:'500',color:'#0B0313'}}>{MYbMI}</Text>
                            </View>
                           <View style={{flexDirection:'row'}}>
                           <Text style={{fontSize:20,fontWeight:'500',color:'#20471C'}}> My Health Status :: </Text>
                           <Text style={{fontSize:20,fontWeight:'500',color:'#0B0313'}}>{healthStatus}</Text>
                           </View>
                           <Text style={{fontSize:18,fontWeight:'500',color:'#0B0313',textAlign:'center',marginTop:10}}>{Description}</Text>
                        </View>
                        <View style={[styles.mainTextInputView,{borderWidth:1,borderRadius:10,alignItems:'center'}]}>
                           <Text style={[styles.heading,{fontSize:18,textAlign:'center'}]}>To Find Health Status ?</Text>
                           <View style={{flexDirection:'row'}}>
                           <Text style={{fontSize:18,fontWeight:'500',color:'#0B0313',textAlign:'center'}}>To find health Status
                           </Text>
                           <TouchableOpacity onPress={()=>navigation.navigate('BMI',{BMI_ME:MYbMI})}>
                           <Text style={{fontSize:18,fontWeight:'500',color:'#7A49AB'}}> Click here</Text>
                           </TouchableOpacity>
                           </View>
                           
                          
                           
                        </View>
                    </View>      
                </View>
            </ScrollView>
              
        </KeyboardAvoidingView>
       
    );
}
export default HealthStatus;