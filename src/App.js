import React from 'react';
import './App.css';


class App extends React.Component{

  getServerData =() =>{

    console.log("where can")
    fetch('http://localhost:3001/',{
      method : 'get',
      headers : {'Content-Type' : 'application/json'}
    })
    .then(res=>{
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(res=> console.log(res));
  }

  render(){
    return(
      <div><button onClick = {this.getServerData}>btn</button></div>
    )
  }
}

export default App;
