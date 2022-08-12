import React,{useState,useEffect,useRef} from "react";
import {Text,View,KeyboardAvoidingView,TextInput,TouchableOpacity,ScrollView,Pressable,Image,Alert,Modal,ActivityIndicator} from'react-native';
import styles from '../StyleSheet/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from '../firebase/firebaseConfig'
import { getDatabase,ref,set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { moderateScale } from "react-native-size-matters";
const SignUp =({navigation})=>{
  const btnRef=useRef(null)
    const [fullName, setFullName] = useState('');
    const [FinalName, setFinalName] = useState('');
    const [FinalEmail, setFinalEmail] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [FinalPassword, setFinalPassword] = useState('');
    const [visible,setVisible]=useState(false);
    const [Enable,setEnable]=useState(false);
    const [showLabel,setLabel]=useState(false)
    const [showLabe,setShowLabel]=useState(false)
    const [PassLabel,setPassLabel]=useState(false)
    let reg = /^[a-zA-Z]+[0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const onPressRegister=()=>{
        var Password=password.toString();
        var PasswordLength=Password.length;
        var FullName=fullName.toString();
        var FullNameLength=FullName.length;
        var ConfirmPassword=confirmPassword.toString();
        var ConfirmPasswordLength=ConfirmPassword.length;
        
        
        
          if (fullName=='' || FullNameLength<4) {
            Alert.alert("UserName","UserName Must Not be Empty & minimum length is 4")
           }
         
          // if(reg.test(email) === true)
          //   { console.log(email)
          //     setFinalEmail(email)
          //   }
          if (reg.test(email) === false || email=='') {
              alert("Email is Not Set Correctly formate is AAA12@gmail.com and must not be empty");
             
             }
          
          if (password!=confirmPassword || PasswordLength!=ConfirmPasswordLength || password==''  )
           {
            Alert.alert("Password","Passwords must match" + " " +"Length greater or equal to 6")
           }
           setVisible(true);
          Register();
            
      }
      const Register=()=>{
        setVisible(false)
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((re)=>{
            setVisible(false)
            navigation.navigate('Register Details',{name:fullName,email:email})
        })
         .catch((error)=>{
          setVisible(false)
           console.log(error);
         })
         setFullName('');
         setEmail('');
         setPassword('');
         setConfirmPassword('');
         
      }
      useEffect(()=>{
        if(fullName!=='' &&fullName.length>4 && email!=='' && reg.test(email) ===true && password!=='' && confirmPassword!=='' && password==confirmPassword && password.length==confirmPassword.length)
       { 
        
          setEnable(false);
        }
        else
        {
          setEnable(true);
        }
     },[fullName,email,password,confirmPassword]) 
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
            <View style={[styles.containerViewR]}>
              <Image style={{alignSelf:'center',marginTop:10}}
              source={require('../Assets/healthicon1.png')}/>
              <View style={[styles.mainTextInputView,{paddingHorizontal:moderateScale(35)}]}>
                 <Text style={[styles.heading]}>SignUp</Text>
                 {showLabel&&(
                  <View style={{flexDirection:'row',marginTop:2}}>
                  <Text style={{color:'grey'}}>Name Length must</Text>
                  <Text style={{fontWeight:'700',color:'black'}}> Greater than 4 </Text>
                </View>
                 )}
                 <View style={styles.InputView}>
                         <Icon
                          name='user'
                          size={23}
                          color='#023A65'
                          style={{marginTop:10,marginLeft:5}}
                          />
                       <TextInput style={styles.textInput}
                           ref={btnRef}
                           placeholder="Your Name"
                           placeholderTextColor="#666666"
                            onChangeText={(text) => setFullName(text)}
                            value={fullName}
                           blurOnSubmit={true}
                           onFocus={()=>{
                            setLabel(true)
                           }}
                           onBlur={()=>{
                            setLabel(false)
                           }}
                        />
                  </View>
                  {showLabe&&(
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'grey'}}>Email Formate </Text>
                      <Text style={{fontWeight:'700',color:'black'}}>AAA12@gmail.com </Text>
                    </View>
                  
                 )}
                  <View style={styles.InputView}>
                       <Icon
                         name='envelope'
                         size={20}
                         color='#023A65'
                         style={{marginTop:12,marginLeft:5}}
                         />
                       <TextInput style={styles.textInput}
                           ref={btnRef}
                           placeholder="Your Email"
                           placeholderTextColor="#666666" 
                           onChangeText={(text) => setEmail(text)}
                           autoCapitalize='none'
                           autoCorrect={false}
                           value={email}
                           blurOnSubmit={true}
                           onFocus={()=>{
                            setShowLabel(true)
                           }}
                           onBlur={()=>{
                            setShowLabel(false)
                           }}
                        />
                   </View>
                   {PassLabel&&(
                    <View style={{flexDirection:'row'}}>
                      <Text style={{color:'grey'}}>Password Length must</Text>
                      <Text style={{fontWeight:'700',color:'black'}}> Greater than 5 </Text>
                    </View>
                  
                 )}
                   <View style={[styles.InputView]}>
                       <Icon
                            name='lock'
                            size={24}
                            color='#023A65'
                            style={{marginTop:10,marginLeft:5}}
                        />
                       <TextInput style={styles.textInput}
                          ref={btnRef}
                           placeholder="Password"
                           placeholderTextColor="#666666"
                           secureTextEntry={true}
                           onChangeText={(text) => setPassword(text)}
                           value={password}
                           blurOnSubmit={true}
                           onFocus={()=>{
                            setPassLabel(true)
                           }}
                           onBlur={()=>{
                            setPassLabel(false)
                           }}
                        />
                   </View>
                   <View style={styles.InputView}>
                       <Icon
                            name='lock'
                            size={24}
                            color='#023A65'
                            style={{marginTop:10,marginLeft:5}}
                        />
                       <TextInput style={styles.textInput}
                           placeholder="Confirm Password"
                           placeholderTextColor="#666666"
                           secureTextEntry={true}
                           blurOnSubmit={true}
                           onChangeText={(text) => setConfirmPassword(text)}
                           value={confirmPassword}
                        />
                   </View>
                   <View style={[styles.buttonView]}>
                      <TouchableOpacity
                          style={ !Enable ?
                            {
                           ...styles.enabledButtonStyle,
                           
                           }
                           :{
                             ...styles.disabledButtonStyle,
                             
                           }}  onPress={()=>{onPressRegister()}}
                          disabled={Enable}
                          >

                         <Text style={styles.buttonText}> Register </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={[styles.button2,{flexDirection:'row'}]} onPress={()=>{navigation.navigate('Login')}} >
                          <Text style={styles.buttonText2}> Already Registered</Text><Text style={{fontSize:19,fontWeight:'bold',marginLeft:5,color:"black"}}>Login</Text>
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
    );
}
export default SignUp;