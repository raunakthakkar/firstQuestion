import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      inputVal:"",
      filterArr:[]
    }
    this.getSuggestion=this.getSuggestion.bind(this);
  }
  getrandomBool(n){
    var maxRandomCoeff=1000
    if(n>maxRandomCoeff) n=maxRandomCoeff
    return Math.floor(Math.random()*maxRandomCoeff)%n===0
    }
  getSuggestion(e){
    let filterArr=[]
    let arr1=["raunak","simran","poonam","rohan","simranJeet","pooja","swati"]

if(this.getrandomBool(2)){
  for (let i=0;i<arr1.length;i++){
    let uppr=(e.target.value.length===0?0:e.target.value.length-1)
    let ele=arr1[i].substr(0,uppr+1)
    if(ele.toLowerCase()===e.target.value.toLowerCase()){
          filterArr.push(arr1[i])
    }
  }
}
this.setState({inputVal:e.target.value})
  return new Promise((resolve,reject)=>{
    let timeOut=Math.random()*200
    
    setTimeout(()=>{
      if(this.getrandomBool(10)){console.log("fail");reject([])}else{console.log("pass");resolve(filterArr)}},timeOut)
  }).then(function(arr){this.setState({filterArr:arr})}.bind(this))
  .catch(()=>{console.log("raunak")})
  }
  render(){
return (
  <div className="dropdown">
  <div className="dropdown-content">
    <input value={this.state.inputVal} onChange={this.getSuggestion}/>
    <div style={{border:'1px solid black',width:"175px"}}>
    {this.state.filterArr.map((ele)=>{return(
  <option key={ele} style={{border:"1px solid black"}}>{ele}</option>
    )
    })}
    </div>
    </div>
  </div>
  );
  }
}

