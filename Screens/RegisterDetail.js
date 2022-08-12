import React,{useState,useEffect} from 'react';
import {Text,View,ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity,Modal,ActivityIndicator} from 'react-native';
import styles from '../StyleSheet/styles';
import Icon2  from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDatabase,ref,set } from "firebase/database";
import {GET_EMAIL} from '../Redux/Actions'
import { GET_HEIGHT,GET_WEIGHT } from "../Redux/Actions";
import { useDispatch } from 'react-redux';
const RegisterDetail=({route,navigation})=>{
  const dispatch=useDispatch();
    const {name,email}=route.params;
   
    const [backgroundColor1,setBackgroundColor1]=useState('white');
    const [backgroundColor2,setBackgroundColor2]=useState('white');
    const fullName=JSON.parse(JSON.stringify(name));
    const Email=JSON.parse(JSON.stringify(email));
    const [EmailData,setEmailData]=useState(Email);
    const [nameData,setData]=useState(fullName);
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [Age,setAge]=useState('');
    const [Gender,setGender]=useState('');
    const [Enable,setEnable]=useState(false);
    const [visible,setVisible]=useState(false);
    const colorChange=()=>{
          setBackgroundColor1('#C1B890');
          setBackgroundColor2('white');
          setGender('Female');
          }
        const colorChange2=()=>{
           
            setBackgroundColor2('#C1B890');
            setBackgroundColor1('white');
            setGender('Male');
            }
       useEffect(()=>{
          if(weight!=='' && height!=='' && Age!=='' && Gender!=='')
          {  console.log( 'RD' + ' ' + EmailData + ' ' +nameData)
            setEnable(false);
          }
          else
          {
            setEnable(true);
          }
       },[weight,Age,height,Gender])     

       const SaveData =()=>{
           setVisible(true);
           const database=getDatabase();
             var useremail = EmailData.replace(".", ",");
              set(ref(database,'Users/'+useremail),{
              name:nameData,
              email:EmailData,
              weight:weight,
              height:height,
              Age:Age,
              Gender:Gender
             }).then(()=>{  
              dispatch({type:GET_WEIGHT,payload:weight})
              dispatch({type:GET_EMAIL,payload:EmailData})
                setVisible(false);
                navigation.navigate('Home')})
            
            .catch((error)=>
            {
                setVisible(false);
              console.log(error);
            })
       }
    return(
        <KeyboardAvoidingView style={styles.container}
          enabled  >
            <ScrollView>
            <View style={[styles.containerViewR,{marginTop:100}]}>
              
              <View style={{flex:1,backgroundColor:'white',borderRadius:10,paddingHorizontal:10,paddingVertical:30}}>
                 <Text style={styles.heading}>Details</Text>
                 <View style={[styles.InputView2]}>
                         <Icon2
                          name='weight-kilogram'
                          size={28}
                          color='#023A65'
                          style={{marginTop:7,marginLeft:5}}
                          />
                       <TextInput style={styles.textInput}
                           placeholder="Your Weight (Kg)"
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
                           placeholder="Your Height (Inches)"
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
                      
                       <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor1,borderRadius:10}}onPress={()=>{colorChange()}} >
                       <Icon2
                            name='gender-female'
                            size={26}
                            color='#023A65'
                            style={{marginTop:7,marginLeft:5}}
                        />
                        <Text style={{fontSize:20,marginTop:7,marginBottom:12,marginRight:60,color:'black'}}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',backgroundColor:backgroundColor2,borderRadius:10,marginStart:5}} onPress={()=>{colorChange2()}}>
                           <Icon2
                            name='gender-male'
                            size={26}
                            color='#023A65'
                            style={{marginTop:7,marginLeft:14,marginRight:5}}
                        />
                        <Text style={{fontSize:20,marginTop:7,marginBottom:12,marginRight:77,color:'black'}}>Male</Text>
                       </TouchableOpacity>

                   </View>
                   <View style={[styles.buttonView,{paddingVertical:20}]}>
                      <TouchableOpacity
                          style={ !Enable ?
                            {
                           ...styles.enabledButtonStyle,
                           
                           }
                           :{
                             ...styles.disabledButtonStyle,
                             
                           }} 
                          disabled={Enable}
                          onPress={()=>{SaveData()}}>
                         <Text style={[styles.buttonText,{paddingVertical:10}]}> Save </Text>
                        </TouchableOpacity>
                       
                   </View>
                </View>   
                <Modal
                      visible={visible}
                      style={{padding:10}}
                      transparent={true} 
                      >
                      <View style={styles.centeredView}>
                           <View style={styles.modalView}>
                           <ActivityIndicator size="large" color="blue" />
                        </View>
                    </View>
                    </Modal>  
           </View>
            </ScrollView>
         </KeyboardAvoidingView>
    )
}
export default RegisterDetail;