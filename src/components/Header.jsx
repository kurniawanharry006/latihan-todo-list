import React from 'react'

const style ={
    black : {
        backgroundcolor : 'black'
    }
}
class Header extends React.Component {
    render(){
        return(
            <div className="container-fluid text-center " style={{minHeight:'100px',backgroundColor:'lightgrey', top:0}}>
                <h1>Latihan Todo-List</h1>
            </div>
        )
    }
}

export default Header