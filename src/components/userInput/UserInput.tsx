import React from "react";
import "./UserInput.css";
import axios from "axios";





// function Teste(){
//     return(
// <div> Teste</div>
//     )

// }

//   async function userDataGet(){
//         var userNameInput = document.getElementById("userName") as HTMLInputElement || null;
//         var userProductsInput = document.getElementById("userProducts") as HTMLInputElement || null;
//         var userInputFinishedSale = document.getElementById("userFinishedSale") as HTMLInputElement || null;
//         var userInputDiscount = document.getElementById("userDiscount") as HTMLInputElement || null;
//         var userInputSale = document.getElementById("userSale") as HTMLInputElement || null;

//         var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
//         var vendaUrl = "http://localhost:4000/api/venda";

//         var userDataJson = {
//             "user" : userNameInput.value.toString(),
//             "products" : userProductsInput.value.toString(),
//             "finishedSale": userInputFinishedSale.value.toString(),
//             "discount" : userInputDiscount.value.toString(),
//             "Sale" : userInputSale.value.toString()
//     }}

//     async function EstoqueDataGet(){
//         var estoqueNameInput = document.getElementById("estoqueName") as HTMLInputElement || null;
//         var estoqueFactoryInput = document.getElementById("estoqueFactory") as HTMLInputElement || null;
//         var estoqueInputQuantity = document.getElementById("estoqueQuantity") as HTMLInputElement || null;
       
//         var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
//         var vendaUrl = "http://localhost:4000/api/estoque";
    
//         var estoqueDataJson = {
//             "name" : estoqueNameInput.value.toString(),
//             "factory" : estoqueFactoryInput.value.toString(),
//             "quantity": estoqueInputQuantity.value.toString(),
//    }}



//      async function UsuarioDataGet(){
//             var usuarioNameInput = document.getElementById("usuarioName") as HTMLInputElement || null;
//             var usuarioLastNameInput = document.getElementById(" usuarioLastName") as HTMLInputElement || null;
//             var usuarioCpfInput = document.getElementById("usuarioCpf") as HTMLInputElement || null;
//             var usuarioEmailInput = document.getElementById("usuarioEmail") as HTMLInputElement || null;
           
        
//             var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
//             var vendaUrl = "http://localhost:4000/api/users";
        
//             var estoqueDataJson = {
//                 "name" : usuarioNameInput.value.toString(),
//                 "last_name" : usuarioLastNameInput.value.toString(),
//                 "cpf": usuarioCpfInput.value.toString(),
//                 "email": usuarioEmailInput.value.toString(),
//             }


//             await axios.get(vendaUrl,
//                 ).then((response) => {
//                     // Metodo que serve para simular um array usando a estutura de um Json(Record) 
//                     const dataVenda: Record<string,{user: string, products: string, 
//                         finishedSale: string, discount : string, Sale: string}> = 
//                         response.data; 
                        
//                     const dataVendaArray = Object.entries(dataVenda).map(
//                         ([key, value]) => ({
//                              key,
//                             ...value
//                         }));


//         console.log(dataVendaArray[1]);

//         dataVendaArray.forEach((i) => {
//             const newDiv = document.createElement("div");

//             newDiv.innerHTML = `
            
//             <div>
//                 Nome:${i.user}
//             <div/>            
//             <div>
//                 Produtos:${i.products}
//             <div/>   
//             <div>
//                 Compra final:${i.finishedSale}
//             <div/>   
//             <div>
//                 Desconto:${i.discount}
//             <div/>   
//             <div>
//                 Compra:${i.Sale}
//             <div/>  
        
//             `;
//             document.body.appendChild(newDiv);
            
            
            
//         })
//  });



//         }
//         async function userDataPost(){
//             const vendaUrl = "http://localhost:4000/api/venda";

//              var vendaJson ={
//                 "user":"custodio",
//                 "products":"heloiza",
//                 "finishedSale":true,
//                 "discount":"11",
//                 "Sale": "aaaa"
//              }

//             await axios.post(vendaUrl, vendaJson, 
//             {
//                 withCredentials: true,
//                 headers : {
//                     "Content-Type": "application/json",
//                     // "Acess-Control-Allow-Origin": "*"

//                 },
//                 maxRedirects:0,
      

//              } )
//             .then((response) =>{
//                 console.log(response)

//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//         }



// function UserInput(){
//     return(
//         <div className="userInputMain">
//             <div className="userInputBody">
//                 <label>Nome:</label>
//             <input type="text" id="userName"/>
//             </div>
            


//             <div className="userProductsInput">
//                 <label>Products:</label>
//             <input type="text" id="userProducts"/>
//             </div>

//             <div className="userInputfinishedSale">
//                 <label>FinishedSale:</label>
//              <input type="text" id="userFinishedSale" />
//             </div>


//             <div className="userInputDiscount">
//                 <label>Discount:</label>
//             <input type="text" id="userDiscount"/>
//             </div>

//             <div className="userInputSale">
//                 <label>Sale:</label>
//             <input type="text" id="userSale"/>
//             </div>
//             <button id ="sendBtn" onClick={userDataGet}> enviar </button>
//             <button id ="sendBtn" onClick={userDataPost}> Obter </button>

//             <br/>
//             <br />
          
//             </div>
            
        
//     )
// }

//  export default UserInput 