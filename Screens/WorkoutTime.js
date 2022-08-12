import React,{useEffect,useState} from "react";
import {Text,View,Alert,KeyboardAvoidingView, ScrollView,TouchableOpacity} from 'react-native';
import styles from "../StyleSheet/styles";
import { moderateScale } from "react-native-size-matters";
import Speedometer from "react-native-speedometer-chart";
import { TextInput } from "react-native-paper";
import {ref,set } from "firebase/database";
import { database } from "../firebase/firebaseConfig";
import { useSelector,useDispatch} from "react-redux";
import { GET_STATUS } from "../Redux/Actions";
const WorkoutTime=({navigation,route})=>{
    const {BMI_ME}=route.params;
    const LoginEmail=useSelector(state=>state.EmailReducer.email)
    const [healthStatus,setHealthStatus]=useState('');
    const [MYbMI,setMyBMI]= useState(BMI_ME);
    const [Run,setRun]=useState('0');
    const [TotalRun,setTotalRun]=useState(null);
    const  [status,setStatus]=useState('');
    const  [statusP,setStatusP]=useState('');
    const  [pushUps,setPushUps]=useState(null)
    const  [push,setPush]=useState('0');
    const  [Time,setTime]=useState('0');
    const  [TimeP,setTimeP]=useState('0');
    const  [Date_,setDate]=useState('');
    const  [submitStatus,setSubmitStatus]=useState(false)
    const dispatch=useDispatch();
    const Verify_Status=useSelector(state=>state.Status.status)
    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            
            HealthStatusFinder();
        })
        if(Run==TotalRun)
        {
         setStatus('Good, You have completed Your Today Milestone')
        }
        else
        {
            setStatus('Please Complete Your Milestone')
        }
        if(pushUps==push)
        {
         setStatusP('Good, You have completed Your Today Milestone')
        }
        else
        {
            setStatusP('Please Complete Your Milestone')
        }
        if(Run>TotalRun)
        {
            setRun(TotalRun);
        }
        if(push>pushUps)
        {
            setPush(pushUps);
        }
        
        
        if(Run=='')
        {
          setRun(0)
          setTime(0)
          
        }
        if(push=='')
        {
          setTimeP(0)
        }
        //console.log(Verify_Status)
        var today = new Date();

       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
       
       setDate(date);
        return unsubscribe;
        
    },[MYbMI,Run,push])
    const HealthStatusFinder=()=>{
        if(MYbMI<=18.5)
        {
         setHealthStatus('Under Weight');
         setTotalRun(2)
         setPushUps(5)
        }
        else if (MYbMI>18.5 && MYbMI<25)
        {
         setHealthStatus('Normal');
         setTotalRun(3)
         setPushUps(10)
        }
        else if (MYbMI>=25 && MYbMI<40)
        {
          setHealthStatus('Over Weight')
          setTotalRun(5)
          setPushUps(12)
        }
        else if (MYbMI>=40)
        {
         setHealthStatus('Obesity')
         setTotalRun(6)
         setPushUps(5)
         }
    } 
    const SaveTime=()=>{
       
        var userEmail = LoginEmail.replace(".", ",");
        set(ref(database,'WorkOut/'+Date_+'/'+userEmail),{
            TotalKM:TotalRun,
            Run:Run,
            RunTime:Time,
            RunStatus:status,
            TotalPushups:pushUps,
            Pushups:push,
            PushUpStatus:statusP
           }).then(()=>{  
            setSubmitStatus(true);
            dispatch({type:GET_STATUS,payload:submitStatus})
              Alert.alert('Congratulations')
            //  setVisible(false);
              navigation.navigate('Home')})
          
          .catch((error)=>
          { Alert.alert('You already Add You Todays Data')
              //setVisible(false);
            console.log(error);
          })
    }
    return(
        <KeyboardAvoidingView style={styles.container} enabled>
            <ScrollView>
                <View style={[styles.viewContainer,{marginTop:moderateScale(10),marginHorizontal:moderateScale(10)}]}>
                <View style={styles.mainTextInputView}>
                      <Text style={styles.heading}>Workout Time Calculator</Text>
                      <View style={{flexDirection:'row',alignSelf:'center',marginBottom:20}}>
                           <Text style={{fontSize:20,fontWeight:'500',color:'#20471C'}}> My Health Status :: </Text>
                           <Text style={{fontSize:20,fontWeight:'500',color:'#0B0313'}}>{healthStatus}</Text>
                     </View>
                    
                    <View style={[styles.mainTextInputViewWork,{flexDirection:"row"}]}>
                     
                       <Text style={{marginStart:20,fontSize:15,color:'blue',marginTop:1,marginBottom:3,textAlign:'center'}} >{status}</Text>
                      
                        <Text style={[styles.Paragraph,{fontWeight:'800'}]}>
                          Running
                        </Text>
                        <View style={{marginBottom:2}}>
                        <Speedometer
                        value={Run}
                        totalValue={TotalRun}
                        size={170}
                        outerColor="#d3d3d3"
                        internalColor="#ff0000"
                        showText
                        text="Running"
                        textStyle={{ color: 'green' }}
                        showLabels
                        labelTextStyle={{color:'black'}}
                        
                        labelFormatter={number => `${number} KM`}
                        showPercent
                        percentStyle={{ color: 'red' }}
                        />
                       </View>
                        <View style={[styles.InputView1]}>
                            
                        <Text style={{fontSize:15,color:'black',marginTop:35}}>How Many KM You Run Today</Text>
                        
                        <TextInput style={{marginHorizontal:2,marginTop:10,height:48,borderBottomColor:'white'}} 
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(text) => {setRun(text)
                            setTime(6*parseInt(text))
                        }}
                        value={Run}
                        blurOnSubmit={true}
                        />
                       </View>
                       <Text style={{textAlign:'center',fontSize:14,color:'black'}}>Remaining : {TotalRun-Run} KM</Text>
                       <Text style={{textAlign:'center',fontSize:14,color:'black'}}>Time To Cover : {Run} KM in {Time} min</Text>
              </View>
              <View style={[styles.mainTextInputViewWork,{flexDirection:"row",marginTop:5}]}>
                     
                     <Text style={{marginStart:20,fontSize:15,color:'blue',marginTop:1,marginBottom:3,textAlign:'center'}} >{statusP}</Text>
                  
                      <Text style={[styles.Paragraph,{marginTop:10,fontWeight:'800'}]}>
                        Push Ups
                      </Text>
                      <Speedometer
                      value={push}
                      totalValue={pushUps}
                      size={170}
                      outerColor="#d3d3d3"
                      internalColor="#ff0000"
                      showText
                      text="PushUps"
                      textStyle={{ color: 'green' }}
                      showLabels
                      labelTextStyle={{color:'black'}}
                      
                      labelFormatter={number => `${number} `}
                      showPercent
                      percentStyle={{ color: 'red' }}
                      />
                      <View style={[styles.InputView1]}>
                      <Text style={{fontSize:15,color:'black',marginTop:35}}>How Many Push Ups You Did  </Text>
                      <TextInput style={{marginHorizontal:2,marginTop:10,height:48}} 
                      keyboardType={'number-pad'}
                      maxLength={2}
                      onChangeText={(text) => { setPush(text)
                       setTimeP(2*parseInt(text))
                     }}
                      value={push}
                      blurOnSubmit={true}
                      />
                     </View>
                     <Text style={{textAlign:'center',fontSize:14,color:'black'}}>Remaining : {pushUps-push}    </Text>
                     <Text style={{textAlign:'center',fontSize:15,color:'black'}}>Time To Do : {push} in {TimeP} sec</Text>
            </View>
            <View style={[styles.buttonView12,{paddingVertical:5}]}>
                      <TouchableOpacity
                          style={ push&&Run && submitStatus==false?
                            {
                              ...styles.enabledButtonStyleBM,
                           
                           }
                           :{
                            ...styles.disabledButtonStyleBM,
                             
                           }} 
                          disabled={push&&Run? false :true}
                          onPress={()=>{SaveTime()}}
                          >
                         <Text style={[styles.buttonText,{paddingVertical:10}]}> Save </Text>
                        </TouchableOpacity>
                       
                   </View>
        </View> 

    </View>    
                         </ScrollView>
                     </KeyboardAvoidingView>
          )
}
export default WorkoutTime;