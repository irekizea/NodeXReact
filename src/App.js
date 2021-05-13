import React, { Component } from 'react';
// import './App.css';


// class App extends React.Component{
export default class App extends Component{
//   getServerData =() =>{

//     console.log("where can")
//     fetch('http://localhost:3001/',{
//       method : 'get',
//       headers : {'Content-Type' : 'application/json'}
//     })
//     .then(res=>{
//       console.log(res);
//       console.log(typeof(res));
//       return res.json();
//     })
//     .then(res=> console.log(res));
//   }

//   render(){
//     return(
//       <div><button onClick = {this.getServerData}>btn</button></div>
//     )
//   }
// }

// export default App;

constructor(props){
  super(props);
  this.state = {
    userName:"a",
    todoItems : [{action : "buy u ", done : false},
                  {action: "get u", done : false},
                {action : "collect u", done :true},{
                  action : "call u", done: false
                }],
                nextItemText : ""
  }
}

  updateNewTextValue=(event)=>{
    this.setState({newItemText : event.target.value});
  }

  createNewTodo =() =>{
    if(!this.state.todoItems.find(item=>item.action===this.state.newItemText)){
      this.setState({
        todoItems : [...this.state.todoItems,
        {action:this.state.newItemText, done : false}],
        newItemText:""
      })
    }
  }

  toggleTodo =(todo)=> this.setState({todoItem :
this.state.todoItems.map(item => item.action ===todo.action?{...item, done : !item.done} : item)
    });

// changeStateData = () =>{
//   this.setState({
//     userName : this.state.userName = "a" ? "b" : "a"
//   })
// }

    todoTableRows = () =>this.state.todoItems.map(item=>
      <tr key ={item.action}>
        <td>{item.action}</td>
        <td>
          <input type = "checkbox" checked={item.done} onChange={() => this.toggleTodo(item)}/>
        </td>
      </tr>);

render=()=>
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'To Do LIst
        ({this.state.todoItems.filter(t=> !t.done).length} items to do)
        </h4>
      <button className = "btn btn-primary m-2" onClick={this.changeStateData}>change</button>

      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
          value={this.state.newItemText} onChange={this.updateNewTextValue}/>
          <button className = "btn btn-primary mt-1" onClick={this.createNewTodo}>add</button>
        </div>
        <table className="table table-striped table-bordered">
          <thread>
            <tr><th>Description</th><th>Done</th></tr>
          </thread>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
    </div>


}