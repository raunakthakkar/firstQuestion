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
  getSuggestion(e){
    let arr1=["raunak","simran","poonam","rohan","simranJeet","pooja","swati"]
    let filterArr=[]
    for (let i=0;i<arr1.length;i++){
      let uppr=(e.target.value.length===0?0:e.target.value.length-1)
      let ele=arr1[i].substr(0,uppr+1)
      if(ele.toLowerCase()===e.target.value.toLowerCase()){
            filterArr.push(arr1[i])
      }
    }
    // console.log(filterArr)
    this.setState({inputVal:e.target.value.toLowerCase()})
  return new Promise((resolve,reject)=>{
    let timeOut=Math.random()*200
    setTimeout(()=>{
      if((Math.random*1000)%1000===0){reject()}else{Promise.resolve(filterArr).then(this.setState({filterArr:filterArr}))}
    },timeOut)
  })
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

