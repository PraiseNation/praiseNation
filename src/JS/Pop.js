import React, { Component } from 'react'
import '../CSS/pictures.css';

class App extends Component{
    render(){
    return(
       <div className='popupParent'>
           <div className='popupImage'>
               <button className="closeImageButton" onClick="this.props.closePopup"> 
               X
               </button>
               <img src={this.props.popImageUrl} />
           </div>
       </div>
    )
    }
}

export default App;
