import { StyleSheet } from "react-native";
import { moderateScale, scale } from 'react-native-size-matters';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#023A65'
      },
      containerView: {
        flex: 1,
        backgroundColor:'#023A65',
        marginStart:20,
        marginEnd:20
      },
      containerViewR: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'#023A65',
        marginStart:20,
        marginEnd:20,
        
      },
    viewContainer:{
        flex:1,
        alignItems:'center',
        marginTop:10,
        
    },
    mainTextInputViewLogin:{
        flex:1,
        marginTop:30,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:25,
        flexWrap:'wrap'
    },
    
    mainTextInputView:{
        flex:1,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:25,
        flexWrap:'wrap'

    },
    mainTextInputViewWork:{
      flex:1,
      backgroundColor:'white',
      borderWidth:1,
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:25,
      flexWrap:'wrap'


  },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',
        paddingBottom:10,
        color:'black'
    },
    InputView: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius:10,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
    },
    InputView2: {
      flexDirection: 'row',
      marginTop: 10,
      borderWidth: 1,
      borderBottomColor: 'black',
      borderRadius:10,
      marginBottom:5,
      marginLeft:5,
      marginRight:5,
  },
    InputView1: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom:5,
      marginLeft:5,
      marginRight:5,
  },
    InputViewResult: {
      flexDirection: 'row',
      marginTop: 10,
      borderWidth: 1,
      borderColor:'black',
      borderRadius:10,
      marginBottom:20,
      marginHorizontal:60,
      alignSelf:'center',
     
  },
  
    textInput: {
        marginTop:7,
        color: '#05375a',
        fontSize:18,
        width:250,
        paddingLeft:10,
        marginBottom:7,
        paddingTop:4,
        paddingBottom:4
    },
    buttonView:{
      alignItems:'center',
      marginTop:5,
      paddingHorizontal:10,
      
    },
    buttonView12:{
      alignItems:'center',
      marginTop:1,
      paddingHorizontal:10,
      
    },
    button:{
      borderWidth:1,
      borderRadius:12,
      backgroundColor:'#034E5A',
      marginTop:5,
    },
    button2:{
      marginTop:20,
      marginBottom:20
      
    },
    buttonText:{
      fontSize:22,
      fontWeight:'bold',
      paddingHorizontal:20,
      paddingVertical:8,
      color:'white'
    },
    buttonText2:{
      fontSize:19,
      color:'#022540'
      
    },
    ////// Home /////
    homeView:
    {
        flex:3,
        alignItems:'center',
        marginTop:10,
        
    },
    Separator:{
     paddingVertical:1,
     width:'100%',
     backgroundColor:'white'   
    },
    viewContainerHome:{
        flex:0.6,
        flexDirection:'row',
        marginTop:20,
        marginBottom:5,
        flexWrap:'wrap'
        
    },
    title1: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 2,
        marginRight:20,
        marginLeft:5,
        color:'white'
      },
      title2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 2,
        marginRight:10,
        marginStart:5,
        color:'white'
      },
      topView2:{
        flex:1,
        marginTop:5,
        marginLeft:moderateScale(10),
        flexDirection:'row',
        marginRight:10,
      },
      topView1:{
        flex:0.7,
        marginLeft: 10,
        flexDirection:'column',
      },
      buttonView1:{
        flex:1,
       alignItems:'center',
       marginLeft:moderateScale(20),
       marginBottom:10,
       flexDirection:'row-reverse'
       
      },
      homeButton:{
        padding:2,
      },
      buttontext:
      {
       fontSize:21,
       color:'#B1DDFF'
      },
      homeBottomView:{
        width:'90%',
        height:'90%',
      },
      bottomChildView:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
        
      },
      childView1:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        paddingVertical:30,
        marginStart:20,
        marginEnd:20,
        backgroundColor:'#AEAEAE'
      },
      childText:{
        padding:5,
        color:'black',
        fontSize:20,
        alignSelf:'center',
        textAlign:'center'
      },
      /////////// Test//////
      inputContainerStyle: {
       
        marginTop: moderateScale(30),
        borderBottomWidth: 0,
        marginBottom:10,
    },
    inputStyle: {
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: scale(15),
        padding: moderateScale(5),
        paddingBottom: moderateScale(25),
        color:'white'
    },
    ////////Model//////////
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    centeredView1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginVertical:20,
      
    },
    modalView1: {
      marginTop: 10,
      marginBottom:50,
      marginLeft:20,
      marginRight:20,
      backgroundColor: "#C5C4C6",
      borderRadius: 20,
      paddingTop:10,
      height:300,
      paddingBottom:30,
      paddingLeft:20,
      paddingRight:20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3
      },
    justifyContent:'center',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonmodel: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    ////// Details ////////
    enabledButtonStyle: {
      flex:1,
      backgroundColor: "#F9B34C",
      justifyContent: "center",
      borderRadius: moderateScale(10),
      paddingBottom:5,
      elevation: 3,
      marginEnd:10
    },
    disabledButtonStyle: {
      flex:1,
      backgroundColor: "gray",
      paddingBottom:5,
      justifyContent: "center",
      borderRadius: moderateScale(10),
      elevation: 3,
      marginEnd:10
    },
    enabledButtonStyleBMI: {
      flex:1,
      backgroundColor: "#F9B34C",
      justifyContent: "center",
      borderRadius: moderateScale(10),
      paddingBottom:5,
      elevation: 3,
      marginEnd:10
    },
    disabledButtonStyleBMI: {
      flex:1,
      marginStart:10,
      backgroundColor: "gray",
      paddingBottom:5,
      justifyContent: "center",
      borderRadius: moderateScale(10),
      elevation: 3,
      marginEnd:10
      
    },
    ////////// Energy Expenditure ////////
    Paragraph:
    {fontSize:16,
    fontWeight:'500',
    color:'#0B0313',
    textAlign:'center',
    marginTop:5,
    marginBottom:5
    },
    ParagraphP:
    {fontSize:16,
    fontWeight:'500',
    color:'#4986F8',
    textAlign:'center',
    marginTop:5,
    marginBottom:5
    },
  InputViewTEE: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor:'black',
    borderRadius:10,
    marginTop: 10,
    marginBottom:10,
    marginHorizontal:10,
    padding:5,
    alignSelf:'center',
   
},
InputViewTEEg: {
  flexDirection: 'column',
  borderWidth: 1,
  borderColor:'black',
  borderRadius:10,
  marginTop: 10,
  marginBottom:10,
  padding:1,
  alignSelf:'center',
 
},
InputViewTE: {
  flexDirection: 'row',
  marginTop: 5,
  marginBottom:5,
  marginLeft:5,
  marginRight:5,
},
///////////// Modal TEE /////
dimBackgroundStyle: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  position: "absolute",
  ...StyleSheet.absoluteFill,
  opacity: 0.7,
  flex: 1,
},
modalContainerStyle: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: moderateScale(10),
  marginBottom: moderateScale(10),
},
modalViewStyle: {
  backgroundColor: "white",
  alignItems: "center",
  shadowColor: "#000",
  height: scale(600),
  width: scale(300),
  margin: moderateScale(20),
  borderRadius: moderateScale(20),
  padding: moderateScale(30),
  shadowOffset: {
    width: 0,
    height: moderateScale(2),
  },
  
  shadowOpacity: moderateScale(0.25),
  shadowRadius: moderateScale(3.84),
  elevation: moderateScale(5),
},
modalViewStylePro: {
  backgroundColor: "white",
  alignItems: "center",
  shadowColor: "#000",
  height: scale(320),
  width: scale(300),
  marginTop:moderateScale(130),
  margin: moderateScale(20),
  borderRadius: moderateScale(20),
  padding: moderateScale(30),
  shadowOffset: {
    width: 0,
    height: moderateScale(2),
  },
  
  shadowOpacity: moderateScale(0.25),
  shadowRadius: moderateScale(3.84),
  elevation: moderateScale(5),
},
enabledButtonStyleBM: {
  
  backgroundColor: "#F9B34C",
  justifyContent: "center",
  borderRadius: moderateScale(10),
  paddingBottom:5,
  elevation: 3,
  marginEnd:10,
  marginStart:10,
},
disabledButtonStyleBM: {
  
  marginStart:10,
  backgroundColor: "gray",
  paddingBottom:5,
  justifyContent: "center",
  borderRadius: moderateScale(10),
  elevation: 3,
  marginEnd:10
  
},
////// Goal ////////
enabledButtonStyleGoal: {
  flex:1,
  backgroundColor: "#F9B34C",
  justifyContent: "center",
  borderRadius: moderateScale(10),
  paddingBottom:5,
  elevation: 3,
  marginHorizontal:80
},
disabledButtonStyleGoal: {
  flex:1,
  backgroundColor: "gray",
  paddingBottom:5,
  justifyContent: "center",
  borderRadius: moderateScale(10),
  elevation: 3,
  marginHorizontal:80
},
Item1:{
   
   flexDirection:'column',
   paddingHorizontal:20,
   marginBottom:10,
 },
 title:{
  color:'#534A4A',
   fontSize:23,
 },
 //// Profile ////
 titleP: {
  fontSize: 15,
  fontWeight: 'bold',
  marginTop: 5,
  marginBottom: 2,
  marginRight:20,
  marginLeft:5,
  color:'black'
},
titlePText: {
  fontSize: 16,
  
  marginTop: 10,
  marginBottom: 2,
  marginRight:20,
  marginLeft:5,
  color:'black'
},
})