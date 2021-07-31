
import w from "../media/1.png"
import green from "../media/image 1.png"
import hand from "../media/media/image_2.png"
import short from "../media/media/image_3.png"
import girl from "../media/er13.PNG"
import g from "../media/media/er13 (3).png"

//linking the styles page to this file
import React, {Component} from 'react'
import $ from  'jquery'
import '../CSS/Trending.css'


//importing pictures from folder



class Trending extends React.Component {
    constructor(){
      super()
      this.scroll = this.scroll.bind(this)
    }
  
  
    scroll(direction){
      let far = $( '.image-container' ).width()/2*direction;
      let pos = $('.image-container').scrollLeft() + far;
      $('.image-container').animate( { scrollLeft: pos }, 1000)
    }
  
    render() {
      return <div className="container">
        <div className="main">
            <h1 className="title">Trending Now</h1>
            <div className="wrapper">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
            <div className="image-container">
                <div className="image"><img src={green} alt="green-eyed-girl" id="trend" /></div>
                <div className="image"><img src={hand} alt="green-eyed-girl" id="trend" /></div>
                <div className="image"><img src={short} alt="green-eyed-girl" id="trend" /></div>
            </div>
            <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
            </div>
        </div>

        <div className="Best_of_the_playlist">
            <h1 className="title-1">The Best of The Playlist</h1>
            <div className="wrapper-1">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
            <div className="image-container-1">
                <div className="image-1"><img src={girl} alt="green-eyed-girl" id="best" /></div>
                <div className="image-1"><img src={girl} alt="green-eyed-girl" id="best" /></div>
                <div className="image-1"><img src={girl} alt="green-eyed-girl" id="best" /></div>
                <div className="image-1"><img src={girl} alt="green-eyed-girl" id="best" /></div>
                <div className="image-1"><img src={girl} alt="green-eyed-girl" id="best" /></div>
            </div>
            <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
            </div>
        </div>

        <div className="the_latest">
            <h1 className="title-2">The Latest</h1>
            <div className="wrapper-2">
            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
            <div className="image-container-2">
                <div className="image-2"><img src={g} alt="green-eyed-girl" id="latest" /></div>
                <div className="image-2"><img src={g} alt="green-eyed-girl" id="latest" /></div>
                <div className="image-2"><img src={g} alt="green-eyed-girl" id="latest" /></div>
                <div className="image-2"><img src={g} alt="green-eyed-girl" id="latest" /></div>
                <div className="image-2"><img src={g} alt="green-eyed-girl" id="latest" /></div>
            </div>
            <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
            </div>
        </div>
      </div>;
    }
  }
  
  

export default Trending;