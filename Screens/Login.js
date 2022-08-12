import React,{useState} from "react";
import {Text,View,KeyboardAvoidingView,Platform,ScrollView,TextInput,ActivityIndicator,Modal,Image,TouchableOpacity,Alert} from'react-native';
import styles from '../StyleSheet/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {auth} from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

import {GET_EMAIL} from '../Redux/Actions'
import { useDispatch,useSelector } from 'react-redux';
const Login =({navigation})=>{
  const dispatch=useDispatch();
    const [FinalEmail, setFinalEmail] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [FinalPassword, setFinalPassword] = useState('');
    const [visible,setVisible]=useState(false);

    const Validation=()=>{
        var Password=password.toString();
        var PasswordLength=Password.length;
        
        let reg = /^[a-zA-Z]+[0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
       
          
           setVisible(true);
           onLogin();
       
    }
    const onLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch({type:GET_EMAIL,payload:email});
          const user = userCredential.user;
          setEmail('');
          setPassword('');
          setVisible(false)
          navigation.navigate('Home',{email_:email});
        })
        .catch((error) => {
            setVisible(false)
            Alert.alert('Email or Password is incorrect ', 
            'Check Email Formate AAA12@gmail.com')
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
   
    return(
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? 'height': null}
         keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
         style={styles.container}
         enabled>
            <ScrollView>
          <View style={styles.viewContainer}>
              <Image source={require('../Assets/healthicon1.png')}/>
              <View style={styles.mainTextInputViewLogin}>
                 <Text style={styles.heading}>Login</Text>
                  <View style={styles.InputView}>
                    <Icon
                    name='envelope'
                    size={20}
                    color='#023A65'
                    style={{marginTop:12,marginLeft:5}}
                    />
                       <TextInput style={styles.textInput}
                           placeholder="Your Email"
                           placeholderTextColor="#666666"
                           autoCapitalize='none'
                           onChangeText={(text) => {setEmail(text)}}
                           value={email}
                           blurOnSubmit={true}
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
                           placeholder="Password"
                           placeholderTextColor="#666666"
                           secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                           blurOnSubmit={true}
                        />
                   </View>
                   <View style={styles.buttonView}>
                      <TouchableOpacity
                          style={[styles.button]} onPress={()=>{Validation()}} >
                         <Text style={styles.buttonText}>  Login  </Text>
                        </TouchableOpacity>
                       <TouchableOpacity
                           style={[styles.button2,{flexDirection:'row'}]} onPress={()=>{navigation.navigate('SignUp')}} >
                          <Text style={styles.buttonText2}> Don't have Account</Text><Text style={{fontSize:20,fontWeight:'bold',marginLeft:5,color:"black"}}>SignUp</Text>
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
export default Login;