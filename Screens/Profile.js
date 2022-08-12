import React,{useEffect,useState} from "react";
import {Text,KeyboardAvoidingView,View,Image, TouchableOpacity,TextInput, ScrollView,Platform,Alert,Modal} from 'react-native'
import styles from "../StyleSheet/styles";
import { moderateScale } from "react-native-size-matters";
import { Avatar,Title} from 'react-native-paper';
import {database} from '../firebase/firebaseConfig'
import { onValue,ref,set,child,push,update } from "firebase/database";
import { useSelector,useDispatch } from "react-redux";
import ImageCropPicker from "react-native-image-crop-picker";
import Icon2  from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile=({navigation,route})=>{
    
    const [visible,setVisible]=useState(false)
    const {BMI_ME}=route.params;
    const LoginEmail=useSelector(state=>state.EmailReducer.email);
    const [Email,setEmail]=useState('');
    const [Name,setName]=useState('');
    const [Age,setAge]=useState('');
    const [imageUp,setImage]=useState('');
    const [Gender,setGender]=useState('');
    const [Height,setHeight]=useState('');
    const [Weight,setWeight]=useState('');
    const [Goal,setGoal]=useState('')
    const [Date,setDate]=useState('')
    const [Data,setData]=useState('')
    const [Type,setType]=useState('');
    const [weight,setweight]=useState('');
    const [height,setheight]=useState('');
    const [age,setage]=useState('');
    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
           var NewText = LoginEmail.replace(".", ",");
             onValue(ref(database,'Users/'+ NewText),(snapshot)=>{
             const name=(snapshot.val() && snapshot.val().name ) ||  '';
             const email=(snapshot.val()  && snapshot.val().email) ||  '';
             const age=(snapshot.val()  && snapshot.val().Age) ||  '';
             const gender=(snapshot.val()  && snapshot.val().Gender) ||  '';
             const weight=(snapshot.val()  && snapshot.val().height) ||  '';
             const height=(snapshot.val()  && snapshot.val().weight) ||  '';
             
             setName(name);
             setEmail(email);
             setGender(gender)
             setWeight(weight)
             setHeight(height)
             setAge(age)
             console.log(LoginEmail)
          });
          
           onValue(ref(database,'Goal/'+ NewText),(snapshot)=>{
            const goal=(snapshot.val() && snapshot.val().Goal ) ||  '';
            const date=(snapshot.val() && snapshot.val().date ) ||  '';
           setGoal(goal)
           setDate(date)
          
            })
            onValue(ref(database,'ProfilePic/'+ NewText ),(snapshot)=>{
                const data=(snapshot.val() && snapshot.val().Image ) ||  '';
               
               setData(data)
               
             
               })
                
        });
          return unsubscribe;
    },[navigation,Data])
    const SelectImage=(cropit)=>{
        var NewTex = LoginEmail.replace(".", ",");
        
        ImageCropPicker.openPicker({
            width:200,
            height:300,
            cropping:cropit,
            includeBase64:true,
            includeExif:true,
           
        }).then((image)=>{
            console.log('received image');
           
            // setImage({
            //     uri:image.path,
            // }) 
          console.log('Image'+image.path)
            set(ref(database,'ProfilePic/'+ NewTex),{
              Image:image.path,
             }).then(()=>{  
              console.log('done')
             }
             )
            .catch((error)=>
            {
              console.log(error);
            })
        }).catch((e)=>Alert.alert(e))
        
    }
    const Update=()=>{
        var NewText = LoginEmail.replace(".", ",");
        const updata={
            name:Name,
            email:Email,
            Gender:Gender,
            Age:age,
            weight:weight,
            height:height
          }
          const updates={};
          updates['Users/'+NewText]=updata;
         return update(ref(database),updates);
    }
    return (
        <KeyboardAvoidingView style={styles.container} >
            <ScrollView>
            <View style={[styles.containerView,{marginTop:moderateScale(50),marginHorizontal:20,marginBottom:20,alignItems:'center'}]}>
                <View style={[styles.mainTextInputView,{paddingBottom:50}]}>
               
                <View style={{flexDirection:'column',marginTop:10}}>
                  <View style={{flexDirection:'row',marginBottom:5}}>
                  <Image
                        style={{width:90,height:90,borderRadius:50}}
                        source={Data==''? require('../Assets/Profile.jpeg'):{uri:Data}}
                        
                        size={80}
                        resizeMode='contain'
                    /> 
                    <Text style={[styles.titleP,{marginStart:30,marginTop:25,fontSize:22}]}>{Name}</Text>
                     <TouchableOpacity style={{marginTop:2,marginLeft:30,borderWidth:1,borderRadius:10,
                        alignSelf:'center',borderColor:'#4986F8',paddingHorizontal:2}} onPress={()=>{setVisible(true)}}>
                        <Text style={[styles.ParagraphP]}>Update</Text>
                     </TouchableOpacity>
                  </View>
                 <View style={{flexDirection:'row',marginBottom:5,alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>{SelectImage(true)}}>
                    <Text style={styles.ParagraphP}>Change Profile Picture</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={{backgroundColor:'black',borderBottomWidth:1}}></View>
                <View style={{borderWidth:1,marginTop:10,width:300,flex:1,height:350,borderRadius:10}}>

                 <View style={{flexDirection:'row',marginBottom:5}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}>Email</Text>
                 <Text style={[styles.titlePText]}>{Email}</Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}>Age</Text>
                 <Text style={[styles.titlePText,{marginLeft:50,flex:1}]}>{Age}</Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}>Gender </Text>
                 <Text style={[styles.titlePText,{marginLeft:40,flex:1}]}> {Gender}</Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}>Height</Text>
                 <Text style={[styles.titlePText,{marginLeft:50,flex:1}]}>{Height} Inches</Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}>Weight</Text>
                 <Text style={[styles.titlePText,{marginLeft:50,flex:1}]}> {Weight} kg</Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:10}]}> BMI </Text>
                 <Text style={[styles.titlePText,{marginLeft:50,flex:1}]}> {BMI_ME} </Text>
                 </View>
                 <View style={{flexDirection:'row',marginBottom:5,flex:1}}>
                 <Text style={[styles.titleP,{marginTop:10,flex:1,marginStart:2}]}> Goal </Text>
                 <Text style={[styles.titlePText,{marginLeft:30}]}> {Goal} ( {Date} )</Text>
                 </View>
                 
                </View>
                </View>
            </View>
                <Modal animationType="fade" transparent={true} visible={visible} >
                <View style={styles.dimBackgroundStyle} />
               <View style={styles.modalContainerStyle}>
               <ScrollView>
                    <View style={styles.modalViewStylePro}>
                        <Text style={styles.heading}>Update</Text>
                         <View style={{position: "absolute",
                                right: 0,
                                marginTop: moderateScale(5),
                                marginEnd: moderateScale(10),}}>
                          <TouchableOpacity onPress={()=>{setVisible(false)
                              }}>
                             <Text style={{fontSize:20,padding:5}}> X </Text>
                          </TouchableOpacity>
                      </View>
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
                           onChangeText={(text) => setweight(text)}
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
                           onChangeText={(text) => setheight(text)}
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
                           onChangeText={(text) => setage(text)}
                           value={age}
                        />
                   </View>
                   <View style={[styles.buttonView12,{paddingVertical:5}]}>
                      <TouchableOpacity
                          style={ age&&weight&&height ?
                            {
                              ...styles.enabledButtonStyleBM,
                           
                           }
                           :{
                            ...styles.disabledButtonStyleBM,
                             
                           }} 
                          disabled={ age&&weight&&height ? false :true}
                          onPress={()=>{Update()}}
                          >
                         <Text style={[styles.buttonText,{paddingVertical:10}]}> Save </Text>
                        </TouchableOpacity>
                       
                   </View>
                     </View>
                    </ScrollView>
                    </View>  
                </Modal>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Profile;