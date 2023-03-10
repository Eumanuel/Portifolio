import './home.css'

import { AppWindow, Atom, StripeLogo, GlobeHemisphereWest, HardDrives, Translate, UsersThree, LinkedinLogo, GithubLogo, InstagramLogo, WhatsappLogo, Envelope, FileArrowDown } from 'phosphor-react'

import React, { useState } from 'react'

// Tippy.JS
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/shift-away.css";

export default function Home() {

  const [mailText,setMailText] = useState("E-Mail");

  const copyMail = async(e) => {
    e.preventDefault();
    navigator.clipboard.writeText('contato@eumanuel.dev')
    setMailText("Copiado!");
    await new Promise(r => setTimeout(r, 2500));
    setMailText("E-Mail");
  }
  return (
    <>


    <div className="wrapper">
      <div className="resume">
        <div className="resumeProfile">
          <img src="./foto.webp" alt="" className="profileImage" />
          <h1 className='profileName'>Emanuel Ribeiro</h1>
          <p className="profileOccupation">FullStack JS e C# Jr</p>
          <div className="qualificationsWrapper">
          <div className="qualitication">
              <div className="qualiticationTitle">
                <AppWindow size={23} color="#557CF2" weight='light'/>
                <h3>Ecossistema NodeJs</h3>
              </div>
              <p>
                Experiência completa no desenvolvimento de aplicações NodeJs com diversas bibliotecas
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <Atom size={23} color="#557CF2" weight='light'/>
                <h3>Stack MERN</h3>
              </div>
              <p>
                Aplicações web completas criadas com a stack MongoDb, Express, React e Node
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <StripeLogo size={23} color="#557CF2" weight='light'/>
                <h3>Integração de APIs</h3>
              </div>
              <p>
                Experiência na integração de APIs de pagamenot no front e Back-end para aplicações seguras
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <GlobeHemisphereWest size={23} color="#557CF2" weight='light'/>
                <h3>High Availability</h3>
              </div>
              <p>
                Aplicações de alta disponibilidade criadas com escabalibidade em mente, usando CDNs e Clusteres
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <HardDrives size={23} color="#557CF2" weight='light'/>
                <h3>Bare-Metal e Cloud</h3>
              </div>
              <p>
                Experiência na configuração de servidores Bare-Metal e Cloud nos principais serviços de hospedagem
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <Translate size={23} color="#557CF2" weight='light'/>
                <h3>Fluência em Inglês</h3>
              </div>
              <p>
                Nível CEFR C1 Advanced em inglês, para conversação, leitura e escrita
              </p>
            </div>
            <div className="qualitication">
              <div className="qualiticationTitle">
                <UsersThree size={23} color="#557CF2" weight='light'/>
                <h3>Customer Success</h3>
              </div>
              <p>
                Experiência em suporte tanto ao cliente técnico quanto ao cliente leigo
              </p>
            </div>

          </div>
      <div className="profileNetworks">
          <Tippy
            content="Linkedin"
            placement={"top"}
            arrow={false}
            theme="translucent"
          >
            <a href='https://www.linkedin.com/in/emanuel-ribeiro-8705611b9/' target="_blank">
              <LinkedinLogo size={32} weight="light"/>
            </a>
          </Tippy>
          <Tippy
            content="GitHub"
            placement={"top"}
            arrow={false}
            theme="translucent"
          >
            <a href='https://github.com/Eumanuel/' target="_blank">
              <GithubLogo size={32} weight="light"/>
            </a>
          </Tippy>
          <Tippy
            content="Instagram"
            placement={"top"}
            arrow={false}
            theme="translucent"
          >
            <a href='https://www.instagram.com/eumanuelllll/' target="_blank">
              <InstagramLogo size={32} weight="light"/>
            </a>
          </Tippy>
          <Tippy
            content="WhatsApp"
            placement={"top"}
            arrow={false}
            theme="translucent"
          >
            <a href='https://contate.me/eumanuel' target="_blank">
              <WhatsappLogo size={32} weight="light"/>
            </a>
          </Tippy>
          <Tippy
            content={mailText}
            placement={"top"}
            arrow={false}
            theme="translucent"
          >
            <a onClick={copyMail}>
              <Envelope size={32} weight="light"/>
            </a>
          </Tippy>
      </div>
      </div>
        <div className="resumeExperience">

          <h1 className='title'>Experiência Profissional</h1>

        <div className="timeline skwrenTimeline">
            <div className="experienceCompany">
              <img src="./skwren.webp" alt="" className="umblerLogo" />
              <div className="company-text">
                <h1>Skwren Internet LTDA   • 7 m</h1>
                <small>47.316.952/0001-82</small>
              </div>
            </div>
            <div className="experienceBit">
              <div className="ball skDevBall"></div>
              <div className="experience-text">
                <h2>Dev FullStack MERN</h2>
                <p>Configuração completa dos sistemas e serviços, como, domínios, e-mails, hospedagem e sistemas internos.</p>
              </div>
            </div>
        </div>

          <div className="timeline umblerTimeline">
            <div className="experienceCompany">
              <img src="./umbler.webp" alt="" className="umblerLogo" />
              <div className="company-text">
                <h1>Umbler Internet LTDA   • 1 a 11 m</h1>
                <small>30.655.874/0001-48</small>
              </div>
            </div>
            <div className="experienceBit">
              <div className="ball umbDevBall"></div>
              <div className="experience-text">
                <h2>Dev C# Junior</h2>
                <p>Desenvolvimento e manutenção das ferramentas internas do time de customer Success, integração com APIs externas e criação de APIs internas, além de tradução de páginas antigas em MVC para novas em Blazor</p>
              </div>
            </div>
            <div className="experienceBit">
              <div className="ball engineerBall"></div>
              <div className="experience-text">
                <h2>Engenheiro de Customer Success</h2>
                <p>Implementação de melhorias operacionais a fim de gerar eficiência no processo de atendimento, treinamento de novos analistas, atendimento para clientes de alto valor e clientes detratores, gravação de vídeos tutoriais para o canal do Youtube da empresa, moderação do Forum (uCommunity), desenvolvimento de planos e lideraça de projetos internos.</p>
              </div>
            </div>
            <div className="experienceBit">
              <div className="ball analystBall"></div>
              <div className="experience-text">
                <h2>Analista de Customer Success</h2>
                <p>Atendimento personalizado ao cliente, atuando de forma a promover os serviços oferecidos, apresentando opções adequadas para cada perfil, além de resolução de problemas de configuração do serviço do cliente em WordPress, MySQL, NodeJs, MongoDb, DNS, Email e FTP</p>
              </div>
            </div>
          </div>
          <a href='https://onedrive.live.com/download?cid=D3A14AD9A72B3132&resid=D3A14AD9A72B3132%211614&authkey=AFqORa_aATw9LA8&em=2' className="curriculumDownload">
            <div className="downloadButton">
              <FileArrowDown size={23} weight={'bold'}/>
              <h3>
              Download Currículo

              </h3>
            </div>
          </a>

        </div>
      </div>

    </div>



      {/* <div className="onConstructionWarning"><h3>Página em construção! Veja o progresso no GitHub!</h3></div>
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
      </div> */}
    </>
  )
}