import React,{ Component } from 'react';
export class Carousel extends Component{

  render(){
    let urls = [
      "./assets/images/niño_libertad.jpg",
      "./assets/images/niño_libertad.jpg"
    ];
    console.log(urls,urls[0]);
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-placeholder active"></div>
          <div className="item active">
            <div className="div-imagen-carousel">
              <img className="imagen-carousel" src="./assets/images/niño_libertad.jpg"></img>
            </div>
          </div>

          <div className="item">
            <div className="div-imagen-carousel">
              <span className="span-btn"/>
              <div className="div-imagen-carousel">
                <div className="div-texto-carousel">
                  <h1 className="titulo-carousel">Titulo de prueba </h1>
                  <span className="span-carousel">Texto de prieba qawldknweldkjfndskjvnsjkvsdfsd dsf saf erfer erg erg gttrg rt hrth y  tyhty hty</span>
                </div>
                  <img className="imagen-carousel" src="./assets/images/niño_libertad.jpg"></img>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      );
    }
}
