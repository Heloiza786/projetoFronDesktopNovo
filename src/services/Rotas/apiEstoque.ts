
import React from 'react'
import axios from "axios";


async function GetEstoque( divId: HTMLDivElement){

    var estoqueNameInput = document.getElementById("estoqueName") as HTMLInputElement || null;
    var estoqueFactoryInput = document.getElementById("estoqueFactory") as HTMLInputElement || null;
    var estoqueInputQuantity = document.getElementById("estoqueQuantity") as HTMLInputElement || null;
   
    var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
    
    var estoqueJson = {
        "name" : estoqueNameInput.value.toString(),
        "factory" : estoqueFactoryInput.value.toString(),
        "quantity": estoqueInputQuantity.value.toString(),

        }
    
        const  estoqueUrl  = "http://localhost:4000/api/venda" ;


    await axios.get(estoqueUrl,
        ).then((response) => {
            const dataVenda: Record<string, {name: string, factory: string, 
                quantity: string, }> = 
                response.data;

                const dataVendaArray = Object.entries(dataVenda).map(
                    ([key, value]) => ({
                         key,
                        ...value
                    }));
            
                    var content = "";

                    dataVendaArray.forEach((i) => {
                    content +=  `
                    
                    <div>
                        Nome:${i.name}
                        <img src = ${i.name} alt =""/>
                    <div/>            
                    <div>
                       Factory:${i.factory}
                       <img src = ${i.name} alt =""/>
                    <div/>   
                    <div>
                        Quantity:${i.quantity}
                        <img src = ${i.name} alt =""/>
                    <div/>   
                   
                    `;
                    divId.innerHTML = content;
                    
                    
                
                })
            })
            .catch((error ) => {
                console.log(" O erro ocorrido foi ", error)
            })
           }
            function postEstoque(){
                console.log("teste")
        
            }
                export default {GetEstoque, postEstoque}
               
            ;
           


//                     async function estoqueDataPost(){
//                         const estoqueUrl = "http://localhost:4000/api/estoque";
            
//                          var estoqueJson ={
                           
//                          }  
//                          await axios.post(estoqueUrl, estoqueJson, 
//                          {
//                              withCredentials: true,
//                              headers : {
//                                  "Content-Type": "application/json",
//                                  // "Acess-Control-Allow-Origin": "*"
             
//                              },
//                              maxRedirects:0,
                   
             
//                           } )
//                          .then((response) =>{
//                              console.log(response)
             
//                          })
//                          .catch((error) => {
//                              console.log(error);
//                          })
//                      }        
   
        
// }
 

