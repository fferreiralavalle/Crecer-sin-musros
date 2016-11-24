import React,{ Component } from 'react';

export class Header extends Component{


  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <p className="navbar-text">Crecer sin muros</p>
            <button type="button" className="btn btn-default navbar-btn">Inicio</button>
            <button type="button" className="btn btn-default navbar-btn">¿Que es crecer sin muros?</button>
          </div>
        </nav>
      </div>
    )
  }
}
