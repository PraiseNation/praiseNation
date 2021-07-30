import React, { Component } from 'react'
import '../CSS/pictures.css'
import Popup from './Pop'

class Pictures extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl:"",
            imageUrlArray:[
                //er1
                "https://drive.google.com/uc?id=132K3jXhwuM_uhKf_R1gfZu80eLASXobk",
                //er2
                "https://drive.google.com/uc?id=1ak_Og5ucfdwcvzfKwzcT2KBSIBjBmM3b",
                //er3
                "https://drive.google.com/uc?id=135JDSL_K2e3ZuO1O4Ww6IwPKHGpk85Po",
                //er4
                "https://drive.google.com/uc?id=1Guz-83IY9c96zA4LZXT4ej3xyiyYkSqA",
                //er5
                "https://drive.google.com/uc?id=1Iql5XJPSJghLb9quHKIO7bwdkNnHqFOy",
                //er6
                "https://drive.google.com/uc?id=1bCEu51Gqe_YygVJwk9C2aG68A6paj9mk",
                //er7
                "https://drive.google.com/uc?id=15p7pTTXOXc3QhTWD4sFep7nAtI6THJhI",
                //er8
                "https://drive.google.com/uc?id=1lpS0bwslIVz8NY72MQeKBmyjC6EOanCO",
                //er9
                "https://drive.google.com/uc?id=1IdX9hopEJ_iZNiuXyOEs2cE0WPGmAC3h",
                //er10
                "https://drive.google.com/uc?id=1oKZ_a3C_fFhelAeYO8UGmY3oFaYsMYuX",
                //er11
                "https://drive.google.com/uc?id=1RHneNgzbcXmpeVidk44WfuBVzNTda_IR",
                //er12
                "https://drive.google.com/uc?id=1ZQCZR5tQe2UWlftd2JWi_0etEnCNwvp9",
                //er13
                "https://drive.google.com/uc?id=1dklllu-dBbX9s6HfhJrPwgDKoXEjyawT",
                //wr1
                "https://drive.google.com/uc?id=1-BESKarnxMmtUepn9ocwTDh6qb94K2Qd",
                //wr2
                "https://drive.google.com/uc?id=1B2z6CSU5wydlJsuhknJxvcvfKYx-3vbG",
            ],
            showModal: false,
            popImageUrl:""        }
    }
    
    handlePopup = (url) =>{
       this.setState({
           showModal: !this.state.showModal,
           popImageUrl: url
       }) 
    }
    render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return (
                <img className="singleImage" src={url} key={index}
                onClick={() => this.handlePopup(url)}  alt=""/>
            )
        
        })
    return(
        <div className="picture_arrangement">
            {images}
            {this.state.showModal ? (
                <Popup popImageUrl = {this.state.popImageUrl} 
                closePopup = {this.handlePopup}
                />

            ) :null }
        </div>
    )
    }
}

export default Pictures;