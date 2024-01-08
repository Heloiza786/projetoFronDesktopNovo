import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
// import './ScreenCadastro.css';
import img from '../img/Categarios.png'


const ScreenCadastro = () => {
  const [nome, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [pelagem, setPelagem] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");

  const dataUser = () => {
    return {
      name: "",
      lastName: "",
      cpf: "",
      email: "",
      horario: "",
      pelagem: "",
      especie: "",
      raca: "",
    };
  };

  const postUser = (userData: { name: string; lastName: string; cpf: string; email: string; horario: string; pelagem: string; especie: string; raca: string; }) => {
    axios.post("http://localhost:4000/api/user", userData)
      .then(response => {
        console.log("Usuário cadastrado com sucesso!", response.data);
      
      })
      .catch(error => {
        console.error("Erro ao cadastrar usuário", error);
      });
  };

  return (
    <div style={styles.container}>

        <div style={styles.container}> Cadastre-se aqui</div>
      {/* <Link to={'/cadastroScreens'}>Cadastro Screens</Link> */}

      <div style={styles.container}>
        <input onChange={(e) => setName(e.target.value)} placeholder="Nome" />
      </div>

      <div style={styles.container}>
        <input onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
      </div>

      <div style={styles.container}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </div>

      <div style={styles.container}>
        <input onChange={(e) => setHorario(e.target.value)} placeholder="Horario" />
      </div>
      <div style={styles.container}> Informaçoes sobre o animal </div>
      <div style={styles.container}>
        <input onChange={(e) => setPelagem(e.target.value)} placeholder="Pelagem" />
      </div>

      <div style={styles.container}>
        <input onChange={(e) => setEspecie(e.target.value)} placeholder="Especie" />
      </div>

      <div style={styles.container}>
        <input onChange={(e) => setRaca(e.target.value)} placeholder="Raça" />
      
      </div>

      <button style={styles.button} onClick={() => postUser(dataUser())}>
        Cadastrar
      </button>

      <div> 
      <img className="categorias" src={img} alt="categorias" />
      </div>
    </div>

  );
};

const styles = {
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebe3cc',
      
    },
    input: {
      display: 'flex',
    
      flexDirection: 'column',
      marginBottom: 36,
      padding: 8,
      fontSize: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
     
    
       
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      marginTop: 20,
      color: 'white',
      cursor: 'pointer',
      alignItems: 'center',
      
    }
  };
  
 


export default ScreenCadastro;







      
