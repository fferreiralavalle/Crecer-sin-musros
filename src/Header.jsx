import React,{ Component } from 'react';

export class Header extends Component{


  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <p className="navbar-text">Crecer sin muros</p>
            <button type="button" className="btn btn-default navbar-btn">
              <span id="headerHome" className="span-btn"><i className="fa fa-home" aria-hidden="true"></i></span>
            </button>
            <button type="button" className="btn btn-default navbar-btn">
              <span id="quienesSomos" className="span-btn"></span>{/*Texto en style.css */}
            </button>
            <div className="fb-like pull-right" data-href="https://www.facebook.com/CrecerSinMuros/" data-layout="box_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
          </div>
          </nav>
      </div>
    )
  }
}
