import React from 'react'
import Img from '../../assets/imagem-home.svg'
import "./style.css"


const Banner = () => {
    return(
      <div className="main">
        
        <div>
          <h1>Agora eu aprendo react!</h1>
          <p>Meu site em react eu arraso, fazer o que...</p>
        </div>
        <img src={Img} alt='imagem de uma menina na natureza com celular'/>
      
      </div>
    )

}

export default Banner