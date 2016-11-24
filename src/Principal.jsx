import React,{ Component } from 'react';
import { Header } from './Header';
import { Carousel } from './Carousel';
// import {PokemonView} from './PokemonView';
// import IngresarNombre from './IngresarNombre.jsx';
// import IngresarTipos from './IngresarTipos.jsx';
// import PokemonSeleccionadoView from './PokemonSeleccionadoView.jsx';

export class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {};
       	// searchPokemonById = searchPokemonById.bind(this);
    }



    render(){
      	return(
      		<div>
            <Header/>
            <Carousel/>

            <div
              className="fb-like"
              data-share="true"
              data-width="450"
              data-show-faces="true">
            </div>
            <div
              className="fb-comments"
              data-href="https://hwebuitest.firebaseapp.com/"
              data-numposts="5">
            </div>
            <div>
              <iframe
                src="https://www.facebook.com/CrecerSinMuros/"
                width="500"
                height="427"
                style={{border:"none",overflow:"hidden"}}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true">
              </iframe>
            </div>

            hgcvjmy
          </div>
      	);
    }
}
