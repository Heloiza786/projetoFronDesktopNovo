import React from "react";
import axios from "axios";
import  './CadastroCliente.css';
import '../../../src/services/Rotas/apiUsuario'
import { Link } from 'react-router-dom'

function CadastroCliente(){
    return(
       
        <div className="FlexPai">
        <Link to={'/cadastroCliente'}>
        </Link>
    
        <div className="cc">
            <h1>Cadastro de Cliente</h1>
        </div>
    
        <div className="name">
            <label>Nome:</label>
            <input type="text" placeholder="Nome" name="name" />
        </div>
    
        <div className="lastName">
            <label>Sobrenome:</label>
            <input type="text" placeholder="Sobrenome" name="lastName" />
        </div>
    
        <div className="cpf">
            <label>CPF:</label>
            <input type="text" placeholder="CPF" name="cpf" />
        </div>
    
        <div className="email">
            <label>Email:</label>
            <input type="text" placeholder="Email" name="email" />
        </div>
    
        <div className="horario">
            <label>Horário e Data:</label>
            <br />
            <input type="text" placeholder="Digite o horário" name="horario" />
            <br />
            <input type="text" placeholder="00/00/0000" name="data" />
        </div>
        
        <div className="pelagem">
            <label>Pelagem:</label>
            <input type="text" placeholder="Pelagem" name="pelagem" />
        </div>
    
        <div className="especie">
            <label>Espécie:</label>
            <input type="text" placeholder="Espécie" name="especie" />
        </div>
    
        <div className="raca">
            <label>Raça:</label>
            <input type="text" placeholder="Raça" name="raca" />
            </div>


</div>

        
    
    
    
    );
}

export default CadastroCliente;


