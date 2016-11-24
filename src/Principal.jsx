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
            <div className="cuerpo">
              {/*<Carousel/>*/}

              <div className="fb-page" data-href="https://www.facebook.com/CrecerSinMuros/" data-tabs="timeline, messages, adapt_container_width" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>

              {/*<div
                className="fb-like"
                data-share="true"
                data-width="450"
                data-show-faces="true">
              </div>*/}
              {/*<div
                className="fb-comments"
                data-href="https://hwebuitest.firebaseapp.com/"
                data-numposts="5">
              </div>*/}

            </div>
          </div>
      	);
    }
}
