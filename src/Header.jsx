import React,{ Component } from 'react';

export class Header extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <p className="navbar-text">Crecer sin muros</p>

            {/*<div className="fb-like pull-right" data-href="https://www.facebook.com/CrecerSinMuros/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>*/}

            <button type="button" className="btn btn-default navbar-btn pull-right">
              <span id="quienesSomos" className="span-btn">
                {/*Texto en style.css */}
              </span>
            </button>

            <button type="button" className="btn btn-default navbar-btn pull-right">
              <span id="contactanos" className="span-btn"> {/*Texto en style.css */}
                <i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
                {' '}
                <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
              </span>{/*Texto en style.css */}
            </button>

            <button type="button" className="btn btn-default navbar-btn pull-right">
              <span id="headerHome" className="span-btn">
                <i className="fa fa-home fa-lg" aria-hidden="true"></i>{/*Texto en style.css */}
              </span>
            </button>

          </div>
          </nav>
      </div>
    )
  }
}
