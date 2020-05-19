import { LitElement, html,css } from 'lit-element';

export class ListaControl extends LitElement {
    static get properties(){
        return{
            datapeliculas: {type:Array,
            },

            titulo:{ type:String },
            imagen:{ type:String },
            sinopsis:{ type:String },
            fecha:{ type:String },
            tituloOriginal:{ type:String },	
            votomedio:{ type:Number },	
            totalvotos:{ type:Number },	
            
                hasChanged(newVal, oldVal) {
                    if (newVal > oldVal) {
                        console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
                        return true;
                    }
                    else {
                        console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
                        return false;
                    }
                    }            
            
            
            
            
            }

        
        
    }
    constructor(){
        super();
        this.datapeliculas=[];
        this.numeropagina=1;
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
        div{
            position:absolute;
            /*background-color:#c48e59;*/
            overflow-y: scroll;
            padding:10px;
            top:80px;
            height:500px;
            color:whitesmoke;

        }
        div::-webkit-scrollbar {
      			width: 15px;
			}        
        paper-item:hover{
            cursor:pointer;
            color:#e7dcd0;
            background-color:#0f0f52;
        }

        `;
      }


    render() {

        return html`
                ${this.ajaxDataPeliculas}
    <div>${this.datapeliculas.map(item => html`<paper-item @click="${this.peliSeleccionada}" id="${item.id}"><p>${item.original_title}</p></paper-item>`)}</div>
    <card-control titulo="${this.titulo}" 
                  imagen="${this.imagen}" 
                  sinopsis="${this.sinopsis}" 
                  fecha="${this.fecha}"
                  tituloOriginal="${this.tituloOriginal}"
                  votomedio="${this.votomedio}"
                  totalvotos="${this.totalvotos}"
    ></card-control>                

    
    `;
    }
    /*Funcion ajax api de peliculas */
    get ajaxDataPeliculas(){
        localStorage.porcentaje=0;
        return html`
            <iron-ajax
                id="ajax-data"
                auto
                url="https://api.themoviedb.org/3/list/1"
                params='{"api_key":"c27a345f734f44b5a2b00404bb175eb6","language":"es-ES","list_id":"1"}'
                handle-as="json"
                @response="${this.respuestaTitulos}"
                
                ></iron-ajax>
                
        `;
    }
    /* Se envia los datos del Ajax a la funcion y al array de peliculas */
    respuestaTitulos(e){
        //console.log(e.detail.__data.response.items);
        this.datapeliculas = e.detail.__data.response.items;

        
    }
    /*Funcion cuando se selecciona un item, envia los datos
      al componente card-control y se llena en sessionStorage
      los porcentajes que se visualizan en la pagina ppal  */
    peliSeleccionada(event) {
        var idPelicula = event.currentTarget.id;
        for (let i=0;i<=this.datapeliculas.length-1;i++){
            if (idPelicula==this.datapeliculas[i].id){
                this.titulo = this.datapeliculas[i].title;
                this.imagen="https://image.tmdb.org/t/p/original/" + this.datapeliculas[i].poster_path;
                this.sinopsis = this.datapeliculas[i].overview;
                this.porcentaje1 = parseInt(this.datapeliculas[i].popularity);
                this.porcentaje2 = (parseInt(this.datapeliculas[i].vote_average)*100)/10;
                this.fecha = this.datapeliculas[i].release_date;
                this.tituloOriginal=this.datapeliculas[i].original_title;
                this.votomedio=this.datapeliculas[i].vote_average;
                this.totalvotos=this.datapeliculas[i].vote_count;
                sessionStorage.setItem('porcentaje1',this.porcentaje1);
                sessionStorage.setItem('porcentaje2',this.porcentaje2); 
                sessionStorage.setItem('titulo1',this.titulo); 

            }
            
        }

      }

}
customElements.define('lista-control', ListaControl);