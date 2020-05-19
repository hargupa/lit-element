import { LitElement, html,css } from 'lit-element';
import './card-control';
export class MainControl extends LitElement {

  /*Componente donde envia todo los controles y datos al ppal*/
  static get properties(){
    return{
        porcentaje: {type:Number,}
        

    };
    
}
constructor(){
    super();
    this.porcentaje=0;
  
}
    static get styles() {
        return css`
        :host {
          display: inline-block;
          width:100%;
          height:100%;

        }
        div{
          height:70px;
          left:350px;
          background-color:burlywood;
          text-align:center;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          color:white;
          font-size:4em;
        }

        `;
      }
    render() {
        return html`
            <div>PELICULAS</div>
            <lista-control></lista-control>
           
        `;
    }
}
customElements.define('main-control', MainControl);