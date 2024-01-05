import React from "react";
import axios from "axios";

// interface createUsuarios{
//     name: string;
//     lastName: string;
//     cpf: string;
//     email: string;
//     horario: string;
//     pelagem: string;
//     especie: string;
//     raca: string;


// }
async function UsuarioDataGet(){
    var usuarioNameInput = document.getElementById("usuarioName") as HTMLInputElement || null;
    var usuarioLastNameInput = document.getElementById(" usuarioLastName") as HTMLInputElement || null;
    var usuarioCpfInput = document.getElementById("usuarioCpf") as HTMLInputElement || null;
    var usuarioEmailInput = document.getElementById("usuarioEmail") as HTMLInputElement || null;
    var usuarioHorarioInput = document.getElementById("usuarioHorario") as HTMLInputElement || null;
    var usuarioPelagemInput = document.getElementById("usuarioPelagem") as HTMLInputElement || null;
    var usuarioEspecieInput = document.getElementById("usuarioEspecie") as HTMLInputElement || null;
    var usuarioRacaInput = document.getElementById("usuarioRaca") as HTMLInputElement || null;

    var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
   

    var estoqueDataJson
    // estuque?
     = {
        "name" : usuarioNameInput.value.toString(),
        "lastName" : usuarioLastNameInput.value.toString(),
        "cpf": usuarioCpfInput.value.toString(),
        "email": usuarioEmailInput.value.toString(),
        "horario": usuarioHorarioInput.value.toString(),
        "pelagem": usuarioPelagemInput.value.toString(),
        "especie": usuarioEspecieInput.value.toString(),
        "raca": usuarioRacaInput.value.toString()
    }}


async function getUsuario(divId : HTMLDivElement){

   
    const  usersUrl  = "http://localhost:4000/api/user" ;

    await axios.get(usersUrl)
    .then((response) =>{
        

            const dataVenda: Record<string, {name: string, lastName: string, 
                cpf: string,  email: string, horario: string , pelagem: string, especie: string, raca: string}> = 
                response.data;

                const dataVendaArray = Object.entries(dataVenda).map(
                    ([key, value]) => ({
                         key,
                        ...value
                    }));

                    var content = "";

                 dataVendaArray.forEach((dados) => {

                 
                    content += `
                    
                    <div class="FlexPai">

            <div class="name">
                        ${dados.name} 
            </div>
    
                            
             <div class="lastName">
                    ${dados.lastName} 
            </div>
    
             <div class="cpf">
                    ${dados.cpf} 
             </div>
                    
                
            <div class="email">
                 ${dados.email} 
            </div>

            <div class="horario">
                ${dados.horario} 
            </div>

            <div class="pelagem">
               ${dados.pelagem} 
            </div>

            <div class="especie"> 
              ${dados.especie}
           </div>

           <div class="raca">
              ${dados.raca} 
            <div/>
                
                    `;
     

            
         divId.innerHTML = content;
     

    })

})
    .catch((error ) => {
        console.log(" O erro ocorrido foi ", error)
    })
   }
    function postUsuario(){
        console.log("teste")

    }
        export default {getUsuario, postUsuario}

