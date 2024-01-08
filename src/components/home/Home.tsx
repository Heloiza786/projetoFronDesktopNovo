
import React from 'react';
import { View, Image } from 'react-native';
import image1 from '../img/PetShop .jpg'; // Lembre-se de substituir pelo caminho real da sua imagem

function Home() {
  return (
    <View>
      <div className="Home">
        <h1>Paraiso dos Pets</h1>
        <h1>Home</h1>
        <h1>Serviços</h1>
        <h1>Contatos</h1>
        <h1>Sobre</h1>
      </div>

      <div className="oneImg">
      <img className="img-logo" src={image1} alt="img-logo" />
      </div>
    </View>
  );
}

export default Home;
