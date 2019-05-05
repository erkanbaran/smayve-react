import React from 'react';

const user={
    name:'Barry',
    lastname:'Allen',
    age:28
}

// const Header = ()=>{
//     return( 
//     <div>
//         <div>{user.name}</div>        
//         <div>{user.lastname}</div>        
//         <div>{user.age}</div>        
//     </div>
//     )
// }

class Header extends React.Component{

    state ={
        keywords:'Hello'
    }

    inputChangeHandler(event){
        this.setState(
            {
                keywords:event.target.value
            }
        )
    }

    render(){
        return(
            <header>
                <div className="logo">
                    Free Life in London
                </div>

                <p>How to survive without money!</p>
                    
                <input type="text" onChange={this.props.keywords}></input>
            </header>
        )
    }
}

export default Header;