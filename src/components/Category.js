import React,{useEffect} from 'react';
import Navbar from './Navbar';
import Content from './Content';
import NavBarFiller from './NavBarFiller';
import {TouchableOpacity,Text,View,Modal,TouchableHighlight} from 'react-native';
const queryString = require('query-string');

function Category(props) {

  const[data,setData]=React.useState({})
  const[catQ,setCatQ]=React.useState({cat_num: null})
    useEffect(() => {
      
      fetch('/data')
      .then(res=>res.json())
      .then(data=>setData(data),()=>{
        console.log('data read : ' , data);
      })
      const parsed = queryString.parse(props.location.search);

      console.log(parsed)
      setCatQ(parsed)
    },[])
    return (
      <div className="Category">
       
          <Navbar />
          <NavBarFiller/>
          <Text> 
            Category Num
          </Text> 
          <br></br>
          <Text>
            {catQ.cat_num}
          </Text>
          {/* <Text>
            {data.lastname} {data.firstname}
          </Text> */}

          <Content/>
            
          
        
      </div>
    );
  }
  
  export default Category;