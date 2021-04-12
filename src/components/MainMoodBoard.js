import React,{useEffect} from 'react';
import Navbar from './Navbar';
import NavBarFiller from './NavBarFiller';
import {TouchableOpacity,Text,Image,View,Modal,TouchableHighlight,Dimensions,Linking} from 'react-native';
import Font from 'react-font';
function MainMoodBoard() {

    const[data,setData]=React.useState(undefined)
    const [height,setHeight]=React.useState(Dimensions.get('window').height)
    const [width,setWidth]=React.useState(Dimensions.get('window').width)
    const onChange=()=>{
        setHeight(Dimensions.get('window').height)
        setWidth(Dimensions.get('window').width)
        // console.log(height+" : "+width)
      }
      useEffect(() => {
        Dimensions.addEventListener('change',onChange)
        fetch('/Mainitem')
            .then(res=>res.json())
            .catch(err=>{
                console.log(err)
            })
            .then(incomingData=>setData(incomingData),()=>{
            // console.log(data)
            console.log('data read : ' , data.listCategory[0].ct_img_url);
            })
            .catch(err=>{
                console.log(err)
            })
      },[])
    
    if(width>814){

        if(data!=undefined){
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent"
                    style={{
                        display:'block',
                        height:'auto',
                        backgroundColor:'black',
                        paddingTop:'77pt'
                    }}
                >
                    <div
                        style={{
                            display:'block',
                            height:'150px',
                            backgroundColor:'transparent',
                            topMargin:'77pt',
                            flexDirection:'column',
                            textAlign:'left',
                            paddingLeft:'100px'
                        }}
                    >
                        
                       
                        <div
                            style={{
                                display:'flex',
                                flexDirection:'row'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2,
                                // backgroundColor:'red'
                                transform:'translate(0px,-44px)'
                            }}
                        > 
                        무드보드
                        </span> 
                        <a
                        // onPress={()=>{  
                        //     Linking.openURL('/searchpage?mode=moodboard')
                        // }}
                        href={'/searchpage?mode=moodboard'}
                        >
                            <div
                                style={{
                                    position:'absolute',
                                    right:'100px',
                                    // top:'0px',
                                    borderRadius:10,
                                    border:'1px solid white',
                                    height:"30px",
                                    width:'100px',
                                    textAlign:'center'
                                }}
                            >
                                <span
                                    style={{
                                        color:'white',
                                        lineHeight:'30px',

                                    }}
                                >
                                    모두 둘러보기
                                </span>
                            </div>
                        </a>
                        </div>
                        <br></br>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                transform:'translate(0px,-110px)'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2,
                                // backgroundColor:'red'
                                
                            }}
                        > 
                            새로운 아이디어와 컨셉을 찾아보세요.
                        </span> 
                        </div>
                        <br></br>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                transform:'translate(0px,-130px)'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            어떤 자재가 어떤 컨셉으로 활용되는지 알아볼 수 있습니다.
                        </span> 
                        </div>
                    </div>
                        <div
                            style={{
                                flex: 1, 
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                flexwrap:'wrap',
                                display: 'grid',
                                gridTemplateColumns: 'auto auto auto auto',
                                paddingLeft: '77pt',
                                paddingRight: '77pt'
                            }}
                        >
                            
                        
                    {data.listMoodboard.map((listMoodboard)=>{
                        // console.log(listMoodboard)
                    return(
                        <a
                        // onPress={()=>{
                        //     Linking.openURL(`/moodboarddetail?mb_no=${listMoodboard.mb_no}`)
                        // }}
                        href={'/moodboarddetail?mb_no='+listMoodboard.mb_no}
                        style={{
                            flexDirection:'column',
                            borderRadius:10,
                            height:'260pt',
                            width:"200pt",
                            backgroundColor:'rgb(33,33,33)',
                            // boxShadow:'0px 0px 2px',
                            
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'column',
                                marginLeft:'25pt',
                                marginRight:'25pt',
                                marginTop:'25pt',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            
                        }}
                    >
                    
                    <img
                        style={{
                        display:'block',
                        height:'200pt',
                        width:'200pt',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        zIndex:1,
                        pointerEvents:'none',
                        transform:[{
                            translateX:'0px',
                            translateY:'0px'
                        }]
                        }}
                        // source={{
                        //     uri:
                        //         // data.listCategory[i].ct_img_url
                        //         listMoodboard.mb_img_url
                        // }}
                        src={
                            listMoodboard.mb_img_url
                        }

                    >
                    </img>
                    {/* <a
                        style={{
                        transform:[{
                            translateX:'100px'
                        }]
                        }}
                    > */}
                        <div
                            style ={{
                                height:'60pt',
                                width:'200pt',
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'center',
                                // alignItems:'center',
                                // justifyContent:'center',
                                flexDirection:'row',
                                // margin:11,
                                // padding:'auto',
                                pointerEvents:'none',
                                // borderTopRightRadius:20,
                                // borderBottomRightRadius:20,
                                backgroundColor:'rgb(33,33,33)',
                                // zIndex:99,
                                pointerEvents:'none',
                                borderBottomLeftRadius:10,
                                borderBottomRightRadius:10,
                                // left:0,
                                
                            }}
                        >
                            <div
                                style ={{
                                    height:'60pt',
                                    width:'190pt',
                                    fontSize: '15pt',
                                    fontWeight:'700',
                                    textDecorationLine:'none',
                                    // color:'white',
                                    // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                    // textShadowOffset: {width: 0, height: 0},
                                    // textShadowRadius: 2,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    color:'black',
                                    textAlign:'left',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row',
                                    marginLeft:'5pt',
                                    // padding:'auto',
                                    pointerEvents:'none',
                                    backgroundColor:"rgb(33,33,33)",
                                    // zIndex:99,
                                    pointerEvents:'none',
                                    lineHeight:'65px'
                                }}
                            >
                                <span
                                    style ={{
                                        height:'65pt',
                                        width:'250px',
                                        fontSize: '15pt',
                                        fontWeight:'700',
                                        textDecorationLine:'none',
                                        // color:'white',
                                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                        // textShadowOffset: {width: 0, height: 0},
                                        // textShadowRadius: 2,
                                        color:'white',
                                        textAlign:'left',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row',
                                        marginTop:'45pt',
                                        // padding:'auto',
                                        pointerEvents:'none',
                                        backgroundColor:'transparent',
                                        // zIndex:99,
                                        pointerEvents:'none',
                                        
                                    }}
                                >
                                    {/* {data.listCategory[i].ct_text} */}
                                    {listMoodboard.mb_name}
                                </span>
                            </div>
                        </div>
                    {/* </a> */}
                    </a>
                    )}
                    )}
                    </div>
                   
                    
                
                </div>
                </Font>
            );
        }
        else{
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent">
                
                    {/* <Navbar /> */}
                    {/* <NavBarFiller/> */}
                    <div
                        style={{
                            textAlign:'center'
                        }}
                    >
                        <span>
                        로딩중 ...
                        </span>
                    </div>
                    {/* <Content/> */}
                    
                    
                
                </div>
                </Font>
            );
        }
    
    }
    else if(width > 600 && width<=814){

        if(data!=undefined){
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent"
                    style={{
                        display:'block',
                        height:'auto',
                        backgroundColor:'black',
                        paddingTop:'77pt'

                    }}
                >
                    <div
                        style={{
                            display:'block',
                            height:'150px',
                            backgroundColor:'transparent',
                            topMargin:'77pt',
                            flexDirection:'column',
                            textAlign:'left',
                            paddingLeft:'100px'
                        }}
                    >
                        <div
                            style={{
                                display:'flex',
                                flexDirection:'row'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2,
                                transform:'translate(0px,-44px)'
                                // backgroundColor:'red'
                            }}
                        > 
                        무드보드
                        </span> 
                        
                        <a
                        
                        // onPress={()=>{  
                        //     Linking.openURL('/searchpage?mode=moodboard')
                        
                        // }}
                        href={'/searchpage?mode=moodboard'}
                        >
                            <div
                                style={{
                                    position:'absolute',
                                    right:'100px',
                                    // top:'0px',
                                    borderRadius:10,
                                    border:'1px solid white',
                                    height:"30px",
                                    width:'100px',
                                    textAlign:'center'
                                }}
                            >
                                <span
                                    style={{
                                        color:'white',
                                        lineHeight:'30px',
                                        fontSize:'15px'
                                    }}
                                >
                                    모두 둘러보기
                                </span>
                            </div>
                        </a>
                        </div>
                        <br></br>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                transform:'translate(0px,-110px)'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2,
                                // backgroundColor:'red'
                                
                            }}
                        > 
                            새로운 아이디어와 컨셉을 찾아보세요.
                        </span> 
                        </div>
                        <br></br>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                transform:'translate(0px,-130px)'
                            }}
                        >
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            어떤 자재가 어떤 컨셉으로 활용되는지 알아볼 수 있습니다.
                        </span> 
                        </div>
                    </div>
                        <div
                            style={{
                                flex: 1, 
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                flexwrap:'wrap',
                                display: 'grid',
                                gridTemplateColumns: 'auto auto auto',
                                paddingLeft: '77pt',
                                paddingRight: '77pt'
                            }}
                        >
                            
                        
                    {data.listMoodboard.map((listMoodboard)=>

                    
                        <a
                        // onPress={()=>{
                        //     Linking.openURL(`/moodboarddetail?mb_no=${listMoodboard.mb_no}`)
                        // }}
                        href={'/moodboarddetail?mb_no='+listMoodboard.mb_no}
                        style={{
                            flexDirection:'column',
                            borderRadius:10,
                            height:'260pt',
                            width:"200pt",
                            backgroundColor:'rgb(33,33,33)',
                            // boxShadow:'0px 0px 2px',
                            fontSize: '25pt',
                            fontWeight:'700',
                            textDecorationLine:'none',
                            // color:'white',
                            // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 2,
                            color:'black',
                            textAlign:'left',
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'column',
                            marginLeft:'25pt',
                            marginRight:'25pt',
                            marginTop:'25pt',
                            padding:'auto',
                            zIndex:2
                                // backgroundColor:'red'
                            
                        }}
                    >
                    
                    <img
                        style={{
                        display:'block',
                        height:'200pt',
                        width:'200pt',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        zIndex:1,
                        pointerEvents:'none',
                        transform:[{
                            translateX:'0px',
                            translateY:'0px'
                        }]
                        }}
                        // source={{
                        //     uri:
                        //         // data.listCategory[i].ct_img_url
                        //         listMoodboard.mb_img_url
                        // }}
                        src={
                            listMoodboard.mb_img_url
                        }

                    >
                    </img>
                    {/* <a
                        style={{
                        transform:[{
                            translateX:'100px'
                        }]
                        }}
                    > */}
                        <div
                            style ={{
                                height:'60pt',
                                width:'200pt',
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'center',
                                // alignItems:'center',
                                // justifyContent:'center',
                                flexDirection:'row',
                                // margin:11,
                                // padding:'auto',
                                pointerEvents:'none',
                                // borderTopRightRadius:20,
                                // borderBottomRightRadius:20,
                                backgroundColor:'rgb(33,33,33)',
                                // zIndex:99,
                                pointerEvents:'none',
                                borderBottomLeftRadius:10,
                                borderBottomRightRadius:10,
                                // left:0,
                                
                            }}
                        >
                            <div
                                style ={{
                                    height:'60pt',
                                    width:'190pt',
                                    fontSize: '15pt',
                                    fontWeight:'700',
                                    textDecorationLine:'none',
                                    // color:'white',
                                    // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                    // textShadowOffset: {width: 0, height: 0},
                                    // textShadowRadius: 2,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    color:'black',
                                    textAlign:'left',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row',
                                    marginLeft:'5pt',
                                    // padding:'auto',
                                    pointerEvents:'none',
                                    backgroundColor:"rgb(33,33,33)",
                                    // zIndex:99,
                                    pointerEvents:'none',
                                    lineHeight:'65px'
                                }}
                            >
                                <span
                                    style ={{
                                        height:'65pt',
                                        width:'250px',
                                        fontSize: '15pt',
                                        fontWeight:'700',
                                        textDecorationLine:'none',
                                        // color:'white',
                                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                        // textShadowOffset: {width: 0, height: 0},
                                        // textShadowRadius: 2,
                                        color:'white',
                                        textAlign:'left',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row',
                                        marginTop:'45pt',
                                        // padding:'auto',
                                        pointerEvents:'none',
                                        backgroundColor:'transparent',
                                        // zIndex:99,
                                        pointerEvents:'none',
                                        
                                    }}
                                >
                                    {/* {data.listCategory[i].ct_text} */}
                                    {listMoodboard.mb_name}
                                </span>
                            </div>
                        </div>
                    {/* </a> */}
                    </a>
                    )}
                    </div>
                   
                    
                
                </div>
                </Font>
            );
        }
        else{
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent">
                
                    {/* <Navbar /> */}
                    {/* <NavBarFiller/> */}
                    <div
                        style={{
                            textAlign:'center'
                        }}
                    >
                        <span>
                        로딩중 ...
                        </span>
                    </div>
                    {/* <Content/> */}
                    
                    
                
                </div>
                </Font>
            );
        }
    
    }
    else if(width > 351 && width<=600){

        if(data!=undefined){
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent"
                    style={{
                        display:'block',
                        height:'auto',
                        backgroundColor:'black',
                        paddingTop:'77pt'
                    }}
                >
                    <div
                        style={{
                            display:'block',
                            height:'150px',
                            backgroundColor:'transparent',
                            topMargin:'77pt',
                            flexDirection:'column',
                            textAlign:'left',
                            paddingLeft:'100px'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                        무드보드
                        </span> 
                        <br></br>
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            새로운 아이디어와 컨셉을 찾아보세요.
                        </span> 
                        <br></br>
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            어떤 자재가 어떤 컨셉으로 활용되는지 알아볼 수 있습니다.
                        </span> 
                    </div>
                        <div
                            style={{
                                flex: 1, 
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                flexwrap:'wrap',
                                display: 'grid',
                                gridTemplateColumns: 'auto auto',
                                paddingLeft: '77pt',
                                paddingRight: '77pt'
                            }}
                        >
                            
                        
                    {data.listMoodboard.map((listMoodboard)=>

                    
                        <a
                        onPress={()=>{
                            Linking.openURL(`/moodboarddetail?mb_no=${listMoodboard.mb_no}`)
                        }}
                        href={'/moodboarddetail?mb_no='+listMoodboard.mb_no}
                        style={{
                            flexDirection:'column',
                            borderRadius:10,
                            height:'260pt',
                            width:"200pt",
                            backgroundColor:'rgb(33,33,33)',
                            // boxShadow:'0px 0px 2px',
                            
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'column',
                                marginLeft:'auto',
                                marginRight:'auto',
                                marginTop:'25pt',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            
                        }}
                    >
                    
                    <img
                        style={{
                        display:'block',
                        height:'200pt',
                        width:'200pt',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        zIndex:1,
                        pointerEvents:'none',
                        transform:[{
                            translateX:'0px',
                            translateY:'0px'
                        }]
                        }}
                        // source={{
                        //     uri:
                        //         // data.listCategory[i].ct_img_url
                        //         listMoodboard.mb_img_url
                        // }}
                        src={listMoodboard.mb_img_url}

                    >
                    </img>
                    {/* <a
                        style={{
                        transform:[{
                            translateX:'100px'
                        }]
                        }}
                    > */}
                        <div
                            style ={{
                                height:'60pt',
                                width:'200pt',
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'center',
                                // alignItems:'center',
                                // justifyContent:'center',
                                flexDirection:'row',
                                // margin:11,
                                // padding:'auto',
                                pointerEvents:'none',
                                // borderTopRightRadius:20,
                                // borderBottomRightRadius:20,
                                backgroundColor:'rgb(33,33,33)',
                                // zIndex:99,
                                pointerEvents:'none',
                                borderBottomLeftRadius:10,
                                borderBottomRightRadius:10,
                                // left:0,
                                
                            }}
                        >
                            <div
                                style ={{
                                    height:'60pt',
                                    width:'190pt',
                                    fontSize: '15pt',
                                    fontWeight:'700',
                                    textDecorationLine:'none',
                                    // color:'white',
                                    // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                    // textShadowOffset: {width: 0, height: 0},
                                    // textShadowRadius: 2,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    color:'black',
                                    textAlign:'left',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row',
                                    marginLeft:'5pt',
                                    // padding:'auto',
                                    pointerEvents:'none',
                                    backgroundColor:"rgb(33,33,33)",
                                    // zIndex:99,
                                    pointerEvents:'none',
                                    lineHeight:"65px"
                                }}
                            >
                                <span
                                    style ={{
                                        height:'65pt',
                                        width:'250px',
                                        fontSize: '15pt',
                                        fontWeight:'700',
                                        textDecorationLine:'none',
                                        // color:'white',
                                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                        // textShadowOffset: {width: 0, height: 0},
                                        // textShadowRadius: 2,
                                        color:'white',
                                        textAlign:'left',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row',
                                        marginTop:'45pt',
                                        // padding:'auto',
                                        pointerEvents:'none',
                                        backgroundColor:'transparent',
                                        // zIndex:99,
                                        pointerEvents:'none',
                                        
                                    }}
                                >
                                    {/* {data.listCategory[i].ct_text} */}
                                    {listMoodboard.mb_name}
                                </span>
                            </div>
                        </div>
                    {/* </a> */}
                    </a>
                    )}
                    </div>
                   
                    
                
                </div>
                </Font>
            );
        }
        else{
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent">
                
                    {/* <Navbar /> */}
                    {/* <NavBarFiller/> */}
                    <div
                        style={{
                            textAlign:'center'
                        }}
                    >
                        <span>
                        로딩중 ...
                        </span>
                    </div>
                    {/* <Content/> */}
                    
                    
                
                </div>
                </Font>
            );
        }
    
    }
    else {

        if(data!=undefined){
            return (
                <Font family='Noto Sans KR'>
                <div className="MainContent"
                    style={{
                        display:'block',
                        height:'auto',
                        backgroundColor:'black',
                        paddingTop:'77pt'
                    }}
                >
                    <div
                        style={{
                            display:'block',
                            height:'150px',
                            backgroundColor:'transparent',
                            topMargin:'77pt',
                            flexDirection:'column',
                            textAlign:'left',
                            // paddingLeft:'auto',
                            // paddingRight:'auto'
                            paddingLeft:'45px',
                            paddingRight:'45px'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'center',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                        무드보드
                        </span> 
                        <br></br>
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            새로운 아이디어와 컨셉을 찾아보세요.
                        </span> 
                        <br></br>
                        <span
                            style={{
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'white',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                marginTop:'40px',
                                marginBottom:'40px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            }}
                        > 
                            어떤 자재가 어떤 컨셉으로 활용되는지 알아볼 수 있습니다.
                        </span> 
                    </div>
                        <div
                            style={{
                                flex: 1, 
                                // flexDirection: 'row',
                                justifyContent: 'center',
                                flexwrap:'wrap',
                                display: 'grid',
                                gridTemplateColumns: 'auto',
                                paddingLeft: 'auto',
                                paddingRight: 'auto'
                            }}
                        >
                            
                        
                    {data.listMoodboard.map((listMoodboard)=>

                    
                        <a
                        // onPress={()=>{
                        //     Linking.openURL(`/moodboarddetail?mb_no=${listMoodboard.mb_no}`)
                        // }}
                        href={'/moodboarddetail?mb_no='+listMoodboard.mb_no}
                        style={{
                            flexDirection:'column',
                            borderRadius:10,
                            height:'260pt',
                            width:"200pt",
                            backgroundColor:'rgb(33,33,33)',
                            // boxShadow:'0px 0px 2px',
                            
                                fontSize: '25pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'column',
                                marginLeft:'25px',
                                marginRight:'25px',
                                marginTop:'25px',
                                padding:'auto',
                                zIndex:2
                                // backgroundColor:'red'
                            
                        }}
                    >
                    
                    <img
                        style={{
                        display:'block',
                        height:'200pt',
                        width:'200pt',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        zIndex:1,
                        pointerEvents:'none',
                        transform:[{
                            translateX:'0px',
                            translateY:'0px'
                        }]
                        }}
                        // source={{
                        //     uri:
                        //         // data.listCategory[i].ct_img_url
                        //         listMoodboard.mb_img_url
                        // }}
                        src={listMoodboard.mb_img_url}

                    >
                    </img>
                    {/* <a
                        style={{
                        transform:[{
                            translateX:'100px'
                        }]
                        }}
                    > */}
                        <div
                            style ={{
                                height:'60pt',
                                width:'200pt',
                                fontSize: '15pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                // color:'white',
                                // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                // textShadowOffset: {width: 0, height: 0},
                                // textShadowRadius: 2,
                                color:'black',
                                textAlign:'center',
                                // alignItems:'center',
                                // justifyContent:'center',
                                flexDirection:'row',
                                // margin:11,
                                // padding:'auto',
                                pointerEvents:'none',
                                // borderTopRightRadius:20,
                                // borderBottomRightRadius:20,
                                backgroundColor:'rgb(33,33,33)',
                                // zIndex:99,
                                pointerEvents:'none',
                                borderBottomLeftRadius:10,
                                borderBottomRightRadius:10,
                                // left:0,
                                
                            }}
                        >
                            <div
                                style ={{
                                    height:'60pt',
                                    width:'190pt',
                                    fontSize: '15pt',
                                    fontWeight:'700',
                                    textDecorationLine:'none',
                                    // color:'white',
                                    // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                    // textShadowOffset: {width: 0, height: 0},
                                    // textShadowRadius: 2,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    color:'black',
                                    textAlign:'left',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row',
                                    marginLeft:'5pt',
                                    // padding:'auto',
                                    pointerEvents:'none',
                                    backgroundColor:"rgb(33,33,33)",
                                    // zIndex:99,
                                    pointerEvents:'none',
                                    lineHeight:'65px'
                                }}
                            >
                                <span
                                    style ={{
                                        height:'65pt',
                                        width:'250px',
                                        fontSize: '15pt',
                                        fontWeight:'700',
                                        textDecorationLine:'none',
                                        // color:'white',
                                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                                        // textShadowOffset: {width: 0, height: 0},
                                        // textShadowRadius: 2,
                                        color:'white',
                                        textAlign:'left',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row',
                                        marginTop:'45pt',
                                        // padding:'auto',
                                        pointerEvents:'none',
                                        backgroundColor:'transparent',
                                        // zIndex:99,
                                        pointerEvents:'none',
                                        
                                    }}
                                >
                                    {/* {data.listCategory[i].ct_text} */}
                                    {listMoodboard.mb_name}
                                </span>
                            </div>
                        </div>
                    {/* </a> */}
                    </a>
                    )}
                    </div>
                   
                    
                
                </div>
                </Font>
            );
        }
        else{
            return (
                <div className="MainContent">
                
                    {/* <Navbar /> */}
                    {/* <NavBarFiller/> */}
                    <div
                        style={{
                            textAlign:'center'
                        }}
                    >
                        <span>
                        로딩중 ...
                        </span>
                    </div>
                    {/* <Content/> */}
                    
                    
                
                </div>
            );
        }
    
    }
 
}
  
  export default MainMoodBoard;