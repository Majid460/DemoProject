import React ,{useState,useEffect}from "react";
import { ScrollView } from "react-native";
import {View,Text,KeyboardAvoidingView,TextInput,TouchableOpacity,Modal} from 'react-native'
import styles from "../StyleSheet/styles";
import Icon2  from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from "react-native-size-matters";

const BMI=({route,navigation})=>{
    const {BMI_ME}=route.params;
    const BMI_=JSON.parse(JSON.stringify(BMI_ME));
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [BMI,setBMI]=useState(0);
    const [BMIME,setBMIME]=useState(BMI_);
    const [Enable,setEnable]=useState(false);
    const  [visible,setVisible]=useState(false)
    const [healthStatus,setHealthStatus]=useState('');
    const [Description,setDescription]=useState('');
    var BMITotal;
    useEffect(() => {
        if(weight!=='' && height!=='')
          {  
            setEnable(false);
          }
          else
          {
            setEnable(true);
          }
        
        
    }, [weight,height]);
    
    
    const Calculate=()=>{
        
        let heightInMeter=parseInt(height)*0.0254;
         let heightSquare=heightInMeter*heightInMeter;
         BMITotal=Number(weight/heightSquare).toFixed(2);
         setBMI(BMITotal);
         health();
         
         setVisible(true);
    }
    const health=()=>{
      let checkBMI=parseFloat(BMITotal)
      console.log(checkBMI)
      if(checkBMI<=18.5)
      {
       
     setHealthStatus('Under Weight');
     setDescription('Your BMI is below the normal BMI Standard (18.5) you have to eat healthy foods and Exercise daily')
    
     return;
    }
    if (checkBMI>18.5 && checkBMI<25)
    {
     setHealthStatus('Normal');
     setDescription('You have to Maintain That BMI and to maintain you should aware about what to eat that will maintain your current status')
     
     return;
   }
    if (checkBMI>=25 && checkBMI<40)
    {
      setHealthStatus('Over Weight')
      setDescription('Your BMI is More than normal BMI Standard (24.9) you have to do more exercise daily and eat low Carb and low Fat diet ')
      
      return;
     }
    if (checkBMI>40)
    {
     setHealthStatus('Obesity')
     setDescription('You are in Obesity Disease please refer to certain Nutritionist to overcome this disease')
     setVisible(true);
     return;
   }
     }  
 
    return(
        <KeyboardAvoidingView style={styles.container} enabled>
          <ScrollView>
                <View style={[styles.viewContainer,{marginTop:moderateScale(100),marginHorizontal:20}]}>
                   <View style={styles.mainTextInputView}>
                      <Text style={styles.heading}>BMI Calculator</Text>
                      <View style={{alignSelf:'center',marginVertical:20}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#20471C'}}> My BMI :: {BMIME}</Text>
                        </View>
                      
                      <View style={styles.InputView}>
                         <Icon2
                          name='weight-kilogram'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5}}
                          />
                       <TextInput style={styles.textInput}
                           placeholder="Weight (Kg)"
                           keyboardType='numeric'
                           placeholderTextColor="#666666"
                           onChangeText={(text) => setWeight(text)}
                           value={weight}
                           blurOnSubmit={true}
                        />
                  </View>
                  <View style={styles.InputView}>
                       <Icon2
                         name='human-male-height'
                         size={28}
                         color='#023A65'
                         style={{marginTop:9,marginLeft:5}}
                         />
                       <TextInput style={styles.textInput}
                           placeholder="Height (Inches)"
                           keyboardType='numeric'
                           placeholderTextColor="#666666" 
                           onChangeText={(text) => setHeight(text)}
                           value={height}
                           blurOnSubmit={true}
                        />
                   </View>
                   <View style={styles.InputViewResult}>
                    <Text style={{flex:1,flexDirection:'row',alignSelf:'center',color:'black'
                              ,fontSize:20,marginStart:10,marginVertical:10,fontWeight:'bold'  }}>BMI ::  {BMI}</Text>
                   </View>
                   <View style={[styles.buttonView,{paddingVertical:20,marginTop:7,flexDirection:'row',alignSelf:'center',marginHorizontal:20}]}>
                      <TouchableOpacity
                          style={ !Enable ?
                            {
                           ...styles.enabledButtonStyle,
                           
                           }
                           :{
                             ...styles.disabledButtonStyle,
                             
                           }} 
                          disabled={Enable}
                          onPress={()=>{Calculate()}}>
                         <Text style={{fontSize:17,color:'white',paddingVertical:10,textAlign:'center'}}>  Calculate BMI  </Text>
                        </TouchableOpacity>
                       
                   </View>
                    </View>
                    <Modal
                      visible={visible}
                      style={{padding:10}}
                      transparent={true} 
                      >
                      <View style={styles.centeredView1}>
                           <View style={[styles.modalView1]}>
                                 <View style={{alignSelf:'flex-end',borderRadius:5,borderWidth:1,marginBottom:30}}>
                                  <TouchableOpacity onPress={()=>{
                                    setDescription('');
                                    setHealthStatus('');
                                    setBMI('')
                                    setVisible(false)}}>
                                    <Text style={{fontSize:20,color:'black'}}> X </Text>
                                  </TouchableOpacity>
                                </View>
                               <View style={{flexDirection:'row'}}>
                                
                                 <Text style={{fontSize:20,fontWeight:'500',color:'#20471C',marginBottom:20}}> Health Status :: </Text>
                                 <Text style={{fontSize:20,fontWeight:'500',color:'#0B0313',marginBottom:20}}>{healthStatus}</Text>
                               </View>
                               <View style={{flexDirection:'row'}}>
                                
                                <Text style={{fontSize:20,fontWeight:'500',color:'#20471C',marginBottom:20}}> BMI  :: </Text>
                                <Text style={{fontSize:20,fontWeight:'500',color:'#0B0313',marginBottom:20}}>{BMI}</Text>
                              </View>
                           <View style={[{borderWidth:1,borderRadius:10,alignItems:'center'}]}>
                             <Text style={{fontSize:18,fontWeight:'500',color:'#0B0313',textAlign:'center',marginTop:10}}>{Description}</Text>
                           </View>
                        </View>
                    </View>
                    </Modal>  
                 </View>
          </ScrollView>
        </KeyboardAvoidingView>
        
    )
}
export default BMI;