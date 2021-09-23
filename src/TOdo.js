import React from "react"

class Todo extends React.Component{
    render(){
        return(
            <>
            <button onClick={()=>{
                this.props.del(this.props.id)
            }}>dele</button>
           <h1>{this.props.val1}</h1>
         
           
            </>
        )
    }
}

export default Todo;