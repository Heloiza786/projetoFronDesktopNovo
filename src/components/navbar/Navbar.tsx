import React from "react";
import axios from "axios";
import './Navbar.css';

import { Link } from 'react-router-dom'
import image from '../img/Group 143725991.jpg';
import image1 from '../img/PetShop .jpg';
import image2 from '../img/pet2.png';
import image3 from '../img/Categarios.png';
import imgCadastro from '../img/pet3.png';
import read from '../img/petreeall.png';

function Navbar() {
    
    return (
        
        <div className="FlexPai">       
             
             <img className="img-logo" src={image1} alt="img-logo" />
             {/* <img className="" src={image3} alt="" />       */}
             <div className="imgspets-container">
            <Link to={'/cliente'}>
                <img className="pet2" src={image2} alt="pet2" />
            </Link>
            <Link to={'venda'}>
                <img className="pet2" src={imgCadastro} alt="pet2" />
            </Link>
            </div>

           
            {/* <div className="agend">
                <Link to={'/cliente'}>
                    Atendimento Clínico
                </Link>
            </div> */}

            {/* <div className="imgspets">
            <Link to={'/cliente'}>
                <img className="pet2" src={image2} alt="pet2" />
              
            </Link>
            </div> */}
            <img className="img-logon" src={read} alt="img-logon" />
            
          
            {/* <div className="sobre">
                <Link to={'venda'}>
                    Venda de Produtos
                </Link>
            </div> */}

<div className="rodape">
    <h1>
    E-mail: info@paraisodospets.com<p/>
    Telefone: (21) 1234-5678<p/>
    Versão do Serviço: 3.0.1-alpha<p/>
        </h1>
     </div>


 
            {/* <img className="img-logo2" src={image} alt="Group 143725991" /> */}
        </div>
        
        
    )
}

export default Navbar;


