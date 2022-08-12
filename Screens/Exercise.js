import React,{useEffect,useState} from "react";
import {Text,View,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native';
import styles from "../StyleSheet/styles";
import {database} from '../firebase/firebaseConfig'
import { onValue,ref,set } from "firebase/database";
import { useSelector,useDispatch } from "react-redux";
// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'aspirin             ',
//       Uri:'data:image/jpeg;base64,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'
     
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'omega',
//       Uri:'data:image/jpeg;base64,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'
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Oxal',
//     },
//     {
//       id: '5869444a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Potas',
//     },
//     {
//       id: '34694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Prava',
//     },
//      {
//       id: '545224a0f-3da1-471f-bd96-145571e29d72',
//       title: 'hydra',
//     },
//     {
//       id: '56544a0f-3da1-471f-bd96-145571e29d72',
//       title: 'hydrox',
      
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d78',
//       title: 'Glybur',
      
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d76',
//       title: 'Hydroxy',
      
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d74',
//       title: 'Irbes',
      
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d73',
//       title: 'Ison',
      
//     },
//   ];
const Exercise=({navigation})=>{
    const LoginEmail=useSelector(state=>state.EmailReducer.email);
    const [goal,setGoal]=useState('');
    const [date,setDate]=useState('');
    const [Exercise,setExcercise]=useState('');
    const [image,setImage]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBbchGE1YrdQ9jLAFYOcQ7oLS0oBWmV_lxw&usqp=CAU');
    const [First,setFirst]=useState('');
    const [second,setSecond]=useState('');
    const [FirstQ,setFirstQ]=useState('');
    const [SecondQ,setSecondQ]=useState('');
    const [secImage,setSecImage]=useState('')
    var Goal;
           
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            var NewText = LoginEmail.replace(".", ",");
             onValue(ref(database,'Goal/'+ NewText),(snapshot)=>{
              Goal=(snapshot.val() && snapshot.val().Goal ) ||  'Anonymous';
             const date=(snapshot.val()  && snapshot.val().date) ||  'Anonymous';
             setGoal(Goal);
             setDate(date);
             console.log(Goal)
          });
           onValue(ref(database,'Exercise/'+ Goal),(snapshot)=>{
            const First=(snapshot.val() && snapshot.val().First ) ||  '';
            const Second=(snapshot.val()  && snapshot.val().Second) ||  '';
            const Image=(snapshot.val()  && snapshot.val().FirstImage) ||  '';
            const Qty1=(snapshot.val()  && snapshot.val().FirstQ) ||  '';
            const Qty2=(snapshot.val()  && snapshot.val().SecondQ) ||  '';
            const Secondimage=(snapshot.val()  && snapshot.val().SecondImage) ||  '';
           setFirst(First)
           setSecond(Second)
           setImage(Image)
           setFirstQ(Qty1);
           setSecondQ(Qty2)
           setSecImage(Secondimage)
            })
          
        });
          return unsubscribe;
    }, [navigation]);
return(
    <KeyboardAvoidingView style={styles.container}>
     <ScrollView>
        <View style={{flex:1,
                backgroundColor:'white',
                marginHorizontal:10,
                marginVertical:30,
                borderRadius:20,
                paddingVertical:40,
                paddingHorizontal:15,
                alignSelf:'center'
                }}>
       
          <Text style={styles.heading}>Exercises</Text>
          <Text style={styles.Paragraph}>Please Select Goal First</Text>
        <View style={[styles.InputView,{flexDirection:'column',padding:20,width:300}]}>
            <Text style={styles.Paragraph}>Do Following Exercises</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'black'}}>1. {First}</Text>
            <Text style={{marginStart:50,fontSize:16}}>{FirstQ}</Text>
            </View>
          <Image
          style={{width:240,height:200}}
          source={{uri:image}}
          
          />
          <View style={{flexDirection:'row',marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'700',color:'black'}}>2. {second}</Text>
            <Text style={{marginStart:50,fontSize:16}}>{SecondQ}</Text>
          </View>
          <Image
          style={{width:200,height:200,marginTop:10,marginStart:10}}
          source={{uri:secImage}}
          
          />
          
      </View>
        </View>
       
     </ScrollView>
    </KeyboardAvoidingView>
)
}
export default Exercise;