import React,{useEffect} from 'react';
import Navbar from './Navbar';
import Content from './Content';
import NavBarFiller from './NavBarFiller';
import {TouchableOpacity,Text,View,Modal,Image,TouchableHighlight,Linking,Dimensions} from 'react-native';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import ClipBoard from './ClipBoard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import downloadIcon from '../assets/download.png'
import clipOff from '../assets/clipOff.png'
import boxIcon from '../assets/icnBox.png'
import Font from 'react-font'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css'

const queryString = require('query-string');

function Brands(props) {
  // var bestProducts
  const[brandListData,setBrandListData]=React.useState([])
  const[brandData,setBrandData]=React.useState({})
  const[detailView,setDetailView]=React.useState(false)
  const[brandId,setBrandId]=React.useState(null)
  const [hover,setHover]=React.useState(null)
  const [clipBoard,setClipBoard]=React.useState(false)
  const [materialNumber,setMaterialNumber]=React.useState(undefined)
  const [height,setHeight]=React.useState(Dimensions.get('window').height)
  const [width,setWidth]=React.useState(Dimensions.get('window').width)
  const brands=()=>{
    fetch('/brandslist')
    .then(res=>res.json())
    .then((incomingData)=>{
      setBrandListData(incomingData)
    })
    .catch(err=>{
        console.log(err)
    })

  }
  const oneBrand=(jsonObj)=>{
    console.log(jsonObj)
      fetch('/onebrand?'+
        queryString.stringify({
              // ct_id:ct_id
              ...jsonObj
            })
      )
      .then(res=>res.json())
      .then((incomingData)=>{
        console.log(incomingData)
        setBrandData(incomingData)
        })
      .catch(err=>{
          console.log(err)
      })
    
  }
 
  const onChange=()=>{
    setHeight(Dimensions.get('window').height)
    setWidth(Dimensions.get('window').width)
    // console.log(height+" : "+width)
  }
  const toggleClipBoard=()=>{
    setClipBoard(!clipBoard)
  }
  useEffect(() => {
      
    // fetch('/data')
    // .then(res=>res.json())
    // .then(data=>setData(data),()=>{
    //   console.log('data read : ' , data);
    // })
    Dimensions.addEventListener('change',onChange)
    const parsed = queryString.parse(props.location.search);
    if(localStorage.login!=undefined){
        var mem_no=undefined
        mem_no=JSON.parse(localStorage.login).message.split('_')[0]
        parsed.mem_no=mem_no 
    }
    else{
        parsed.mem_no=""
    }
    console.log(parsed.ct_id==undefined)
    if(parsed.ct_id==undefined){
      brands()
      setDetailView(false)
    }
    else{
      oneBrand(parsed)
      setBrandId(parsed.ct_id)
      setDetailView(true)
    }
    
  },[])



  useEffect(()=>{
    console.log(typeof(brandListData))
    console.log(brandListData)

  },[brandListData])
  useEffect(()=>{
    if(brandData.bestproducts_brand){
      // console.log('true')
      console.log(brandData)
      // bestProducts=brandData.bestproducts_brand.map((material)=>{
             
          
      //   <View
      //       style={{
      //         backgroundColor:'red',
      //         height:'200px',
      //         width:'200px'

      //       }}
      //   >
      //   <Image
      //       style={{
      //       display:'block',
      //       height:'200pt',
      //       width:'200pt',
      //       borderTopLeftRadius:10,
      //       borderTopRightRadius:10,
      //       zIndex:1,
      //       pointerEvents:'none',
      //       transform:[{
      //           translateX:'0px',
      //           translateY:'0px'
      //       }]
      //       }}
      //       source={{
      //           uri:
      //               material.mt_feature_img_url
      //       }}

      //   >
      //   </Image>
      //       <View
      //           style ={{
      //               height:'60pt',
      //               width:'200pt',
      //               fontSize: '15pt',
      //               fontWeight:'700',
      //               textDecorationLine:'none',
      //               color:'black',
      //               textAlign:'center',
      //               flexDirection:'row',
      //               pointerEvents:'none',
      //               backgroundColor:'rgb(33,33,33)',
      //               pointerEvents:'none',
      //               borderBottomLeftRadius:10,
      //               borderBottomRightRadius:10,
                    
      //           }}
      //       >
      //           <View
      //               style ={{
      //                   height:'60pt',
      //                   width:'190pt',
      //                   fontSize: '15pt',
      //                   fontWeight:'700',
      //                   textDecorationLine:'none',
      //                   borderBottomLeftRadius:10,
      //                   borderBottomRightRadius:10,
      //                   color:'black',
      //                   textAlign:'center',
      //                   alignItems:'center',
      //                   justifyContent:'center',
      //                   flexDirection:'row',
      //                   marginLeft:'5pt',
      //                   pointerEvents:'none',
      //                   backgroundColor:"rgb(33,33,33)",
      //                   pointerEvents:'none',
                        
      //               }}
      //           >
      //               <Text
      //                   style ={{
      //                       height:'65pt',
      //                       width:'250px',
      //                       fontSize: '15pt',
      //                       fontWeight:'700',
      //                       textDecorationLine:'none',
      //                       color:'white',
      //                       textAlign:'left',
      //                       alignItems:'center',
      //                       justifyContent:'center',
      //                       flexDirection:'row',
      //                       marginTop:'45pt',
      //                       pointerEvents:'none',
      //                       backgroundColor:'transparent',
      //                       pointerEvents:'none',
                            
      //                   }}
      //               >
      //                   {material.mt_subname}
      //               </Text>
      //           </View>
      //       </View>
      //     </View>
        
      //     })
    }
    

  },[brandData])
  if(brandListData!=[]){
    if(brandId!=null){
      if(brandData.bestproducts_brand){
        if(brandData.brd_files!=null){
        // console.log(brandData.bestproducts_brand)
          return(
            <div>
              <div
                    style={{
                        display: clipBoard ? 'block':'none' 
                    }}
                >
                    <ClipBoard toggleClipBoard={toggleClipBoard} material_num={materialNumber} refresh={clipBoard}/>
                </div>
            <div>
              <Navbar />
              <NavBarFiller/>
              <div
              style={{
                backgroundColor:'transparent',
                alignItems:'center',
                padding:'auto'
              }}
              >
                {/* <div
              style={{
                backgroundColor:'red'
              }}
              > */}
              <div
                style={{
                  paddingTop:'100px',
                  paddingLeft:'150px',
                  paddingRight:'150px'
                }}
              >
              <Image
                      style={{
                      display:'block',
                      height:'300px',
                      width:'auto',
                      // borderTopLeftRadius:10,
                      // borderTopRightRadius:10,
                      borderRadius:'10px',
                      pointerEvents:'none',
                      marginLeft:'auto',
                      marginRight:'auto'
                      // transform:[{
                      //     translateX:'0px',
                      //     translateY:'0px'
                      // }]
                      }}
                      source={{
                          uri:
                              brandData.brd_feature_img_url
                      }}

                  >
              </Image>
              </div>
                  </div>
                  {/* <Image
                      style={{
                      display:'block',
                      height:'200pt',
                      width:'200pt',
                      borderTopLeftRadius:10,
                      borderTopRightRadius:10,
                      pointerEvents:'none',
                      transform:[{
                          translateX:'0px',
                          translateY:'0px'
                      }]
                      }}
                      source={{
                          uri:
                              brandData.brd_logo_img_url
                      }}

                  >
                  </Image> */}
              <div
                style={{
                  textAlign:'left',
                  paddingLeft:'150px',
                  paddingRight:'150px',
                  paddingTop:'50px',
                  backgroundColor:'transparent'
                }}
              >
              <View
                style={{
                  flex:1,
                  flexDirection:'row',
                  paddingTop:'15px',
                  paddingBottom:'15px',
                }}
              >
                <View
                  style={{
                    
                    // width:"450px",
                    // alignItems:'center',
                    // justifyContent:'center',
                    backgroundColor:'transparent',
                    width:'500px',
                    textAlign:'left',
                    flex:2
                  }}
                >
                  <Text
                    style={{
                      fontSize: '20px',
                      fontWeight:'500',
                      textDecorationLine:'none',
                      // color:'white',
                      // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                      // textShadowOffset: {width: 0, height: 0},
                      // textShadowRadius: 2,
                      color:'gray',
                      // textAlign:'center',
                      // alignItems:'center',
                      // justifyContent:'center',
                      flexDirection:'row',
                      // margin:11,
                      marginTop:'25px',
                      padding:'auto',
                      pointerEvents:'none',
                      lineHeight:28
                    }}
                  >
                    {brandData.brd_intro}
                  </Text>
                  <br></br>
                  <View
                    style={{
                      backgroundColor:'transparent',
                      
                    }}
                  >
                  <Text
                      style={{
                        fontSize: '20px',
                        fontWeight:'700',
                        textDecorationLine:'none',
                        // color:'white',
                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                        // textShadowOffset: {width: 0, height: 0},
                        // textShadowRadius: 2,
                        color:'black',
                        // textAlign:'center',
                        // alignItems:'center',
                        // justifyContent:'center',
                        //flexDirection:'row',
                        // margin:11,
                        marginTop:'25px',
                        padding:'auto',
                        pointerEvents:'none'
                      }}
                    >
                      {brandData.brd_name_eng}
                    </Text>
                    <Text
                    style={{
                      fontSize: '20px',
                      fontWeight:'700',
                      textDecorationLine:'none',
                      // color:'white',
                      // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                      // textShadowOffset: {width: 0, height: 0},
                      // textShadowRadius: 2,
                      color:'black',
                      // textAlign:'center',
                      // alignItems:'center',
                      // justifyContent:'center',
                      flexDirection:'row',
                      // margin:11,
                      marginTop:'25px',
                      padding:'auto',
                      pointerEvents:'none'
                    }}
                    > 
                      {brandData.brd_name_kor}
                    </Text>
                    <br></br>
                    <Text
                      style={{
                        fontSize:'21px',
                        lineHeight:28
                      }}
                    >
                      {brandData.brd_description}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor:'transparent',
                    width:width-800+'px',
                    minWidth:100
                  }}
                >
                  <TouchableOpacity
                    onPress={() => 
                      // Linking.openURL(`/category?cat_num=${brandData.brd_no}`)
                      Linking.openURL(`/searchpage?search_target=BRAND&search_value=${brandData.brd_no}`)
                      // console.log('show material list ')
                    }
                  >
                    <View
                      style={{
                        marginTop:'25px',
                        marginLeft:'25px',
                        backgroundColor:'white',
                        width:100,
                        // flex:1,
                        height:40,
                        borderRadius:10,
                        borderColor:'black',
                        borderStyle:'solid',
                        borderWidth:'2px',
                        textAlign:'center',
                        alignItems:'center',
                        justifyContent:'center',
                        position:'absolute',
                        right:0
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:'transparent',
                          // transform:[{
                          //   translateX:'0px',
                          //   translateY:'50px',
                          // }]
                        }}
                      >
                        {/* <Text
                          
                        >
                          {brandData.brd_name_eng} {brandData.brd_name_kor} 자재 보기
                        </Text> */}
                        <Text
                          style={{
                            fontSize:'18px'
                          }}
                        >
                          자재 보기
                        </Text>
                      </View> 
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <br></br>
              
              </div>
              
              {/* </div> */}
              {/* <Carousel plugins={['arrows']}>
                {brandData.pictures_brand.map((atom)=>
                  <img src={atom.pic_url}
                    style={{
                      height:"300px",
                      width:"auto"
                    }}
                  />
                )}
              </Carousel> */}
              {/* <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={300}
                totalSlides={brandData.pictures_brand.length}
                visibleSlides={3}
                interval={5000}
                infinite={true}
              >
                <Slider>
                {brandData.pictures_brand.map((atom,index)=>
                  
                  <Slide index={index}

                  >
                    <img src={atom.pic_url}
                      style={{
                        height:"300px",
                        width:"auto"
                      }}
                    />
                  </Slide>

                )}
                  
                </Slider>
                
              </CarouselProvider> */}
              <div
                style={{
                  paddingLeft:'150px',
                  paddingRight:'150px'
                }}
              >
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
                {brandData.pictures_brand.map((atom)=>
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
              </div>
              <div
                style={{
                  textAlign:'left',
                  paddingLeft:'150px',
                  paddingRight:'150px',
                  paddingTop:'50px'
                }}
              >
              <Text
                style ={{

                  fontSize: '20px',
                  fontWeight:'700',
                  textDecorationLine:'none',
                  color:'black',
                  textAlign:'left',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'row',
                  marginTop:'100px',
                  pointerEvents:'none',
                  backgroundColor:'transparent',
                  pointerEvents:'none',
                  
              }}
              >
                인기상품
              </Text>
              </div>
              <div
                style={{
                  // padding:'auto'
                }}
              >

              <div
                style={{
                  overflowX:'scroll'
                }}
              >
                <div
                  style={{
                    // columnCount:3,
                    // flexwrap:'wrap',
                    // justifyContent:'space-between',
                    // display: 'grid',
                    // gridTemplateColumns: 'auto auto auto auto auto',
                    marginLeft:'150px',
                    marginRight:'150px',
                    backgroundColor:'transparent',
                    flexwrap:'wrap',
                    justifyContent:'space-between',
                    // display: 'grid',
                    // gridTemplateColumns: 'auto auto auto auto auto',
                    flexDirection:'row'
                    
                  }}
                >
                  
                  {brandData.bestproducts_brand.map((material,index)=>
                
                
                <View
                  style={{
                    backgroundColor:'transparent',
                    height:'240px',
                    width:'170px',
                    marginLeft:'7px',
                    marginRight:'7px',
                    marginTop:'20px',
                    marginBottom:'20px',
                    borderRadius:10,
                    boxShadow:'0px 0px 3px black'
                  }}
                  onMouseEnter={()=>{
                    console.log('entered ' + index)
                    var mem_no=JSON.parse(localStorage.login).message.split('_')
                    console.log(mem_no)
                    setHover(index)
                    console.log(brandData.bestproducts_brand[index])
                  }
                  }
                  onMouseLeave={()=>{
                      setHover(null)
                      console.log('exited '+index)
                  }} 
                >
                <div
                      style={{
                          backgroundColor:'white',
                          width:'55px',
                          height:'12px',
                          position:'absolute',
                          zIndex:100,
                          top:'6px',
                          left:'6px',
                          borderRadius:'6px',
                          display:hover==index ? 'block':'none'
                      }}
                      onPress={()=>{  
                          console.log('pressed clip ')
                      }}
                  >
                      <Text
                          style={{
                              transform:'translate(2px,-2px)',
                              position:'absolute',
                              top:'1px',
                              left:'2px',
                              fontWeight:50,
                              fontSize:'12px',
                              color:brandData.bestproducts_brand[index].mt_budget<1 ? 'rgb(219,219,219)':'black' 
                          }}
                      >₩</Text>
                     <Text
                          style={{
                              transform:'translate(2px,-2px)',
                              position:'absolute',
                              top:'1px',
                              left:'12px',
                              fontWeight:50,
                              fontSize:'12px',
                              color:brandData.bestproducts_brand[index].mt_budget<2 ? 'rgb(219,219,219)':'black'
                          }}
                      >₩</Text>
                      <Text
                          style={{
                              transform:'translate(2px,-2px)',
                              position:'absolute',
                              top:'1px',
                              left:'22px',
                              fontWeight:50,
                              fontSize:'12px',
                              color:brandData.bestproducts_brand[index].mt_budget<3 ? 'rgb(219,219,219)':'black'
                          }}
                      >₩</Text>
                      <Text
                          style={{
                              transform:'translate(2px,-2px)',
                              position:'absolute',
                              top:'1px',
                              left:'32px',
                              fontWeight:50,
                              fontSize:'12px',
                              color:brandData.bestproducts_brand[index].mt_budget<4 ? 'rgb(219,219,219)':'black'
                          }}
                      >₩</Text>
                      <Text
                          style={{
                              transform:'translate(2px,-2px)',
                              position:'absolute',
                              top:'1px',
                              left:'42px',
                              fontWeight:50,
                              fontSize:'12px',
                              color:brandData.bestproducts_brand[index].mt_budget<5 ? 'rgb(219,219,219)':'black'
                          }}
                      >₩</Text>
                  </div>
                  <TouchableOpacity
                      style={{
                          backgroundColor:'transparent',
                          width:'20px',
                          height:'20px',
                          position:'absolute',
                          zIndex:100,
                          top:'6px',
                          right:'6px',
                          display:hover==index ? 'block':'none'
                      }}
                      onPress={()=>{  
                          console.log('pressed clip ' + brandData.bestproducts_brand[index].mt_no)
                          setMaterialNumber(brandData.bestproducts_brand[index].mt_no)
                          toggleClipBoard()
                      }}
                  >   
                      <Image
                          style={{
                          display:'block',
                          height:'20px',
                          width:'20px',
                          borderTopLeftRadius:10,
                          borderTopRightRadius:10,
                          zIndex:1,
                          pointerEvents:'none'
                          // transform:[{
                          //     translateX:'0px',
                          //     translateY:'0px'
                          // }]
                          }}
                          source={clipOff}

                          >
                          
                      </Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                        
                        onPress={()=>{  
                          
                          Linking.openURL('/partDetail?mt_no='+brandData.bestproducts_brand[index].mt_no)
                      }}
                        >
                  <Image
                    style={{
                    display:'block',
                    height:'170px',
                    width:'170px',
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    zIndex:1,
                    pointerEvents:'none',
                    filter:hover==index ? 'brightness(90%)':'brightness(100%)'
                    // transform:[{
                    //     translateX:'0px',
                    //     translateY:'0px'
                    // }]
                    }}
                    source={{
                        uri:
                            material.mt_feature_img_url
                    }}

                  >
                  </Image>
                 
                  <View
                    style ={{
                      height:'70px',
                      width:'170px',
                      fontSize: '12pt',
                      fontWeight:'500',
                      textDecorationLine:'none',
                      color:'white',
                      textAlign:'center',
                      flexDirection:'column',
                      // pointerEvents:'none',
                      backgroundColor:'transparent',
                      // pointerEvents:'none',
                      borderBottomLeftRadius:10,
                      borderBottomRightRadius:10,
                      padding:'10px'
                    }}
                  >
                    <TouchableOpacity
                                style={{
                                    zIndex:100,
                                    backgroundColor:'transparent',
                                    position:'absolute',
                                    top:'7px',
                                    right:'7px',
                                    height:'30px',
                                    width:'30px',
                                    display:material.mt_isdelivery=="Y"?"block":"none"
                                }}
                                onPress={()=>{
                                    console.log(material.mt_isdelivery)
                                }}
                            >
                            <View
                            style={{
                                backgroundColor:'transparent',
                                display:'flex',
                                height:'30px',
                                width:'30px',
                                // position:'absolute',
                                // top:'7px',
                                // right:'15px'
                            }}
                            >
                                
                                <img
                                        src={boxIcon}
                                        style={{
                                            //display: categoryOpened? 'none': 'block',
                                            width:'30px',
                                            height:'30px',
                                            right:'15px'
                                        }}
                                    >
                                    </img>
                                
                            </View>
                            </TouchableOpacity>
                    <Text
                      style ={{
                          // height:'65pt',
                          // width:'250px',
                          fontSize: '8pt',
                          fontWeight:'700',
                          textDecorationLine:'none',
                          color:'black',
                          textAlign:'left',
                          //alignItems:'center',
                          //justifyContent:'center',
                          //flexDirection:'row',
                          //marginTop:'45pt',
                          pointerEvents:'none',
                          backgroundColor:'transparent',
                          pointerEvents:'none',
                          
                      }}
                  >
                      {material.vd_name}
                  </Text>
                    <Text
                          style ={{
                              height:'100px',
                              width:'120px',
                              fontSize: '8pt',
                              fontWeight:'500',
                              textDecorationLine:'none',
                              color:'black',
                              textAlign:'left',
                              alignItems:'center',
                              justifyContent:'center',
                              flexDirection:'row',
                              // marginLeft:'1px',
                              // marginTop:'1px',
                              pointerEvents:'none',
                              backgroundColor:'transparent',
                              pointerEvents:'none',
                              
                              
                          }}
                      >
                      {material.mt_subname}
                      
                    </Text>
                    <Text
                      style ={{
                          height:'100px',
                          width:'120px',
                          fontSize: '8pt',
                          fontWeight:'500',
                          textDecorationLine:'none',
                          color:'rgb(85,85,85)',
                          textAlign:'left',
                          alignItems:'center',
                          justifyContent:'center',
                          flexDirection:'row',
                          // marginLeft:'1px',
                          // marginTop:'1px',
                          pointerEvents:'none',
                          backgroundColor:'transparent',
                          pointerEvents:'none',
                          whiteSpace:'nowrap',
                          textOverflow: 'ellipsis',
                          overflow:'hidden'
                      }}
                  >
                  {material.mt_name}
                  
              </Text>
                    
          </View>
          </TouchableOpacity>
        </View>
      
        
          )}
            
            </div>
              </div>
            </div>
            <div
                style={{
                  textAlign:'left',
                  paddingLeft:'150px',
                  paddingRight:'150px',
                  paddingTop:'50px'
                }}
              >
              <Text
                style ={{

                  fontSize: '20px',
                  fontWeight:'700',
                  textDecorationLine:'none',
                  color:'black',
                  textAlign:'left',
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'row',
                  marginTop:'100px',
                  pointerEvents:'none',
                  backgroundColor:'transparent',
                  pointerEvents:'none',
                  
              }}
              >
                다운로드 가능한 파일
              </Text>
              <br></br>
              <div
                style={{
                  gridTemplateColumns:'auto auto auto'
                }}
              >
              {brandData.brd_files.map((file)=>

              <div
                style={{
                  backgroundColor:'transparent',
                  paddingTop:'15px',
                  paddingBottom:'15px'
                }}
              >
                <a
                  style ={{
                    fontSize: '8pt',
                    fontWeight:'500',
                    textDecorationLine:'none',
                    color:'black',
                    textAlign:'left',
                    // alignItems:'center',
                    // justifyContent:'center',
                    // flexDirection:'row',
                    marginTop:'100px',
                    backgroundColor:'transparent',
                  }}
                  href={file.fl_url}
                >
                  <div
                    style={{
                      backgroundColor:'transparent',
                      alignItems:'center',
                      justifyContent:'center',
                      // flexDirection:'row',
                      float:'left'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:'transparent',
                        display:'inline-block',
                        alignItems:'center',
                        justifyContent:'center',
                        // flexDirection:'row'
                        padding:'5px'
                      }}
                    >
                      {/* <img
                          src={downloadIcon}
                          style={{
                            height:"15px"
                          }}
                        >
                      </img> */}
                      <Image
                        style={{
                        display:'inline-block',
                        height:'12px',
                        width:'12px',
                        marginTop:'20px'
                        // borderTopLeftRadius:10,
                        // borderTopRightRadius:10,
                        // borderRadius:'10px',
                        // pointerEvents:'none',
                        // marginLeft:'auto',
                        // marginRight:'auto'
                        
                        }}
                        source={{
                          uri:downloadIcon
                        }}
  
                    ></Image>
                    </div>
                    <div
                      style={{
                        backgroundColor:'transparent',
                        alignItems:'center',
                        justifyContent:'center',
                        display:'inline-block',
                        padding:'5px',
                        
                      }}
                    >

                  <Text
                    style ={{
                      display:'inline-block',
                      fontSize: '9pt',
                      fontWeight:'500',
                      textDecorationLine:'none',
                      color:'black',
                      textAlign:'left',
                      alignItems:'center',
                      justifyContent:'center',
                      flexDirection:'row',
                      // marginTop:'100px',
                      pointerEvents:'none',
                      backgroundColor:'transparent',
                      pointerEvents:'none',
                      transform:[{
                        translateX:'0px',
                        translateY:'-100px'
                    }]
                      
                  }}
                  >
                    {file.fl_displayname}
                  </Text>
                  </div>
                  </div>
                </a>
              </div>
              )}
              </div>
              
              
              </div>
            </div>
            <div
                style={{
                  height:'100px',
                  width:'100vw',
                  backgroundColor:'transparent'
                }}
              >

              </div>
            </div>
          )
        }
        else{
          // console.log(brandData.bestproducts_brand)
            return(
              <div>
                <div
                    style={{
                        display: clipBoard ? 'block':'none' 
                    }}
                >
                    <ClipBoard toggleClipBoard={toggleClipBoard} material_num={materialNumber} refresh={clipBoard}/>
                </div>
              <div>
                <Navbar />
                <NavBarFiller/>
                <div
                style={{
                  backgroundColor:'transparent',
                  alignItems:'center',
                  padding:'auto'
                }}
                >
                  {/* <div
                style={{
                  backgroundColor:'red'
                }}
                > */}
                <div
                  style={{
                    paddingTop:'100px',
                    paddingLeft:'150px',
                    paddingRight:'150px'
                  }}
                >
                <Image
                        style={{
                        display:'block',
                        height:'300px',
                        width:'auto',
                        // borderTopLeftRadius:10,
                        // borderTopRightRadius:10,
                        borderRadius:'10px',
                        pointerEvents:'none',
                        marginLeft:'auto',
                        marginRight:'auto'
                        // transform:[{
                        //     translateX:'0px',
                        //     translateY:'0px'
                        // }]
                        }}
                        source={{
                            uri:
                                brandData.brd_feature_img_url
                        }}
  
                    >
                </Image>
                </div>
                    </div>
                    {/* <Image
                        style={{
                        display:'block',
                        height:'200pt',
                        width:'200pt',
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10,
                        pointerEvents:'none',
                        transform:[{
                            translateX:'0px',
                            translateY:'0px'
                        }]
                        }}
                        source={{
                            uri:
                                brandData.brd_logo_img_url
                        }}
  
                    >
                    </Image> */}
                <div
                  style={{
                    textAlign:'left',
                    paddingLeft:'150px',
                    paddingRight:'150px',
                    paddingTop:'50px'
                  }}
                >
                <View
                  style={{
                    flex:1,
                    flexDirection:'row',
                    paddingTop:'15px',
                    paddingBottom:'15px',
                  }}
                >
                  <View
                    style={{
                      
                      // width:"450px",
                      // alignItems:'center',
                      // justifyContent:'center',
                      textAlign:'left',
                      flex:2
                    }}
                  >
                    <Text
                      style={{
                        fontSize: '20px',
                        fontWeight:'500',
                        textDecorationLine:'none',
                        // color:'white',
                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                        // textShadowOffset: {width: 0, height: 0},
                        // textShadowRadius: 2,
                        color:'gray',
                        // textAlign:'center',
                        // alignItems:'center',
                        // justifyContent:'center',
                        flexDirection:'row',
                        // margin:11,
                        marginTop:'25px',
                        padding:'auto',
                        pointerEvents:'none',
                        lineHeight:28
                      }}
                    >
                      {brandData.brd_intro}
                    </Text>
                    <br></br>
                    <View>
                    <Text
                        style={{
                          fontSize: '30px',
                          fontWeight:'700',
                          textDecorationLine:'none',
                          // color:'white',
                          // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                          // textShadowOffset: {width: 0, height: 0},
                          // textShadowRadius: 2,
                          color:'black',
                          // textAlign:'center',
                          // alignItems:'center',
                          // justifyContent:'center',
                          //flexDirection:'row',
                          // margin:11,
                          marginTop:'25px',
                          padding:'auto',
                          pointerEvents:'none'
                        }}
                      >
                        {brandData.brd_name_eng}
                      </Text>
                      <Text
                      style={{
                        fontSize: '30px',
                        fontWeight:'700',
                        textDecorationLine:'none',
                        // color:'white',
                        // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                        // textShadowOffset: {width: 0, height: 0},
                        // textShadowRadius: 2,
                        color:'black',
                        // textAlign:'center',
                        // alignItems:'center',
                        // justifyContent:'center',
                        flexDirection:'row',
                        // margin:11,
                        marginTop:'25px',
                        padding:'auto',
                        pointerEvents:'none'
                      }}
                      > 
                        {brandData.brd_name_kor}
                      </Text>
                      <br></br>
                      <Text
                        style={{
                          fontSize:'21px',
                          lineHeight:28
                        }}
                      >
                        {brandData.brd_description}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => 
                      // Linking.openURL(`/category?cat_num=${brandData.brd_no}`)
                      Linking.openURL(`/searchpage?search_target=BRAND&search_value=${brandData.brd_no}`)
                      // console.log('show material list ')
                    }
                  >
                    <View
                      style={{
                        marginTop:'25px',
                        marginLeft:'25px',
                        backgroundColor:'white',
                        width:100,
                        // flex:1,
                        height:40,
                        borderRadius:10,
                        borderColor:'black',
                        borderStyle:'solid',
                        borderWidth:'2px',
                        textAlign:'center',
                        alignItems:'center',
                        justifyContent:'center',
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:'transparent',
                          transform:[{
                            translateX:'0px',
                            translateY:'50px',
                          }]
                        }}
                      >

                        <Text
                          style={{
                            fontSize:'18px'
                          }}
                        >
                          자재 보기
                        </Text>
                      </View> 
                    </View>
                  </TouchableOpacity>
                </View>
                <br></br>
                
                </div>
                

                
                <div
                  style={{
                    paddingLeft:'150px',
                    paddingRight:'150px'
                  }}
                >
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
                  {brandData.pictures_brand.map((atom)=>
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
                </div>
                <div
                  style={{
                    textAlign:'left',
                    paddingLeft:'150px',
                    paddingRight:'150px',
                    paddingTop:'50px'
                  }}
                >
                <Text
                  style ={{
  
                    fontSize: '20px',
                    fontWeight:'700',
                    textDecorationLine:'none',
                    color:'black',
                    textAlign:'left',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'row',
                    marginTop:'100px',
                    pointerEvents:'none',
                    backgroundColor:'transparent',
                    pointerEvents:'none',
                    
                }}
                >
                  인기상품
                </Text>
                </div>
                <div
                  style={{
                    paddingLeft:'150px',
                    paddingRight:'150px',
                    backgroundColor:'transparent'
                  }}
                >
  
                <div
                  style={{
                    overflowX:'scroll'
                  }}
                >
                  <div
                    style={{
                      // columnCount:3,
                      // flexwrap:'wrap',
                      // justifyContent:'space-between',
                      // flexDirection:'row',
                      // display: 'grid',
                      // gridTemplateColumns: 'auto auto auto auto auto',
                      // marginLeft:'150px',
                      // marginRight:'150px',
                      // backgroundColor:'transparent',
                      
                      // flexwrap:'wrap',
                      // justifyContent:'space-between',
                      // display: 'grid',
                      // gridTemplateColumns: 'auto auto auto auto auto',
                      display:'flex',
                      flexDirection:'row'
                    }}
                  >
                    
                    {brandData.bestproducts_brand.map((material,index)=>
                
                
                      <View
                        style={{
                          backgroundColor:'transparent',
                          height:'240px',
                          width:'170px',
                          marginLeft:'7px',
                          marginRight:'7px',
                          marginTop:'20px',
                          marginBottom:'20px',
                          borderRadius:10,
                          boxShadow:'0px 0px 3px black'
                        }}
                        onMouseEnter={()=>{
                          console.log('entered ' + index)
                          var mem_no=JSON.parse(localStorage.login).message.split('_')
                          console.log(mem_no)
                          setHover(index)
                          console.log(brandData)
                        }
                        }
                        onMouseLeave={()=>{
                            setHover(null)
                            console.log('exited '+index)
                        }} 
                      >
                      <div
                            style={{
                                backgroundColor:'white',
                                width:'55px',
                                height:'12px',
                                position:'absolute',
                                zIndex:100,
                                top:'6px',
                                left:'6px',
                                borderRadius:'6px',
                                display:hover==index ? 'block':'none'
                            }}
                            onPress={()=>{  
                                console.log('pressed clip ')
                            }}
                        >
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'1px',
                                    left:'2px',
                                    fontWeight:50,
                                    fontSize:'12px',
                                    color:brandData.bestproducts_brand[index].mt_budget<1 ? 'rgb(219,219,219)':'black' 
                                }}
                            >₩</Text>
                           <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'1px',
                                    left:'12px',
                                    fontWeight:50,
                                    fontSize:'12px',
                                    color:brandData.bestproducts_brand[index].mt_budget<2 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'1px',
                                    left:'22px',
                                    fontWeight:50,
                                    fontSize:'12px',
                                    color:brandData.bestproducts_brand[index].mt_budget<3 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'1px',
                                    left:'32px',
                                    fontWeight:50,
                                    fontSize:'12px',
                                    color:brandData.bestproducts_brand[index].mt_budget<4 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                            <Text
                                style={{
                                    transform:'translate(2px,-2px)',
                                    position:'absolute',
                                    top:'1px',
                                    left:'42px',
                                    fontWeight:50,
                                    fontSize:'12px',
                                    color:brandData.bestproducts_brand[index].mt_budget<5 ? 'rgb(219,219,219)':'black'
                                }}
                            >₩</Text>
                        </div>
                        <TouchableOpacity
                            style={{
                                backgroundColor:'transparent',
                                width:'20px',
                                height:'20px',
                                position:'absolute',
                                zIndex:100,
                                top:'6px',
                                right:'6px',
                                display:hover==index ? 'block':'none'
                            }}
                            onPress={()=>{  
                                console.log('pressed clip ' + brandData.bestproducts_brand[index].mt_no)
                                setMaterialNumber(brandData.bestproducts_brand[index].mt_no)
                                toggleClipBoard()
                            }}
                        >   
                            <Image
                                style={{
                                display:'block',
                                height:'20px',
                                width:'20px',
                                borderTopLeftRadius:10,
                                borderTopRightRadius:10,
                                zIndex:1,
                                pointerEvents:'none'
                                // transform:[{
                                //     translateX:'0px',
                                //     translateY:'0px'
                                // }]
                                }}
                                source={clipOff}

                                >
                                
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                        
                        onPress={()=>{  
                          
                          Linking.openURL('/partDetail?mt_no='+brandData.bestproducts_brand[index].mt_no)
                      }}
                        >
                        <Image
                          style={{
                          display:'block',
                          height:'170px',
                          width:'170px',
                          borderTopLeftRadius:10,
                          borderTopRightRadius:10,
                          zIndex:1,
                          pointerEvents:'none',
                          filter:hover==index ? 'brightness(90%)':'brightness(100%)'
                          // transform:[{
                          //     translateX:'0px',
                          //     translateY:'0px'
                          // }]
                          }}
                          source={{
                              uri:
                                  material.mt_feature_img_url
                          }}
  
                        >
                        </Image>
                        <View
                          style ={{
                            height:'70px',
                            width:'170px',
                            fontSize: '12pt',
                            fontWeight:'500',
                            textDecorationLine:'none',
                            color:'white',
                            textAlign:'center',
                            flexDirection:'column',
                            pointerEvents:'none',
                            backgroundColor:'white',
                            pointerEvents:'none',
                            borderBottomLeftRadius:10,
                            borderBottomRightRadius:10,
                            padding:'10px'
                          }}
                        >
                           <TouchableOpacity
                      style={{
                          zIndex:100,
                          backgroundColor:'transparent',
                          position:'absolute',
                          top:'7px',
                          right:'7px',
                          height:'30px',
                          width:'30px',
                          display:material.mt_isdelivery=="Y"?"block":"none"
                      }}
                      onPress={()=>{
                          console.log(material)
                      }}
                  >
                  <View
                  style={{
                      backgroundColor:'transparent',
                      display:'flex',
                      height:'30px',
                      width:'30px',
                      // position:'absolute',
                      // top:'7px',
                      // right:'15px'
                  }}
                  >
                      
                      <img
                        src={boxIcon}
                                  style={{
                                      //display: categoryOpened? 'none': 'block',
                                      width:'30px',
                                      height:'30px',
                                      right:'15px'
                                  }}
                              >
                              </img>
                          
                      </View>
                      </TouchableOpacity>
                          <Text
                            style ={{
                                // height:'65pt',
                                // width:'250px',
                                fontSize: '8pt',
                                fontWeight:'700',
                                textDecorationLine:'none',
                                color:'black',
                                textAlign:'left',
                                //alignItems:'center',
                                //justifyContent:'center',
                                //flexDirection:'row',
                                //marginTop:'45pt',
                                pointerEvents:'none',
                                backgroundColor:'transparent',
                                pointerEvents:'none',
                                
                            }}
                        >
                            {material.vd_name}
                        </Text>
                          <Text
                                style ={{
                                    height:'100px',
                                    width:'120px',
                                    fontSize: '8pt',
                                    fontWeight:'500',
                                    textDecorationLine:'none',
                                    color:'black',
                                    textAlign:'left',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'row',
                                    // marginLeft:'1px',
                                    // marginTop:'1px',
                                    pointerEvents:'none',
                                    backgroundColor:'transparent',
                                    pointerEvents:'none',
                                    
                                    
                                }}
                            >
                            {material.mt_subname}
                            
                          </Text>
                          <Text
                            style ={{
                                height:'100px',
                                width:'120px',
                                fontSize: '8pt',
                                fontWeight:'500',
                                textDecorationLine:'none',
                                color:'rgb(85,85,85)',
                                textAlign:'left',
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row',
                                // marginLeft:'1px',
                                // marginTop:'1px',
                                pointerEvents:'none',
                                backgroundColor:'transparent',
                                pointerEvents:'none',
                                whiteSpace:'nowrap',
                                textOverflow: 'ellipsis',
                                overflow:'hidden'
                            }}
                        >
                        {material.mt_name}
                        
                    </Text>
                          
                </View>
                </TouchableOpacity>
              </View>
            
              
                )}
              
              </div>
              </div>
              </div>
              <div
                  style={{
                    textAlign:'left',
                    paddingLeft:'150px',
                    paddingRight:'150px',
                    paddingTop:'50px'
                  }}
                >
                
                <br></br>
                
                
                
                </div>
              </div>
              <div
                  style={{
                    height:'100px',
                    width:'100vw',
                    backgroundColor:'transparent'
                  }}
                >
  
                </div>
              </div>
            )
          }
      }
      else{
        console.log(brandData);
        return(
          <div>
            <Navbar />
            <NavBarFiller/>
            <Image
                    style={{
                    display:'block',
                    height:'200pt',
                    width:'200pt',
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    // zIndex:1,
                    pointerEvents:'none',
                    transform:[{
                        translateX:'0px',
                        translateY:'0px'
                    }]
                    }}
                    source={{
                        uri:
                            // data.listCategory[i].ct_img_url
                            //listMoodboard.mb_img_url
                            brandData.brd_feature_img_url
                    }}

                >
                </Image>
                <Image
                    style={{
                    display:'block',
                    height:'200pt',
                    width:'200pt',
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    // zIndex:1,
                    pointerEvents:'none',
                    transform:[{
                        translateX:'0px',
                        translateY:'0px'
                    }]
                    }}
                    source={{
                        uri:
                            // data.listCategory[i].ct_img_url
                            //listMoodboard.mb_img_url
                            brandData.brd_logo_img_url
                    }}

                >
                </Image>
            <Text>{brandData.brd_name_kor}</Text>
            <Text>
              {brandData.brd_intro}
            </Text>
            <Text>
              {brandData.brd_description}
            </Text>
            

          </div>
        )
      }
    }
    else{
      return (
        
        <div
                    style={{
                      position:'fixed',
                      // height:'200vh',
                      width:'100vw',
                      top:'100px',
                      left:0,
                      backgroundColor:'white',
                      // display:`${brandsDropDownDisplay}%`,
                      display:'block',
                      // overflowY:'scroll'
                    }}
                  > 
                   
                      <div
                      style={{
                        paddingTop:'50px',
                        paddingLeft:'65px',
                        paddingRight:'65px'
                      }}
                      >
                        <div
                          style={{
                            textAlign:'left',
                            // margin:'25pt'
                            paddingLeft:'25px'
                          }}
                        >

                          <Text
                            style ={{
                              fontSize: '40px',
                              fontWeight:'700',
                              textDecorationLine:'none',
                              // color:'white',
                              // textShadowColor: 'rgba(0, 0, 0, 0.85)',
                              // textShadowOffset: {width: 0, height: 0},
                              // textShadowRadius: 2,
                              color:'black',
                              textAlign:'center',
                              alignItems:'center',
                              justifyContent:'center',
                              flexDirection:'row',
                              // margin:11,
                              marginTop:'5px',
                              padding:'auto',
                              pointerEvents:'none'
                            }}
                          >
                            브랜드
                          </Text>
                        </div>
                        <div
                        style={{
                          padding:'25px'
                        }}
                        >
                        <div
                        style={{
                          // columnCount:3,
                          flexwrap:'wrap',
                          display: 'grid',
                          gridTemplateColumns: 'auto auto auto',
                          overflowY: 'scroll'
                        }}
                        > 
                      
                        {brandListData.map((brand)=>
                        <TouchableOpacity
                          onPress={() => 
                            Linking.openURL(`/brands?ct_id=${brand.ct_id}`)
                          }
                        >
                        <div
                         style={{
                           textAlign:'left',
                           padding:'5pt'
                         }}
                        >

                          <Text
                            style ={{
                              height:'65pt',
                              width:'250px',
                              fontSize: '15pt',
                              fontWeight:'700',
                              textDecorationLine:'none',
                              color:'black',
                              textAlign:'left',
                              alignItems:'center',
                              justifyContent:'center',
                              flexDirection:'row',
                              marginTop:'45pt',
                              pointerEvents:'none',
                              backgroundColor:'transparent',
                              pointerEvents:'none',
                              
                          }}
                          >
                            {brand.ct_text}
                          </Text>
                          <br></br>
                        </div>
                        </TouchableOpacity>
                        )}
                          
                        </div>
                        </div>
                      </div> 
                  </div>
      );
    }
  }
  else{
    return (
      <div>
      <Navbar />
      <NavBarFiller/>
        <div className="MainContent">
        
            <Navbar />
            <NavBarFiller/>
            <Text>
            로딩중 ...
            </Text>
            {/* <Content/> */}
            
            
        
        </div>
      </div>
    );
}
  }
  export default Brands;