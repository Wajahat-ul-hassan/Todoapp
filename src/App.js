import React from "react"
import Todo from "./TOdo" 
import "./App.css"


class Todoapp extends React.Component{
  state={
    items:"",
    actualitems:[]
  }
  add = () =>{
    this.setState({
      ...this.state,
      actualitems:[...this.state.actualitems , this.state.items],
      items:""
      
    })
  }
  delete = (id) => {
    this.setState({
      ...this.state,
      actualitems:[...this.state.actualitems.filter((arr , index)=>{return index !== id})]
    })
  }
  render(){
    return(
      <div className="main">
      <div className="todoapp">
       <div className="input">
         <input type="text" placeholder=" SOme Text" value={this.state.items} onChange={(e)=>{this.setState({items:e.target.value})}} ></input>
         <button onClick={this.add}> ADD</button>
       </div>   
          {this.state.actualitems.map((val , index)=>{
             return<Todo val1={val} del={this.delete} key={index} id={index}/>
          })}
      </div>   
      </div>
    )
  }
}

export default Todoapp;
