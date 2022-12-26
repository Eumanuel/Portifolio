import './home.css'

import { Airplane, Code } from 'phosphor-react'
import ExperiencesBlock from '../../components/experiencesBlock/ExperiencesBlock'

import { languages, tools } from '../../../../data'


export default function Home() {
  return (
    <>
      <div className="onConstructionWarning"><h3>Página em construção! Veja o progresso no GitHub!</h3></div>
      <div className="home">
        <div className="hoami">
          <h1>Emanuel Ribeiro da Silva</h1>
          <img className='hoamiPhoto' src="./fotoPerfil.jpg" alt="Emanuel Ribeiro" />
          <p>Full Stack Jr. C# & JS</p>
          <p className='hoamiPhrase'><Airplane size={32} weight="thin"/>&nbsp;&nbsp;Amante de aviação e programação&nbsp;&nbsp;<Code size={32} weight="thin"/></p>
          <p>Eu comecei a programar bem cedo na vida, criando meus scripts Batch para automatizar coisas simples no computador, de lá parti para o C++ e Python, mas o meu foco verdadeiro ficou em NodeJs e C#.</p>
          <p>Tenho experiência administrando serviços nos seguintes Clouds: Umbler, Google, Azure, AWS, Oracle, OVH, Kimsufi, Digital Ocean, SoYouStart, ClouFlare (Pages e Workers) e WiseCP, além de uma sólida experiência administrando WordPress, E-mails, domínios e em suporte ao cliente.</p>
          <p>Quando pequeno, sempre achei incrível a escala que um aplicativo Web pode tomar e como que é administrada essa escala. Minha curiosidade quanto a isso comecou com o youtube e sua contagem de views, que inicialmente ficava presa em 301 visualizações, eu sempre ficava curioso com isso e um dia decidi pesquisar e entender o que está acontecendo, já que era possível entrar em um vídeo até horas depois que ele era postado e ver a quantidade de curtidas nas alturas, mas a quanitdade de views em 301.</p> <p>Ver a explicação do quão dificil é sincronizar o contador de views me deixou estupefado, eu achei incrível como uma coisa bem mais simples do que a entrega de vídeos tinha uma limitação técnica e como que o time do youtube estava trabalhando para tirar essa limitação. Desde então, eu gosto muito de criar aplicativos Web e sempre estudo muito sobre como escalar com qualidade meu serviço.</p>
        </div>
        <div className="whatIDo">
          <div className='experiencesWrapper'>
            <h1>Linguages e Frameworks</h1>
            {languages.map((language, index) => {
              return (
                <>
                  <ExperiencesBlock data={language}/>
                </>
              )
            })}
          </div>
          <div className='experiencesWrapper'>
            <h1>Ferramentas</h1>
            {tools.map((tool, index) => {
              return (
                <>
                  <ExperiencesBlock data={tool}/>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}