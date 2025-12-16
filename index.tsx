import { useState } from "react";
import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  let list =[
    {id:1,
    q:"I'm not here to be perfect, I'm here to be real.",
      auth:"Lady Gaga"
    }, {id:2,
    q:"I'm not interested in money. I just want to be wonderful." ,
      auth:"Marilyn Monroe"
    },{id:3,
    q:"The only thing that feels better than winning is winning when nobody thought you could." ,
      auth:"Hank Aaron"
    },{id:4,
    q:"Success is not final, failure is not fatal: It is the courage to continue that counts."  ,
      auth:" Winston Churchil"
    },{id:5,
    q:"If you can dream it, you can do it."   ,
      auth:"Walt Disney"
    }
  ]
  const [qoutes,setQuets]=useState(list);
  const [vis,setvis]=useState(true);
  const [val,setval]=useState(0);


  function quotes(){
  return (
    <View>
      <View style={styles.card}>
          <Text style={{textAlign:"center",fontWeight:900,fontSize:22,marginTop:20}}>Today Quote</Text>
           <Text style={{marginTop:10,textAlign:"justify",marginLeft:10,marginRight:10,padding:15,
            fontSize:20,fontWeight:500
           }}>{qoutes[val].q}</Text>
           <Text style={{marginLeft:"50%",padding:10}}>by <Text style={{fontSize:18,color:"green",fontWeight:"bold"}}>{qoutes[val].auth}</Text></Text>
      </View>
       <TouchableOpacity style={styles.btn_main} onPress={()=> setval(Math.floor(Math.random()*5)) }>
                  <Text style={{color:"white",fontSize:18,fontWeight:600,textAlign:"center"}}>new quote</Text>
        </TouchableOpacity>
    </View>
      
  )
}


  return (
    <View style={{flex:1,backgroundColor:"grey",margin:0,padding:0}} >
    <Modal visible={vis} animationType="slide">
        <View style={{flex:1,backgroundColor:"rgba(0, 0, 0, 0.97)"}}>
        <StatusBar />
      <View style={styles.head_top}>
          <Text style={styles.primary_heading}>welcome</Text>
          <Text style={{fontSize:16}}>
          <Text style={{color:"blue",fontSize:25,fontWeight:"bold"}}>GET</Text> 
          your day with good vibes
          </Text>
      </View>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <View  style={{width:"100%",padding:15,justifyContent:"center"}}>
            <Text style={{color:"white",textAlign:"center",fontSize:45,fontWeight:"bold"}}>quotes generator!</Text>
          </View>
         <TouchableOpacity style={styles.btn} onPress={(data)=>setvis(false)}>
           <Text style={{color:"white",textAlign:"center",fontSize:20,fontWeight:"bold"}}>get on !</Text>
         </TouchableOpacity>
    </View>
    </View>
     </Modal>
     <View style={{width:"100%",backgroundColor:"black",height:"20%",borderBottomLeftRadius:80,
      borderBottomRightRadius:80,justifyContent:"center",alignItems:"center"
     }}>
         <Text style={{color:"white",padding:10,fontSize:23}}>quotes generator App</Text>
     </View>
     <View style={{width:"100%",height:"70%",justifyContent:"center",alignItems:"center"}}>
             {quotes()}
            
     </View>
     </View>
     
  );
  function handlequote(){
       console.log("pressed");
      //  setval(val+1);
  }
}

const styles = StyleSheet.create(
{
  head_top:{
    backgroundColor:"grey",
    width:"100%",
    height:"35%",
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    alignItems:"center",
    justifyContent:"center"
  }
  ,primary_heading:{
    fontSize:50,
    color:"white",
    marginBottom:30,
    fontWeight:"bold"
  },
  btn:{
    width:200,
    padding:12,
    backgroundColor:"rgba(65, 60, 60, 1)",
    marginTop:50,
    textAlign:"center",
    borderRadius:50
  },
  btn_main:{
     padding:12,
    backgroundColor:"rgba(19, 5, 5, 1)",
    marginTop:50,
    textAlign:"center",
    borderRadius:50,
    width:200,
    marginLeft:40
  },
  card:{
     width:"80%",
     height:300,
     backgroundColor:"rgba(233, 227, 227, 0.83)",
     color:"black",
     padding:10,
     borderRadius:50,
  }
}
)