import React ,{useEffect,useState}from "react";
import {Text,View,Button,TouchableOpacity,Modal,ActivityIndicator,Image} from 'react-native';
import { Avatar,Title} from 'react-native-paper';
import styles from '../StyleSheet/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {auth} from '../firebase/firebaseConfig';
import {database} from '../firebase/firebaseConfig'
import { onValue,ref,set } from "firebase/database";
import { useSelector,useDispatch } from "react-redux";

import { GET_HEIGHT,GET_WEIGHT } from "../Redux/Actions";
const Home=({navigation,route})=>{
    const {email_}=route.params;
    const dispatch=useDispatch()
  const LoginEmail=useSelector(state=>state.EmailReducer.email)
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [MyWeight,setMyWeight]=useState('');
    const [MyHeight,setMyHeight]=useState('');
    const [MyGender,setMyGender]=useState('');
    const [MyAge,setMyAge]=useState('');
    const [MyBMI,setMyBMI]=useState(0);
    const [visible,setVisible]=useState(false);
    const [Data,setData]=useState('')
    var BMITotal;
    useEffect(() => {
        setVisible(true)
        const isInterval=setInterval(()=>{
            fetchData();
             MyBMICal();
             dispatch({type:GET_WEIGHT,payload:MyWeight})
             dispatch({type:GET_HEIGHT,payload:MyHeight})
            
        },1000);
        const unsubscribe = navigation.addListener('focus', () => {
            var NewText = LoginEmail.replace(".", ",");
            onValue(ref(database,'ProfilePic/'+ NewText ),(snapshot)=>{
                const data=(snapshot.val() && snapshot.val().Image ) ||  '';
              
               fetchData();
               
               setData(data)
               
               })
        })
            return () => {
                unsubscribe;
                clearInterval(isInterval)
           
           };

    }, [Name]);
    const fetchData =()=>{
        
        var NewText = LoginEmail.replace(".", ",");
        return onValue(ref(database,'Users/'+ NewText),(snapshot)=>{
         const useremail=(snapshot.val() && snapshot.val().email ) ||  '';
         const username=(snapshot.val()  && snapshot.val().name) ||  '';
         const weight=(snapshot.val() && snapshot.val().weight ) ||  '';
         const height=(snapshot.val()  && snapshot.val().height) ||  '';
         const age=(snapshot.val()  && snapshot.val().Age) ||  '';
         const gender=(snapshot.val()  && snapshot.val().Gender) ||  '';
         
         setMyHeight(height);
         setMyWeight(weight);
         setMyAge(age);
         setMyGender(gender);
         setEmail(useremail);
         setName(username);
         },{
         onlyOnce:true
        });
    }
    const MyBMICal=()=>{
        var BMITotal;
            let heightInMeter=parseInt(MyHeight)*0.0254;
            let heightSquare=heightInMeter*heightInMeter;
            BMITotal=Number(parseInt(MyWeight)/heightSquare).toFixed(2);
            setMyBMI(BMITotal);
            setVisible(false)
       }
    const BMR=()=>{
    var BMR_;
    var heightInCm=parseInt(MyHeight)*2.54;
    console.log('HEIGHT IN cm::' + heightInCm);
      if(MyGender=='Male')
      {
        
         BMR_=Number(66.5+(13.75*(parseInt(MyWeight)))+(5.003*(heightInCm))-(6.75*(parseInt(MyAge)))).toFixed(2)
         console.log('My BMR Man: '+ BMR_);
      }
      else if( MyGender=='Female')
      {
         BMR_=Number(665.1+(9.563*(parseInt(MyWeight)))+(1.85*(heightInCm))-(4.676*(parseInt(MyAge)))).toFixed(2)
         console.log('My BMR Female: '+ BMR_);
      }
      navigation.navigate('EnergyExpenditure',{BMR:BMR_})
    }   
    return(
        <View style={styles.container} >
            <View style={styles.viewContainerHome}>
                 <View style={[styles.topView1]}>
                 <Image
                        style={{width:90,height:90,borderRadius:50}}
                        source={Data==''? require('../Assets/Profile.jpeg'):{uri:Data}}
                        
                        size={80}
                        resizeMode='contain'
                    /> 
                  
                  
               </View>
               <View style={{flexDirection:'column',marginLeft:5,marginStart:20}}>
                    <Title style={[styles.title2,{fontWeight:'800',fontSize:19,color:'#A2F584'}]}> {Name} </Title>
                    <View style={{flexDirection:'column'}}>
                        
                        <Title style={styles.title1}> {Email} </Title>
                       
                    
                    </View>
                   
                </View>
                <View style={styles.buttonView1}>
                <TouchableOpacity style={styles.homeButton} onPress={()=>{navigation.navigate('Profile',{BMI_ME:MyBMI})}}>
                    <View style={{flexDirection:'row'}} >
                    <Icon
                       name='share-square'
                       size={24}
                       color='white'
                       style={{marginRight:5,marginTop:2}}
                    />
                    <Text style={styles.buttontext}>Profile</Text>
                    </View>
                    
                </TouchableOpacity>  
                </View>
            </View>
            <View style={styles.Separator}></View>
            <View style={styles.homeView}>
              <View style={styles.homeBottomView}>
               <View style={styles.bottomChildView}>
                  <View style={[styles.childView1,{width:'45%'}]}>
                    
                  <TouchableOpacity onPress={()=>{navigation.navigate('BMI',{BMI_ME:MyBMI})}}>
                  <Text style={styles.childText}>BMI Calculator</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={[styles.childView1,{width:'45%'}]}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('HealthStatus',{BMI_ME:MyBMI})}}>
                  <Text style={styles.childText}>Health Status</Text>
                  </TouchableOpacity>
                  </View>
                  
               </View>
               <View style={styles.bottomChildView}>
                  <View style={[styles.childView1,{width:'45%'}]}>
                  <TouchableOpacity onPress={()=>{BMR()}}>
                  <Text style={styles.childText}>Energy Expenditure</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={[styles.childView1,{width:'45%'}]}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('WorkoutTime',{BMI_ME:MyBMI})}}>
                  <Text style={styles.childText}>Workout Time Calculator</Text>
                  </TouchableOpacity>
                  </View>
                  
               </View>
               <View style={styles.bottomChildView}>
                  <View style={[styles.childView1,{width:'45%'}]} >
                  <TouchableOpacity onPress={()=>{navigation.navigate('Goal')}}>
                  <Text style={styles.childText}>Set Goal</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={[styles.childView1,{width:'45%'}]}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Exercise')}}>
                  <Text style={styles.childText}>Exercises</Text>
                  </TouchableOpacity>
                  </View>
                  
               </View>
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
    )
}  
export default Home;