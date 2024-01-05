import React from "react";
import axios from "axios";
import  './CadastroEstoque.css';
import { Link } from 'react-router-dom'


function CadastroEstoque(){
    return(
       
            <div className="FlexPai">
            <Link to={'/Cadastroestoque'}>
            </Link>

                <div className="ce">
                    <h1> Cadastro de Estoque </h1>
                </div>

                <div className="nome" >
                <label> Nome do Produto: </label>
                    <input type="name" placeholder="Nome"></input>
                </div>

    
                <div className="quantity">
                <label> Quantidade: </label>
                    <input type="name" placeholder="Quantity"></input>
                </div>

                
                



            </div>






            
    )
    }
    
 
    export default CadastroEstoque;


