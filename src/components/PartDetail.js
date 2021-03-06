import React,{useEffect} from 'react';
import {TouchableOpacity,Text,View,Modal,Image,TouchableHighlight,Linking,TextInput,Dimensions} from 'react-native';
import Navbar from './Navbar';
import NavBarFiller from './NavBarFiller';
import ClipBoard from './ClipBoard';
import Card from './Card';
import AddToShoppingCart from './AddToShoppingCart';
import parse from 'html-react-parser';
import { Carousel } from 'react-responsive-carousel';
import chatIcon from '../assets/chat.png'
import boxIcon from '../assets/icnBox.png'
import clipOff from '../assets/clipOff.png'
import clipOn from '../assets/clipOn.png'
const queryString = require('query-string');
function PartDetail(props){
    const [height,setHeight]=React.useState(Dimensions.get('window').height)
    const [width,setWidth]=React.useState(Dimensions.get('window').width)
    const [q,setQ]=React.useState(undefined)
    const [materialData,setMaterialData]=React.useState(undefined)
    const [hoverOne, setHoverOne]=React.useState(null)
    const [hoverTwo, setHoverTwo]=React.useState(null)
    const [clipBoardOne,setClipBoardOne]=React.useState(false)
    const [materialNumber,setMaterialNumber]=React.useState(undefined)
    const [refreshClipboard,setRefreshClipboard]=React.useState(0)
    const [addToShoppingCart,setAddToShoppingCart]=React.useState(false)
    const [selectedMeasure,setSelectedMeasure]=React.useState("m2")
    const [areaCalc,setAreaCalc]=React.useState([[0,0]])
    const [areaSum,setAreaSum]=React.useState(0)
    const [lossPercentage,setLossPercentage]=React.useState(10)
    const [loss,setLoss]=React.useState(0)
    const [totalArea,setTotalArea]=React.useState(0)
    const [orderArea,setOrderArea]=React.useState(0)
    const toggleClipBoardOne=()=>{
        setClipBoardOne(!clipBoardOne)
    }
    const toggleAddToShoppingCart=()=>{
        setAddToShoppingCart(!addToShoppingCart)
    }
    const onChange=()=>{
        setHeight(Dimensions.get('window').height)
        setWidth(Dimensions.get('window').width)
        // console.log(height+" : "+width)
      }
    const updateAreaData=()=>{
        var sum=0
        var loss=0
        var total=0
        for(var i=0; i<areaCalc.length; i++){
            sum+=areaCalc[i][0]*areaCalc[i][1]
        }
        loss=sum*lossPercentage/100
        total=loss+sum
        setAreaSum(sum)
        setLoss(loss)
        setTotalArea(total)
    }
    // const updateLossPercentage=(input)=>{
    //     setLossPercentage(input)
    // }
    const materialInfo=(qStr)=>{
    // console.log(qStr)
    fetch('/materialDetail?'+qStr
    )
    .then(res=>res.json())
    .then((incomingData)=>{
        console.log(incomingData)
        setMaterialData(incomingData)
        })
    .catch(err=>{
        console.log(err)
    })
    
}
    // var stringToHTML=function(str){
    //     var parser=new DOMParser();
    //     var doc = parser.parseFromString(str,'text/html')
    //     return doc.body;
    // }
    useEffect(() => {
        Dimensions.addEventListener('change',onChange)
        const parsed = queryString.parse(props.location.search);
        
        console.log(localStorage.login==undefined)
        if(localStorage.login!=undefined){
            var mem_no=undefined
            mem_no=JSON.parse(localStorage.login).message.split('_')[0]
            parsed.mem_no=mem_no 
        }
        else{
            parsed.mem_no=""
        }
        console.log(parsed)
        materialInfo(queryString.stringify(parsed)) 
        console.log('q = '+JSON.stringify(parsed))
        // console.log(materialData.mt_description.replaceAll("font-size: 13px;","font-size: 18px;"))
        // console.log(parsed.ct_id==undefined)
        // if(parsed.ct_id==undefined){
        //   brands()
        //   setDetailView(false)
        // }
        // else{
        //   oneBrand(parsed.ct_id)
        //   setBrandId(parsed.ct_id)
        //   setDetailView(true)
        // }
        
      },[])
    useEffect(()=>{
        updateAreaData()
    },[lossPercentage,areaCalc])
      if(materialData!=undefined){
        return(
            <div>
                <div
                    style={{
                        display: clipBoardOne ? 'block':'none' 
                    }}
                >
                    <ClipBoard toggleClipBoard={toggleClipBoardOne} material_num={materialNumber} refresh={clipBoardOne}/>
                </div>
                <div
                    style={{
                        display: addToShoppingCart ? 'block':'none' 
                    }}
                >
                    <AddToShoppingCart toggleShoppingCart={toggleAddToShoppingCart} material_data={materialData}/>
                </div>
                <Navbar />
                <NavBarFiller/>
                
                <div
                    style={{
                        backgroundColor:'transparent',
                        height:'50px',
                        width:'100%'
                    }}
                >

                </div>
                <View
                    style={{
                        textAlign:'left',
                        paddingLeft:'160px',
                        paddingRight:'160px'
                    }}
                >
                    <View
                        style={{
                            backgroundColor:'transparent',
                            height:'400px',
                            width:'100%',
                            flexDirection:'row',
                            // flex:1,
                            // justifyContent:'flex-start'
                            justifyContent:'space-between',
                            alignItems:'center'

                        }}
                    >
                        <View
                            style={{
                                backgroundColor:'transparent',
                                // position:'absolute',
                                justifyContent:'flex-start',
                                // flex:1,
                                flexDirection:'row',
                                width:'400px'
                                
                            }}
                        >
                            <Image
                            style={{
                            display:'block',
                            height:'400px',
                            width:'400px',
                            // borderTopLeftRadius:10,
                            // borderTopRightRadius:10,
                            borderRadius:'10px',
                            pointerEvents:'none',
                            marginLeft:'auto',
                            marginRight:'auto',
                            position:'relative',
                            left:'0px'
                            // transform:[{
                            //     translateX:'0px',
                            //     translateY:'0px'
                            // }]
                            }}
             
                            source={{
                                uri:
                                    materialData.mt_feature_img_url
                            }}

                            >
                            </Image>
                            <div
                            style={{
                                backgroundColor:'white',
                                width:'65px',
                                height:'20px',
                                position:'absolute',
                                zIndex:100,
                                top:'15px',
                                left:'15px',
                                borderRadius:'15px',
                                // display:hover==index ? 'block':'none'
                            }}
                            onPress={()=>{  
                                // console.log('pressed clip ' + result.mt_no)
                            }}
                        >
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'4px',
                                    left:'6px',
                                    fontWeight:50,
                                    fontSize:'15px',
                                    color:materialData.mt_budget<1 ? 'rgb(219,219,219)':'black' 
                                }}
                            >₩</Text>
                           <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'4px',
                                    left:'16px',
                                    fontWeight:50,
                                    fontSize:'15px',
                                    color:materialData.mt_budget<2 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'4px',
                                    left:'26px',
                                    fontWeight:50,
                                    fontSize:'15px',
                                    color:materialData.mt_budget<3 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'4px',
                                    left:'36px',
                                    fontWeight:50,
                                    fontSize:'15px',
                                    color:materialData.mt_budget<4 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'4px',
                                    left:'46px',
                                    fontWeight:50,
                                    fontSize:'15px',
                                    color:materialData.mt_budget<5 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                        </div>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                position:'absolute',
                                right:'15px',
                                top:'19px'
                            }}
                        >
                        <TouchableOpacity
                            onPress={()=>{  
                                console.log(materialData.mt_no)
                                setMaterialNumber(materialData.mt_no)
                                toggleClipBoardOne()
                              //   console.log('pressed clip ' + brandData.bestproducts_brand[index].mt_no)
                            }}
                        >
                        <Image
                                style={{
                                display:'block',
                                height:'40px',
                                width:'40px',
                                borderTopLeftRadius:10,
                                borderTopRightRadius:10,
                                zIndex:1,
                                pointerEvents:'none',
                                // display:materialData.is_clipped==false ? 'block':'none'
                                // transform:[{
                                //     translateX:'0px',
                                //     translateY:'0px'
                                // }]
                                }}
                                source={clipOff}

                                >
                                
                            </Image>
                            {/* <Image
                                style={{
                                display:'block',
                                height:'40px',
                                width:'40px',
                                borderTopLeftRadius:10,
                                borderTopRightRadius:10,
                                zIndex:1,
                                pointerEvents:'none',
                                display:materialData.is_clipped==true ? 'block':'none'
                                // transform:[{
                                //     translateX:'0px',
                                //     translateY:'0px'
                                // }]
                                }}
                                source={clipOn}

                                >
                                
                            </Image> */}
                            </TouchableOpacity>
                        </div>
                        </View>
                        <View
                            style={{
                                flex:1,
                                flexDirection:'column',
                                backgroundColor:'transparent',
                                width:width-800,
                                height:'400px',
                                justifyContent:'left',
                                textAlign:'left',
                                paddingLeft:'15px',
                                paddingRight:'15px',
                                whiteSpace:'nowrap',
                                textOverflow:'ellipsis',
                                // overflowY:'hidden'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight:700,
                                    fontSize:'30px',
                                    whiteSpace:'nowrap',
                                    textOverflow:'ellipsis'

                                }}
                            >
                                {materialData.mt_name}
                            </Text>
                            <Text
                                style={{
                                    
                                    fontWeight:700,
                                    fontSize:'30px',
                                    marginBottom:'13px',
                                    whiteSpace:'nowrap',
                                }}
                            >
                                {materialData.mt_subname}
                            </Text>
                            <div
                                style={{
                                    // flex:1,
                                    flextDirection:'row',
                                    backgroundColor:'transparent'
                                }}
                            >
                               
                                
                                <View
                                style={{
                                    height:'24px',
                                    width:'100%',
                                    backgroundColor:'transparent',
                                    marginBottom:'10px'                                
                                }}
                                    
                                >
                                    <TouchableOpacity
                                        onPress={()=>{
                                            Linking.openURL('/brands?ct_id='+materialData.brd_no)
                                        }}
                                    
                                    >
                                    <Image
                                    style={{
                                        height:'24px',
                                        width:'24px',
                                        borderRadius:'12px',
                                        position:'absolute'
                                    }}
                                    source={{
                                        uri:
                                            materialData.brd_logo_img_url
                                    }} 
                                ></Image>
                                </TouchableOpacity>

                                    <div
                                    style={{
                                        height:'24px',
                                        width:'24px',
                                        backgroundColor:'transparent'
                                    }}
                                        
                                    >

                                    </div>
                                    <div
                                        style={{
                                            transform:'translate(24px,-2px)',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight:700,
                                                fontSize:'21px',
                                                whiteSpace:'nowrap',
                                                textOverflow:'ellipsis'
                                            }}
                                        >
                                            &nbsp;
                                            {materialData.brd_name_eng}
                                        </Text>
                                        <Text 
                                            style={{
                                                fontWeight:700,
                                                fontSize:'21px',
                                                whiteSpace:'nowrap',
                                            }}
                                        >
                                            &nbsp;
                                            {materialData.brd_name_kor}
                                        </Text>
                                    </div>
                                </View>
                                
                            </div>
                            <div
                                style={{
                                    display:materialData.mt_shipfrom=="CLIP"?"block":"none"
                                }}
                            >
                                <img
                                    src={boxIcon}
                                    style={{
                                        //display: categoryOpened? 'none': 'block',
                                        width:'18px',
                                        height:'18px'
                                    }}
                                >
                                </img>
                                <Text
                                    style={{
                                        fontWeight:700,
                                        fontSize:'18px',
                                        marginBottom:'15px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                    &nbsp;클립 당일 묶음발송 품목
                                </Text>
                            </div>
                            <div>
                                <Text
                                    style={{
                                        fontWeight:700,
                                        fontSize:'18px',
                                        marginBottom:'15px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                    자재 카테고리:&nbsp;
                                </Text>
                                <Text
                                    style={{
                                        whiteSpace:'nowrap',
                                        fontSize:'18px',
                                        lineHeight:24
                                    }}
                                >
                                    {materialData.mt_category}
                                </Text>
                            </div>
                            <div>
                                <Text
                                    style={{
                                        fontWeight:700,
                                        fontSize:'18px',
                                        marginBottom:'15px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                     콜렉션:&nbsp;
                                </Text>
                                <Text
                                    style={{
                                        whiteSpace:'nowrap',
                                        fontSize:'18px',
                                        lineHeight:24
                                    }}
                                >
                                    {materialData.mt_collection}
                                </Text>
                            </div>
                            <div>
                                <Text
                                    style={{
                                        fontWeight:700,
                                        fontSize:'18px',
                                        marginBottom:'15px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                     SKU:&nbsp;
                                </Text>
                                <Text
                                    style={{
                                        whiteSpace:'nowrap',
                                        fontSize:'18px',
                                        lineHeight:24
                                    }}
                                >
                                    {materialData.mt_sku}
                                </Text>
                            </div>
                            <div>
                                <Text
                                    style={{
                                        fontWeight:700,
                                        fontSize:'18px',
                                        marginBottom:'15px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                     샘플 사이즈:&nbsp;
                                </Text>
                                <Text   
                                    style={{
                                        fontSize:'18px',
                                        whiteSpace:'nowrap',
                                        lineHeight:24
                                    }}
                                >
                                    {materialData.mt_sample_width}&nbsp;mm&nbsp;x&nbsp;{materialData.mt_sample_height}&nbsp;mm
                                </Text>
                            </div>
                            <View
                                style={{
                                    position:'absolute',
                                    bottom:"5px",
                                    backgroundColor:'transparent',
                                    height:'40px',
                                    width:'100%',
                                    flexDirection:'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor:'transparent',
                                        height:'40px',
                                        width:'40px'
                                    }}
                                >
                                    <Image
                                    style={{
                                    display:'block',
                                    height:'50px',
                                    width:'50px',
                                    // borderTopLeftRadius:10,
                                    // borderTopRightRadius:10,
                                    zIndex:1,
                                    pointerEvents:'none'
                                    // transform:[{
                                    //     translateX:'0px',
                                    //     translateY:'0px'
                                    // }]
                                    }}
                                    source={chatIcon}

                                    >
                                    
                                    </Image>
                                </TouchableOpacity>
                                <div
                                    style={{
                                        backgroundColor:"transparent",
                                        width:'250px',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        height:'50px',
                                        paddingLeft:'15px',
                                    }}
                                >
                                <TouchableOpacity
                                    style={{
                                        display:'block',
                                        height:'50px',
                                        width:(width-800)+'px',
                                        minWidth:"250px",
                                        // width:'100%',
                                        backgroundColor:'rgb(255,123,88)',
                                        color:'white',
                                        borderRadius:'10px',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        textAlign:'center',
                                        verticalAlign:'middle',
                                        lineHeight:'50px',
                                        

                                    }}
                                    onPress={()=>{
                                        console.log(materialData)
                                        toggleAddToShoppingCart()
                                    }}
                                >
                  
                                        <Text
                                            style={{
                                                color:'white',
                                                fontSize:'18px'
                                            }}
                                        >
                                            장바구니에 샘플 담기
                                        </Text>
                                    
                                </TouchableOpacity>
                                </div>
                            </View>
                            
                        </View>
                        
                    </View>
                    <View
                        style={{
                            display:'flex',
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width:"50%",
                                backgroundColor:'transparent'
                            }}
                        >
                            {/* {parse(materialData.mt_description)} */}
                            {parse(materialData.mt_description.replaceAll("font-size: 13px;","font-size: 18px;"))}
                        </View>
                        <View
                            style={{
                                width:"50%",
                                height:'1000px',
                                backgroundColor:'transparent',
                                display:'flex',
                                flexDirection:'column',
                                paddingTop:'20px'
                            }}
                        >
                            <View
                            style={{
                                textAlign:'left',
                                display:'flex',
                                flexDirection:'row',
                                paddingTop:'10px',
                                paddingLeft:'10px',
                                paddingRight:'10px',
                                paddingBottom:'10px',
                                position:'relative'
                                
                            }}
                            >
                                <Text
                                    style={{
                                        display:selectedMeasure=="m2"?'flex':"none",
                                        fontSize:"21px",
                                        fontWeight:700,
                                        lineHeight:'30px'
                                    }}
                                >
                                    14200원/&#13217;
                                </Text>
                                <Text
                                    style={{
                                        display:selectedMeasure=="py"?'flex':"none",
                                        fontSize:"21px",
                                        fontWeight:700,
                                        lineHeight:'30px'
                                    }}
                                >
                                    46860원/평
                                </Text>
                                <View
                                    style={{
                                        borderRadius:'15px',
                                        height:"30px",
                                        width:"120px",
                                        backgroundColor:'transparent',
                                        position:'absolute',
                                        right:'0px',
                                        border: "1px solid rgb(140,140,140)",
                                        display:'flex',
                                        flexDirection:'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            height:'28px',
                                            width:'58px',
                                            backgroundColor:selectedMeasure=="m2"?'rgb(108,108,108)':'rgb(245,245,245)',
                                            borderTopLeftRadius:'15px',
                                            borderBottomLeftRadius:'15px',
                                            textAlign:'center'
                                        }}
                                        onPress={()=>{
                                            setSelectedMeasure('m2')
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:'18px',
                                                lineHeight:'28px',
                                                color:selectedMeasure=="m2"?'white':'rgb(135,135,135)',
                                            }}
                                        >
                                            &#13217;
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            height:'28px',
                                            width:'59px',
                                            backgroundColor:selectedMeasure=="py"?'rgb(108,108,108)':'rgb(245,245,245)',
                                            borderTopRightRadius:'15px',
                                            borderBottomRightRadius:'15px',
                                            textAlign:'center'
                                        }}
                                        onPress={()=>{
                                            setSelectedMeasure('py')
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:'18px',
                                                lineHeight:'28px',
                                                color:selectedMeasure=="py"?'white':'rgb(135,135,135)',
                                            }}
                                        >
                                            평
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                            style={{
                                textAlign:'left',
                                display:'flex',
                                flexDirection:'row',
                                paddingTop:'10px',
                                paddingLeft:'10px',
                                paddingRight:'10px',
                                paddingBottom:'10px'
                            }}
                            >
                                <Text
                                        style={{
                                            fontSize:"14px",
                                            
                                        }}
                                    >
                                        20448원/상자
                                </Text>
                                <Text>
                                    &nbsp;
                                </Text>
                                <div
                                    style={{
                                        display:selectedMeasure=="m2"?'flex':"none"
                                    }}
                                >
                                    <Text
                                            style={{
                                                // marginTop:'4px',
                                                fontSize:"14px"
                                            }}
                                        >
                                            (1상자 = 1.44&#13217;)
                                    </Text>
                                </div>
                                <div
                                    style={{
                                        display:selectedMeasure=="py"?'flex':"none"
                                    }}
                                >
                                    <Text
                                            style={{
                                                // marginTop:'4px',
                                                fontSize:"14px"
                                            }}
                                        >
                                            (1상자 = 0.44평)
                                    </Text>
                                </div>
                            </View>
                            <View
                                style={{
                                    height:"1px",
                                    width:'100%',
                                    backgroundColor:"rgb(205,205,205)",
                                    // marginTop:'10px',
                                    // marginBottom:'10px'
                                }}
                            >
                            </View>
                            <View
                                style={{
                                    display:'flex',
                                    flexDirection:'row',
                                    paddingTop:'10px',
                                    paddingLeft:'10px',
                                    paddingRight:'10px',
                                    paddingBottom:'10px'
                                }}
                            >
                            <Text
                             style={{
                                 fontSize:'21px'
                             }}
                            >
                                납품기간 (Lead Time)
                            
                            </Text>
                            <Text>
                                &nbsp;
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontSize:'21px'
                                    }}
                                >
                                    &gt;
                                </Text>
                            </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    height:"1px",
                                    width:'100%',
                                    backgroundColor:"rgb(205,205,205)",
                                    
                                }}
                            >
                            </View>
                            <View
                                style={{
                                    paddingTop:'10px',
                                    paddingLeft:'10px',
                                    paddingRight:'10px',
                                    paddingBottom:'10px',
                                    backgroundColor:'rgb(246,246,246)'
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight:700
                                    }}
                                >
                                    주문수량 계산기
                                </Text>
                                <View
                                    style={{
                                        marginTop:'10px',
                                        textAlign:'left',
                                        display:'flex',
                                        flexDirection:'row'
                                    }}
                                >
                                    
                                    <TextInput
                                        onChangeText={(text) => {
                                        //props.setUserPhoneNumber(text);
                                        // props.onPhoneNumberChange()
                                        setOrderArea(text)
                                        }}
                                        style={{
                                        // marginTop: "10px",
                                        border: "1px solid rgb(140,140,140)",
                                        borderRadius: "4px",
                                        width:'60px',
                                        height:"30px",
                                        backgroundColor:'white'
                                        }}
                                        
                                        value={orderArea}
                                    ></TextInput>
                                    <View
                                        style={{
                                            backgroundColor:'transparent',
                                            height:"30px",
                                            lineHeight:'30px'
                                        }}
                                    >
                                    {/* <Text
                                        style={{
                                            fontSize:"24px"
                                        }}
                                    >
                                        &nbsp;&#13217;&nbsp;
                                    </Text>
                                     */}
                                     <select 
                                        value={selectedMeasure}
                                        onChange={(e)=>{
                                            console.log(e.target.value)
                                            setSelectedMeasure(e.target.value)
                                        }}
                                        style={{
                                           
                                            padding:'5px 12px',
                                            // border: '1px solid black',
                                            border: "1px solid rgb(140,140,140)",
                                            borderRadius: "4px",
                                            width:'70px',
                                            height:"30px",
                                            // appearance:'none'
                                        }}
                                    >
                                        <option key='m2' value='m2' 
                                            style={{
                                                color: 'grey'
                                            }}
                                        >
                                            &#13217;
                                        </option>
                                        <option key='py' value='py' 
                                            style={{
                                                color: 'grey'
                                            }}
                                        >
                                           평
                                        </option>

                                    </select>
                                    </View>
                                    <View
                                        style={{
                                            height:'30px',
                                            lineHeight:"30px",
                                            backgroundColor:'transparent',

                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"12px",
                                                color:'rgb(95,95,95)',
                                                marginTop:'6px'
                                            }}
                                        >
                                            &nbsp;&#9658;&nbsp;
                                        </Text>
                                    </View>
                                    <TextInput
                                        onChangeText={(text) => {
                                        //props.setUserPhoneNumber(text);
                                        // props.onPhoneNumberChange()
                                        }}
                                        placeholder=" 좌측에 필요 수량을 입력하세요"
                                        style={{
                                        // marginTop: "10px",
                                        border: "1px solid rgb(140,140,140)",
                                        borderRadius: "4px",
                                        width:'240px',
                                        height:"30px",
                                        backgroundColor:'white'
                                        }}
                                        
                                        // value={props.userPhoneNumber}
                                    ></TextInput>
                                </View>
                                <Text
                                    style={{
                                        color:"rgb(29,29,29)",
                                        fontSize:'12px'
                                    }}
                                >
                                    하단의 면적 계산기를 통해 필요한 수량을 계산해 보세요.
                                </Text>
                                <View
                                    style={{
                                        marginTop:'10px'
                                    }}
                                >
                                    {/* <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            transform:"translate(23px,0px)",
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            정상 판매가 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)",
                                                textDecoration:"line-through"
                                            }}
                                        >
                                            0원
                                        </Text>
                                    </View> */}
                                    <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            주문 예상 금액 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)",
                                                fontWeight:700
                                            }}
                                        >
                                            0원
                                        </Text>
                                    </View>
                                    {/* <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            transform:"translate(40px,0px)",
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            할인 금액 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)"
                                            }}
                                        >
                                            0원
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)"
                                            }}
                                        >
                                            (0%)
                                        </Text>
                                    </View> */}
                                    {/* <Text
                                        style={{
                                            fontSize:"12px",
                                            color:"rgb(160,22,7)",
                                            transform:"translate(132px,0px)",
                                            textDecoration:"underline"
                                        }}
                                    >
                                        ※표기된 가격은 공급가(VAT 불포함) 입니다.
                                    </Text> */}
                                    <TouchableOpacity
                                        style={{
                                            display:'block',
                                            height:'50px',
                                            // width:(width-800)+'px',
                                            minWidth:"250px",
                                            // width:'100%',
                                            backgroundColor:'rgb(78,78,78)',
                                            color:'white',
                                            borderRadius:'10px',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            textAlign:'center',
                                            verticalAlign:'middle',
                                            lineHeight:'50px',
                                            marginTop:'10px'

                                        }}
                                        onPress={()=>{
                                            console.log(materialData)
                                            // toggleAddToShoppingCart()
                                        }}
                                    >
                    
                                            <Text
                                                style={{
                                                    color:'white',
                                                    fontSize:'18px'
                                                }}
                                            >
                                                구매 또는 문의하기
                                            </Text>
                                        
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View
                                style={{
                                    height:"1px",
                                    width:'100%',
                                    backgroundColor:"rgb(205,205,205)",
                                    
                                }}
                            >
                            </View> */}
                            <View
                                style={{
                                    marginTop:'10px',
                                    paddingTop:'10px',
                                    paddingLeft:'10px',
                                    paddingRight:'10px',
                                    paddingBottom:'10px',
                                    backgroundColor:'rgb(246,246,246)'
                                }}
                            >
                                <View
                                    style={{
                                        display:'flex',
                                        flexDirection:'row'
                                    }}
                                >
                                <Text
                                    style={{
                                        fontWeight:700,
                                        
                                    }}
                                >
                                    면적 계산기
                                </Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        var temp=areaCalc.slice()
                                        temp.push([0,0])
                                        setAreaCalc(temp)
                                    }}
                                    style={{
                                        position:'absolute',
                                        right:"0px"
                                    }}
                                >
                                    <Text>
                                        면적 추가
                                    </Text>
                                </TouchableOpacity>
                                </View>
                                 <View
                                    style={{
                                        height:"1px",
                                        width:'100%',
                                        backgroundColor:"rgb(205,205,205)",
                                        
                                    }}
                                >
                                </View>
                                {areaCalc.map((oneArea,index)=>{
                                    // console.log("YO "+ oneArea[0]+" "+oneArea[1])
                                return(

                                
                                
                                <View
                                    style={{
                                        marginTop:'10px',
                                        textAlign:'left',
                                        display:'flex',
                                        flexDirection:'row'
                                    }}
                                >
                                    
                                    <TextInput
                                        onChangeText={(text) => {
                                        //props.setUserPhoneNumber(text);
                                        // props.onPhoneNumberChange()
                                            var temp=areaCalc.slice()
                                            temp[index][0]=text
                                            setAreaCalc(temp)
                                            updateAreaData()
                                        }}
                                        keyboardType="numeric"
                                        style={{
                                        // marginTop: "10px",
                                        border: "1px solid rgb(140,140,140)",
                                        borderRadius: "4px",
                                        width:'60px',
                                        height:"30px",
                                        backgroundColor:'white'
                                        }}
                                        // placeholder="0"
                                        value={oneArea[0]}
                                    ></TextInput>
                                    <View
                                        style={{
                                            backgroundColor:'transparent',
                                            height:"30px",
                                            lineHeight:'30px'
                                        }}
                                    >
                                    <Text
                                        style={{
                                            fontSize:"24px"
                                        }}
                                    >
                                        &nbsp;m&nbsp;
                                    </Text>
                                    
                                     
                                    </View>
                                    <View
                                        style={{
                                            height:'30px',
                                            lineHeight:"30px",
                                            backgroundColor:'transparent',

                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"12px",
                                                color:'rgb(95,95,95)',
                                                marginTop:'6px'
                                            }}
                                        >
                                            &nbsp;X&nbsp;
                                        </Text>
                                    </View>
                                    <TextInput
                                        onChangeText={(text) => {
                                        //props.setUserPhoneNumber(text);
                                        // props.onPhoneNumberChange()
                                        var temp=areaCalc.slice()
                                            temp[index][1]=text
                                            setAreaCalc(temp)
                                            updateAreaData()
                                        }}
                                        // keyboardType="numeric"
                                        style={{
                                        // marginTop: "10px",
                                        border: "1px solid rgb(140,140,140)",
                                        borderRadius: "4px",
                                        width:'60px',
                                        height:"30px",
                                        backgroundColor:'white'
                                        }}
                                        
                                        value={oneArea[1]}
                                    ></TextInput>
                                    <View
                                        style={{
                                            backgroundColor:'transparent',
                                            height:"30px",
                                            lineHeight:'30px'
                                        }}
                                    >
                                    <Text
                                        style={{
                                            fontSize:"24px"
                                        }}
                                    >
                                        &nbsp;m&nbsp;
                                    </Text>
                                    
                                     
                                    </View>
                                    <View
                                        style={{
                                            height:'30px',
                                            lineHeight:"30px",
                                            backgroundColor:'transparent',

                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"12px",
                                                color:'rgb(95,95,95)',
                                                marginTop:'6px'
                                            }}
                                        >
                                            &nbsp;&#9658;&nbsp;
                                        </Text>
                                    </View>
                                    {/* <TextInput
                                        onChangeText={(text) => {
                                        //props.setUserPhoneNumber(text);
                                        // props.onPhoneNumberChange()
                                        }}
                                        // placeholder=" 좌측에 필요 수량을 입력하세요"
                                        style={{
                                        // marginTop: "10px",
                                        border: "1px solid rgb(140,140,140)",
                                        borderRadius: "4px",
                                        width:'240px',
                                        height:"30px",
                                        backgroundColor:'white'
                                        }}
                                        
                                        // value={props.userPhoneNumber}
                                    ></TextInput> */}
                                    <Text
                                        style={{
                                            fontSize:'24px',
                                            lineHeight:'30px'
                                        }}
                                    >
                                        {oneArea[0]*oneArea[1]}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize:"24px"
                                        }}
                                    >
                                        &nbsp;&#13217;&nbsp;
                                    </Text>
                                    <View
                                        style={{
                                            display:index>0?'flex':'none'
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={()=>{
                                                var temp=areaCalc.slice()
                                                temp.splice(index,1)
                                                setAreaCalc(temp)
                                                // updateAreaData()
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    lineHeight:'30px'
                                                }}
                                            >
                                                X
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                )
                                
                                // <Text>
                                //     oneArea
                                // </Text>
                                })}
                                <View
                                    style={{
                                        display:'flex',
                                        flexDirection:'row',
                                        marginTop:'15px'
                                    }}
                                >
                                    <Text>
                                        총 면적
                                    </Text>
                                    <Text
                                        style={{
                                            position:'absolute',
                                            right:"0px"
                                        }}
                                    >
                                        {areaSum}&#13217;
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display:'flex',
                                        flexDirection:'row',
                                        marginTop:'15px'
                                    }}
                                >
                                    <Text
                                        style={{
                                            lineHeight:'30px'
                                        }}
                                    >
                                        로스율
                                    </Text>
                                    <View
                                        style={{
                                            position:'absolute',
                                            left:"60px",
                                            display:'flex',
                                            flexDirection:'row'
                                        }}
                                    >
                                        <TextInput
                                            onChangeText={(text) => {
                                            //props.setUserPhoneNumber(text);
                                            // props.onPhoneNumberChange()
                                                setLossPercentage(text)
                                                // updateLossPercentage(text)
                                                //updateAreaData()
                                            }}
                                            // keyboardType="numeric"
                                            style={{
                                            // marginTop: "10px",
                                            border: "1px solid rgb(140,140,140)",
                                            borderRadius: "4px",
                                            width:'60px',
                                            height:"30px",
                                            backgroundColor:'white',
                                            // position:'absolute',
                                            // left:'60px'
                                            }}
                                            
                                            value={lossPercentage}
                                        ></TextInput>
                                        <Text
                                            style={{
                                                lineHeight:'30px',
                                                positioin:'absolute',
                                                right:"100px"

                                            }}
                                        >
                                            &nbsp;%
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            position:'absolute',
                                            right:"0px",
                                            lineHeight:'30px'
                                        }}
                                    >
                                        = {loss} &#13217;
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display:'flex',
                                        flexDirection:'row',
                                        marginTop:'15px'
                                    }}
                                >
                                    <Text>
                                        주문면적
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:"15px"
                                        }}
                                    >
                                        {areaSum}&#13217;
                                    </Text>
                                    <Text>
                                    &nbsp;+&nbsp;
                                    </Text>
                                    <Text>
                                        {loss}&#13217;
                                    </Text>
                                    <View
                                        style={{
                                            position:'absolute',
                                            right:"0px",
                                            display:'flex',
                                            flexDirection:'row'
                                        }}
                                    >
                                        <Text>
                                        &nbsp;=&nbsp;
                                        </Text>
                                        <Text>
                                            {totalArea}&#13217;
                                        </Text>
                                    </View>
                                    
                                </View>
                                <TouchableOpacity
                                        style={{
                                            display:'block',
                                            height:'50px',
                                            // width:(width-800)+'px',
                                            minWidth:"250px",
                                            // width:'100%',
                                            backgroundColor:'rgb(78,78,78)',
                                            color:'white',
                                            borderRadius:'10px',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            textAlign:'center',
                                            verticalAlign:'middle',
                                            lineHeight:'50px',
                                            marginTop:'10px'

                                        }}
                                        onPress={()=>{
                                            //console.log(materialData)
                                            // toggleAddToShoppingCart()
                                            setOrderArea(totalArea)
                                        }}
                                    >
                    
                                            <Text
                                                style={{
                                                    color:'white',
                                                    fontSize:'18px'
                                                }}
                                            >
                                                주문수량에 적용
                                            </Text>
                                        
                                    </TouchableOpacity>
                                <View
                                    style={{
                                        marginTop:'10px'
                                    }}
                                >
                                    {/* <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            transform:"translate(23px,0px)",
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            정상 판매가 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)",
                                                textDecoration:"line-through"
                                            }}
                                        >
                                            0원
                                        </Text>
                                    </View> */}
                                    {/* <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            주문 예상 금액 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)",
                                                fontWeight:700
                                            }}
                                        >
                                            0원
                                        </Text>
                                    </View> */}
                                    {/* <View
                                        style={{
                                            display:'flex',
                                            flexDirection:'row',
                                            transform:"translate(40px,0px)",
                                            marginTop:"10px"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(71,71,71)"
                                            }}
                                        >
                                            할인 금액 :
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)"
                                            }}
                                        >
                                            0원
                                        </Text>
                                        <Text>
                                            &nbsp;
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:"20px",
                                                color:"rgb(160,22,7)"
                                            }}
                                        >
                                            (0%)
                                        </Text>
                                    </View> */}
                                    {/* <Text
                                        style={{
                                            fontSize:"12px",
                                            color:"rgb(160,22,7)",
                                            transform:"translate(132px,0px)",
                                            textDecoration:"underline"
                                        }}
                                    >
                                        ※표기된 가격은 공급가(VAT 불포함) 입니다.
                                    </Text> */}
                                    {/* <TouchableOpacity
                                        style={{
                                            display:'block',
                                            height:'50px',
                                            // width:(width-800)+'px',
                                            minWidth:"250px",
                                            // width:'100%',
                                            backgroundColor:'rgb(78,78,78)',
                                            color:'white',
                                            borderRadius:'10px',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            textAlign:'center',
                                            verticalAlign:'middle',
                                            lineHeight:'50px',
                                            marginTop:'10px'

                                        }}
                                        onPress={()=>{
                                            console.log(materialData)
                                            // toggleAddToShoppingCart()
                                        }}
                                    >
                    
                                            <Text
                                                style={{
                                                    color:'white',
                                                    fontSize:'18px'
                                                }}
                                            >
                                                구매 또는 문의하기
                                            </Text>
                                        
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                            
                        </View>

                    </View>
                    <View>
                        <Text
                        style={{
                                    
                            fontWeight:700,
                            fontSize:'30px',
                            marginBottom:'12px',
                            marginTop:'12px'
                            
                        }}
                        >
                            {materialData.brd_name_eng}
                        </Text>
                        <Text
                        style={{
                                    
                            fontWeight:700,
                            fontSize:'30px',
                            marginBottom:'24px'
                            
                        }}
                        >
                            {materialData.brd_name_kor}
                        </Text>
                        <Text
                        style={{
                            fontWeight:400,
                            fontSize:'21px',
                            lineHeight:28,
                            marginBottom:'12px',
                          }}
                        >
                            {materialData.brd_description}
                        </Text>
                        <Carousel
                            style={{
                                borderRadius:10
                            }}
                            showArrows={true} 
                            showStatus={false} 
                            showIndicators={true}
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={4500}
                            transitionTime={500}
                            emulateTouch={true}
                            stopOnHover={false}
                            //swipeScrollTolerance={1}
                            useKeyboardArrows={true}
                            //centerSlidePercentage={10}
                            >
                            {materialData.pictures_brand.map((atom)=>
                                <div
                                    style={{
                                    backgroundColor:'gainsboro',
                                    
                                    }}
                                >
                                    <img src={atom.pic_url}
                                    style={{
                                        height:"300px",
                                        width:"auto",
                                        // borderRadius:10
                                    }}
                                    />
                                </div>
                                )}
                        </Carousel>
                        <Text
                            style={{
                                fontSize: '21px',
                                fontWeight:'700',
                                marginTop:'25px',
                                marginBottom:'30px',

                            }}
                        >
                            {materialData.brd_name_kor}&nbsp;다른 제품보기 
                        </Text>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                overflowX:'scroll'
                                
                            }}
                        >
                            <View
                                style={{
                                    flexwrap:'wrap',
                                    justifyContent:'space-between',
                                    // display: 'grid',
                                    // gridTemplateColumns: 'auto auto auto auto auto',
                                    flexDirection:'row'
                                }}
                            >
                            {materialData.samebrand_list.map((material,index)=>
                    <Card
                        material={material}
                        toggleClipBoard={toggleClipBoardOne}
                    />
             
        
            
            )}
                            </View>
                        </div>
                        <Text
                            style={{
                                fontSize: '21px',
                                fontWeight:'700',
                                marginTop:'25px',
                                marginBottom:'15px'
                            }}
                        >
                            {materialData.mt_first_large_category}&nbsp;카테고리:유사상품
                        </Text>
                        <div
                            style={{
                                backgroundColor:'transparent',
                                overflowX:'scroll'
                                
                            }}
                        >
                        <View
                            style={{
                                // flexwrap:'wrap',
                                // justifyContent:'space-between',
                                // display: 'grid',
                                // gridTemplateColumns: 'auto auto auto auto auto',
                                // display:'flex',
                                // flexDirectioin:'row',
                                // backgroundColor:'red'
                                flexwrap:'wrap',
                                justifyContent:'space-between',
                                // display: 'grid',
                                // gridTemplateColumns: 'auto auto auto auto auto',
                                flexDirection:'row'

                            }}
                        >
                        {materialData.samecategory_list.map((material,index)=>
                <Card
                    material={material}
                    toggleClipBoard={toggleClipBoardOne}
                />
                
    
      
        
          )}
          
                        </View>
                        </div>    
                            <div
                                style={{
                                    backgroundColor:'transparent',
                                    height:'50px',
                                    width:'100%'
                                }}
                            >

                            </div>
                    </View>
                </View>
            </div>
          )
      }
      else{
          return(
            <div>
                <Navbar />
                <NavBarFiller/>
            </div>
          )
      }
      
}
export default PartDetail