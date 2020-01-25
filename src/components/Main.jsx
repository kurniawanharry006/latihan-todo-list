import React, { Component } from 'react'

export default class Main extends Component {

   state = {
       data :['Pepaya','Mangga','Pisang','Jambu'],
       addTodo:''
   }

   renderData=()=>{
       var jsx = this.state.data.map((val,idx)=>{
           return (
               <tr>
                   <td>{idx + 1}</td>
                   <td>{val}</td>
                   <td><input type="button" value="delete" className="btn btn-danger" onClick={()=>{this.onBtnDel(idx)}}/></td>
               </tr>
           )
       })
       return jsx 
   }

   onInputText=(e)=>{
    this.setState({addTodo:e.target.value})
   }

   onBtnAdd=()=>{
       var newData = this.state.data
       newData.push(this.state.addTodo)
       this.setState({data:newData})
   }

   onBtnDel=(idx)=>{
    var tempData = this.state.data
    tempData.splice(idx,1)
    this.setState({data:tempData})
   }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><input type="text" className="form-control" onChange={this.onInputText}/></td>
                            <td><input type="button" className="btn btn-success" value="Add Todo" onClick={this.onBtnAdd}/></td>
                        </tr>
                        
                        {this.state.data.length} Items
                    </tfoot>
                </table>
            </div>
        )
    }
}
