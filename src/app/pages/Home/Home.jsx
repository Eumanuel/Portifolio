import './home.css'

import { Airplane, Code } from 'phosphor-react'


export default function Home() {
  return (
    <div className="home">
      <div className="hoami">
        <h1>Emanuel Ribeiro da Silva</h1>
        <img className='hoamiPhoto' src="./fotoPerfil.jpg" alt="Emanuel Ribeiro" />
        <p>Full Stack Jr. C# & JS</p>
        <p className='hoamiPhrase'><Airplane size={32} weight="thin"/>&nbsp;&nbsp;Amante de aviação e programação&nbsp;&nbsp;<Code size={32} weight="thin"/></p>
        <p>Eu comecei a programar bem cedo na vida, criando meus scripts Batch para automatizar coisas simples no computador, de lá parti para o C++ e Python, mas o meu foco verdadeiro ficou em NodeJs e C#.</p>
        <p>Tenho experiência administrando serviços nos seguintes Clouds: Umbler, Google, Azure, AWS, Oracle, OVH, Kimsufi, Digital Ocean, SoYouStart, ClouFlare (Pages e Workers) e WiseCP, além de uma sólida experiência administrando WordPress, E-mails, domínios e em suporte ao cliente.</p>
        <p></p>
      </div>
    </div>
  )
}
