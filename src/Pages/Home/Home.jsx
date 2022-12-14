import { useState } from 'react'
import './style.css'
import { default as readNews } from '../../assets/read_news.jpg'
import { default as Logo } from '../../assets/logo.svg'
import { default as arrowright} from '../../assets/arrow-right.svg'
import { default as send} from '../../assets/send.svg'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="main"> {/*Div principal*/}
      {/* Container das seções */}
      <div className="container">
        {/*Primeiro Container*/}
          <div className="section-1-container">
            <section className="logocontainer" >
              <img src={Logo} className="logo" alt="logotipo"/>
            </section>
            <section className="text-content">
                <h2>Atualize suas informações em 5 minutos</h2>
                <p><b>tudo o que você precisa saber para ficar bem informado</b></p>
                <p>Notícias sobre o universo Rocket Seat, e tudo o que você precisa para começar o seu dia melhor!</p>
                <p id="text">Perfeito para se preparar para codar! </p>
            </section>
            <section className="email-form">
               <p>Digite seu email</p>
               <section className="email-bar">
                    <input type="email" size="115" placeholder="insira seu e-mail" autoFocus/>
                    <button type="submit"><img src={send}/></button>
               </section>
               <div className="letmeread">
                   <a id="phrase"href=""><b>Deixe-me ler primeiro</b></a>
                  <a id="seta" href="" ><img src={arrowright} id="overlay" alt="arrow-right"/></a>     
               </div>
            </section>   
          </div>
          {/*Segundo Container*/} 
          <div className="section-2-container">
            <img src={readNews} alt="Read_News"/>
          </div>
      </div>
    </div>
  )
}

