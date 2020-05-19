import { LitElement, html,css } from 'lit-element';
import './lista-control';
export class CardControl extends LitElement {

		static get properties() {
			return {
				arraypeliculas: {
					type: Array,
				},
				titulo:{
					type:String,
				},
				imagen:{ type:String },
				sinopsis:{ type:String },
				fecha:{ type:String },
				tituloOriginal:{ type:String },	
				votomedio:{ type:Number },	
				totalvotos:{ type:Number },				
			}
		}

		constructor() {
			super();
			this.arraypeliculas=[];
			this.titulo="";
			this.imagen="";
			this.sinopsis="";
			this.fecha="";
			this.tituloOriginal="";
			this.votomedio=0;
			this.totalvotos=0;
			
		}
	
		static get styles() {
			return css`
			:host {
			  display: inline-block;
			}
			flip-card{
				position:absolute;
				left:450px;
				width:350px;

			}
			paper-item:hover{
				cursor:pointer;
			}
			.div-imagen{
				text-align:center
			}
			iron-image{
				top:8px;
				left:-50px;
				height:480px;
				width:440px;
			}
			.titulo{
				text-align:center;
				color:#f8f5f2;
			}
			.subtitulos{
				margin-left:20px;
				margin-right:20px;
				color:#f8f5f2;
			}
			.subtitulos2{
				margin-left:20px;
				margin-right:20px;
				color:#f8f5f2;
				font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				font-size:15px;
			}
			.contenido{
				margin-left:20px;
				margin-right:20px;
				text-align:justify;
				overflow-y: scroll;
				height:140px;
				color:#f8f5f2;
				scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
    			scrollbar-width: thin;				
			}
			.contenido::-webkit-scrollbar {
      			width: 15px;
			}			
			.popularidad{
				position: absolute;
				left:950px;
				top:280px;
				color: #ff7800;       
    		}
			.calificacion{
				position: absolute;
				left:950px;
				top:510px;
				color: #ff7800;       
    		}			
			hr{
				background-color: #b48a34;
			}						
			`;
		  }
    render() {
        return html`

			<flip-card >
				<section slot="front-content" >
					
					<div class="div-imagen"><iron-image  sizing="contain"  src="${this.imagen}"></iron-image></div>
					</section>
					
					<section slot="back-content" >
						<header class="banner" ></header>
						<main>
							<div class="titulo"><h1>${this.titulo}</h1></div>
							<hr>
							${this.titulo? html`
								<div class="subtitulos"><h2>Ficha Tecnica</h2></div>
								<div class="subtitulos2"><p>Fecha de Lanzamiento:${this.fecha}</p>
														<p>Titulo Original:  ${this.tituloOriginal}</p>
														<p>Calificacion Votos:  ${this.votomedio}</p>
														<p>Total Votos:  ${this.totalvotos}</p></div>
														<div class="subtitulos"><hr></div>`
					
							: html`` }							
							<div class="subtitulos">${this.titulo? html`<h2>Sinopsis</h2>`: html`` }</div>
							<div class="contenido">${this.sinopsis}</div>


						</main>
					</section>
				</flip-card>
				${this.titulo? html`<div class="popularidad"><h1>Popularidad</h1><div><br>`: html`` }
				${this.titulo? html`<div class="calificacion"><h1>Calificación</h1><div><br>`: html`` }
				
				
        `;
    }





}


customElements.define('card-control', CardControl);