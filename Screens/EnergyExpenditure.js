import React,{useState,useEffect} from 'react';
import {ScrollView, Text,View,KeyboardAvoidingView,TextInput,TouchableOpacity,Modal,Image} from 'react-native';
import styles from '../StyleSheet/styles'
import { moderateScale } from 'react-native-size-matters';
import Icon2  from 'react-native-vector-icons/MaterialCommunityIcons';
const EnergyExpenditure=({route,navigation})=>{
  const {BMR}=route.params;
  const BMR_=JSON.parse(JSON.stringify(BMR));
  const [PAL,setPAL]=useState('');
  const [OtherPAL,setOtherPAL]=useState('');
  const [TE,setTE]=useState(0);
  const [backgroundColor1,setBackgroundColor1]=useState('white');
  const [backgroundColor2,setBackgroundColor2]=useState('white');
  const [backgroundColor3,setBackgroundColor3]=useState('white');
  const [backgroundColor4,setBackgroundColor4]=useState('white');
  const [backgroundColor11,setBackgroundColor11]=useState('white');
  const [backgroundColor12,setBackgroundColor12]=useState('white');
  const [visible,setVisible]=useState(false);
  const [Enable,setEnable]=useState(false);
  const [Button,setButton]=useState(false);
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [Age,setAge]=useState('');
  const [Gender,setGender]=useState('');
  const [otherTE,setOtherTE]=useState('')
   
 const colorChange11=()=>{
  setBackgroundColor11('#C1B890');
  setBackgroundColor12('white');
  setGender('Female');
  
  }
const colorChange12=()=>{
   
    setBackgroundColor12('#C1B890');
    setBackgroundColor11('white');
    setGender('Male');
    
    }
  const colorChange=()=>{
    setBackgroundColor1('#C1B890');
    setBackgroundColor2('white');
    setBackgroundColor3('white');
    setBackgroundColor4('white');
    setPAL('1.65');
    setEnable(true)
    setOtherPAL('1.65')
    
    }
  const colorChange2=()=>{
     
      setBackgroundColor2('#C1B890');
      setBackgroundColor1('white');
      setBackgroundColor3('white');
      setBackgroundColor4('white');
      setPAL('1.7');
      setEnable(true)
      setOtherPAL('1.7')
      
      }
      const colorChange3=()=>{
     
        setBackgroundColor3('#C1B890');
        setBackgroundColor1('white');
        setBackgroundColor2('white');
        setBackgroundColor4('white');
        setPAL('1.4');
        setEnable(true)
        setOtherPAL('1.4')
        
        }
        const colorChange4=()=>{
     
          setBackgroundColor4('#C1B890');
          setBackgroundColor3('white');
          setBackgroundColor2('white');
          setBackgroundColor1('white');
          setPAL('2.3');
          setEnable(true)
          setOtherPAL('2.3')
          
          }
          const Calculate=()=>{
            setOtherPAL('');
            let tee=parseInt(PAL)*parseInt(BMR_)
            setTE(tee);
          }
  const FindTEE=()=>{
            var BMR__;
      var heightInCm=parseInt(height)*2.54;
      console.log('HEIGHT IN cm::' + heightInCm);
      if(Gender=='Male')
      {
        
         BMR__=Number(66.5+(13.75*(parseInt(weight)))+(5.003*(heightInCm))-(6.75*(parseInt(Age)))).toFixed(2)
         console.log('My BMR Man: '+ BMR_);
      }
      else if(Gender=='Female')
      {
         BMR__=Number(665.1+(9.563*(parseInt(weight)))+(1.85*(heightInCm))-(4.676*(parseInt(Age)))).toFixed(2)
         console.log('My BMR Female: '+ BMR__);
      }
      var otherTEE=parseInt(OtherPAL)*parseInt(BMR__)
       setOtherTE(otherTEE);
          }
    return(
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
        <View style={[styles.viewContainer,{marginTop:moderateScale(70),marginHorizontal:20}]}>
           <View style={styles.mainTextInputView}>
                  <Text style={styles.heading}> Energy Expenditure</Text>
                   <View style={{borderWidth:1,borderRadius:10,alignItems:'center'}}>
                       <Text style={styles.Paragraph}> To Find Total Energy Expenditure,Select your Physical Activity level (PAL) </Text>
                       <View style={{flexDirection:'row',marginVertical:7}}>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}> My BMR :: </Text>
                            <Text style={{fontSize:16,fontWeight:'500',color:'#FF2FD9'}}>{BMR_} KCAL</Text>
                      </View>
                   </View>
                <View style={styles.InputViewTEE}>
                     <View style={styles.InputViewTE}>
                         <Icon2
                          name='human-handsdown'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5,marginBottom:7}}
                          />
                         <Text style={{marginTop:10,marginStart:5,color:'black',fontSize:16,marginBottom:5}}>Select Physical Activity Level</Text>
                         
                        </View>
                      <View style={styles.InputViewTE}> 
                      <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor1,borderRadius:10}}onPress={()=>{colorChange()}} >
                      <Icon2
                           name='walk'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                     
                     
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Normal</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor2,borderRadius:10,marginStart:5}} onPress={()=>{colorChange2()}}>
                          <Icon2
                           name='run'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5,marginRight:5}}
                       />
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Moderate</Text>
                      </TouchableOpacity>

                  
                  </View>
                  <View style={styles.InputViewTE}>
                  <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor3,borderRadius:10}}onPress={()=>{colorChange3()}} >
                      <Icon2
                           name='human-cane'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Inactive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor4,borderRadius:10}}onPress={()=>{colorChange4()}} >
                      <Icon2
                           name='run-fast'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                      />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,marginLeft:5,color:'black'}}>Very Active</Text>
                    </TouchableOpacity>
                  </View>
                </View>  
               
                         <View style={{flexDirection:'row',padding:10,borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}> My Total Energy Need :: </Text>
                            <Text style={{fontSize:17,fontWeight:'500',color:'#FF2FD9'}}> {TE} KCAL</Text>
                         </View>
                         <View style={[styles.buttonView,{paddingVertical:20,marginTop:7,flexDirection:'row',alignSelf:'center',marginHorizontal:10}]}>
                      <TouchableOpacity
                          style={ Enable ?
                            {
                           ...styles.enabledButtonStyle,
                           
                           }
                           :{
                             ...styles.disabledButtonStyle,
                             
                           }} 
                          disabled={!Enable}
                          onPress={()=>{Calculate()}}>
                         <Text style={{fontSize:17,color:'white',paddingVertical:20,textAlign:'center'}}>  Calculate TEE  </Text>
                        </TouchableOpacity>
                       <TouchableOpacity style={[styles.disabledButtonStyle]} onPress={()=>{
                         setBackgroundColor4('white');
                         setBackgroundColor3('white');
                         setBackgroundColor2('white');
                         setBackgroundColor1('white');
                         setPAL('')
                         setEnable(false)
                         setTE('')
                        setVisible(true)}}>
                       <Text style={{fontSize:17,color:'white',paddingVertical:10,textAlign:'center'}}>Manual Calculate TEE  </Text>
                       </TouchableOpacity>
                      </View>
           </View>
           <Modal transparent={true} animationType='fade' visible={visible} >
            
           <View style={styles.dimBackgroundStyle} />
               <View style={styles.modalContainerStyle}>
               <ScrollView>
                    <View style={styles.modalViewStyle}>
                         <View style={{position: "absolute",
                                right: 0,
                                marginTop: moderateScale(5),
                                marginEnd: moderateScale(10),}}>
                          <TouchableOpacity onPress={()=>{setVisible(false)
                              setBackgroundColor4('white');
                              setBackgroundColor3('white');
                              setBackgroundColor2('white');
                              setBackgroundColor1('white');
                              setBackgroundColor12('white');
                              setBackgroundColor11('white');
                              setWeight('');
                              setHeight('');
                              setAge('');
                              setGender('');
                              setOtherPAL('');
                              setButton(false)
                              setEnable(false)
                              setOtherTE('')
                              }}>
                             <Text style={{fontSize:20,padding:5,color:'black'}}> X </Text>
                          </TouchableOpacity>
                      </View>
                    <Text style={styles.heading}>Find Energy Need</Text>
                    <View style={styles.InputView}>
                         <Icon2
                          name='weight-kilogram'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5}}
                          />
                       <TextInput style={styles.textInput}
                           placeholder=" Weight (Kg)"
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
                           placeholder=" Height (Inches)"
                           keyboardType='numeric'
                           placeholderTextColor="#666666" 
                           onChangeText={(text) => setHeight(text)}
                           value={height}
                           blurOnSubmit={true}
                        />
                   </View>
                   
                   <View style={styles.InputView}>
                       <Icon2
                            name='human'
                            size={27}
                            color='#023A65'
                            style={{marginTop:9,marginLeft:5}}
                        />
                       <TextInput style={styles.textInput}
                           placeholder="Age"
                           keyboardType='numeric'
                           placeholderTextColor="#666666"
                           blurOnSubmit={true}
                           onChangeText={(text) => setAge(text)}
                           value={Age}
                        />
                   </View>
                   <View style={styles.InputView}>
                      
                       <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor11,borderRadius:10}}onPress={()=>{colorChange11()}} >
                       <Icon2
                            name='gender-female'
                            size={26}
                            color='#023A65'
                            style={{marginTop:7,marginLeft:5}}
                        />
                        <Text style={{fontSize:20,marginTop:7,marginBottom:12,marginRight:50,color:'black'}}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor12,borderRadius:10,marginStart:5}} onPress={()=>{colorChange12()}}>
                           <Icon2
                            name='gender-male'
                            size={26}
                            color='#023A65'
                            style={{marginTop:7,marginLeft:5,marginRight:5}}
                        />
                        <Text style={{fontSize:20,marginTop:7,marginBottom:12,marginRight:50,color:'black'}}>Male</Text>
                       </TouchableOpacity>

                   </View>
                   <View style={styles.InputViewTEE}>
                     <View style={styles.InputViewTE}>
                         <Icon2
                          name='human-handsdown'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5,marginBottom:7}}
                          />
                         <Text style={{marginTop:10,marginStart:5,color:'black',fontSize:16,marginBottom:5}}>Select Physical Activity Level</Text>
                         
                        </View>
                      <View style={styles.InputViewTE}> 
                      <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor1,borderRadius:10}}onPress={()=>{colorChange()}} >
                      <Icon2
                           name='walk'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                     
                     
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Normal</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor2,borderRadius:10,marginStart:5}} onPress={()=>{colorChange2()}}>
                          <Icon2
                           name='run'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5,marginRight:5}}
                       />
                       <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Moderate</Text>
                      </TouchableOpacity>

                  
                  </View>
                  <View style={styles.InputViewTE}>
                  <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor3,borderRadius:10}}onPress={()=>{colorChange3()}} >
                      <Icon2
                           name='human-cane'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                       />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,color:'black'}}>Inactive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor4,borderRadius:10}}onPress={()=>{colorChange4()}} >
                      <Icon2
                           name='run-fast'
                           size={26}
                           color='#023A65'
                           style={{marginTop:5,marginLeft:5}}
                      />
                      <Text style={{fontSize:20,marginTop:5,marginBottom:12,marginRight:20,marginLeft:5,color:'black'}}>Very Active</Text>
                    </TouchableOpacity>
                  </View>
                </View>  
                   <View style={[styles.buttonView12,{paddingVertical:5}]}>
                      <TouchableOpacity
                          style={ Gender&&OtherPAL&&Age&&weight&&height ?
                            {
                              ...styles.enabledButtonStyleBM,
                           
                           }
                           :{
                            ...styles.disabledButtonStyleBM,
                             
                           }} 
                          disabled={ Gender&&OtherPAL&&Age&&weight&&height ? false :true}
                          onPress={()=>{FindTEE()}}
                          >
                         <Text style={[styles.buttonText,{paddingVertical:10}]}> Find </Text>
                        </TouchableOpacity>
                       
                   </View>
                  
                   <View style={{flexDirection:'row',padding:10,borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:10}}>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Total Energy Need :: </Text>
                            <Text style={{fontSize:17,fontWeight:'500',color:'#FF2FD9'}}> {otherTE} KCAL</Text>
                   </View>
                   
               </View>
               </ScrollView>
              </View>
              
           </Modal>
       </View> 
        </ScrollView>
      </KeyboardAvoidingView>
    );
}
export default EnergyExpenditure;