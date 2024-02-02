import "./home.css";

import { LinkedinLogo, GithubLogo, InstagramLogo, WhatsappLogo, Envelope, FileArrowDown } from "phosphor-react";

import React, { useState } from "react";

// Tippy.JS
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/shift-away.css";
import { diferenciais } from "../../../../data";
import Competences from "../../components/competences";

export default function Home() {

  const [mailText,setMailText] = useState("E-Mail");

  const copyMail = async(e) => {
    e.preventDefault();
    navigator.clipboard.writeText("contato@eumanuel.dev");
    setMailText("Copiado!");
    await new Promise(r => setTimeout(r, 2500));
    setMailText("E-Mail");
  };

  function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }
  
  const sinceLastWork = getMonthDifference(new Date("2023-08-06"), new Date());
  
  return (
    <>


      <div className="wrapper">
        <div className="resume">
          <div className="resumeProfile">
            <img src="./foto.webp" alt="" className="profileImage" />
            <h1 className='profileName'>Emanuel Ribeiro</h1>
            <p className="profileOccupation">FullStack JS e C# Jr</p>
            <div className="qualificationsWrapper">
              {diferenciais.map((diferential, index) => {
                return (
                  <Competences {...diferential} key={index}/>);
              })}

            </div>
            <div className="profileNetworks">
              <Tippy
                content="Linkedin"
                placement={"top"}
                arrow={false}
                theme="translucent"
              >
                <a href='https://www.linkedin.com/in/emanuel-ribeiro-8705611b9/' target="_blank" rel="noreferrer">
                  <LinkedinLogo size={32} weight="light"/>
                </a>
              </Tippy>
              <Tippy
                content="GitHub"
                placement={"top"}
                arrow={false}
                theme="translucent"
              >
                <a href='https://github.com/Eumanuel/' target="_blank" rel="noreferrer">
                  <GithubLogo size={32} weight="light"/>
                </a>
              </Tippy>
              <Tippy
                content="Instagram"
                placement={"top"}
                arrow={false}
                theme="translucent"
              >
                <a href='https://www.instagram.com/eumanuelllll/' target="_blank" rel="noreferrer">
                  <InstagramLogo size={32} weight="light"/>
                </a>
              </Tippy>
              <Tippy
                content="WhatsApp"
                placement={"top"}
                arrow={false}
                theme="translucent"
              >
                <a href='https://contate.me/eumanuel' target="_blank" rel="noreferrer">
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

            <div className="timeline marttechTimeline">
              <div className="experienceCompany">
                <img src="./marttech.svg" alt="" className="companyLogo" />
                <div className="company-text">
                  <h1>Marttech   • {sinceLastWork} m</h1>
                  <small>13.974.925/0001-85</small>
                </div>
              </div>
              <div className="experienceBit">
                <div className="ball marttechDevBall"></div>
                <div className="experience-text">
                  <h2>Dev Jr. React</h2>
                  <p>Desenvolvimento de aplicações comerciais em React, contando com diversas bibliotecas avançadas para seu desenvolvimento, como, React Hook Forms, Zod, Zustand, Axios, React Query, MUI (Incluindo DataGrid) entre outros.</p>
                </div>
              </div>
            </div>

            <div className="timeline imobiTimeline">
              <div className="experienceCompany">
                <img src="./imobi.svg" alt="" className="companyLogo" />
                <div className="company-text">
                  <h1>Imobibrasil   • 8 m</h1>
                  <small>13.326.364/0001-08</small>
                </div>
              </div>
              <div className="experienceBit">
                <div className="ball imobiDevBall"></div>
                <div className="experience-text">
                  <h2>Analista de TI</h2>
                  <p>Suporte ao cliente técnico e leigo na configuração de DNS, E-Mails, Rede e também do próprio website.</p>
                </div>
              </div>
            </div>

            <div className="timeline umblerTimeline">
              <div className="experienceCompany">
                <img src="./umbler.svg" alt="" className="companyLogo" />
                <div className="company-text">
                  <h1>Umbler   • 1 a 11 m</h1>
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
            <a href='https://drive.google.com/uc?id=1iTneLYMA3jKMDWCI44jSwRvxP4zFU0aV' className="curriculumDownload">
              <div className="downloadButton">
                <FileArrowDown size={23} weight={"bold"}/>
                <h3>
                Download Currículo
                </h3>
              </div>
            </a>

          </div>
        </div>

      </div>
    </>
  );
}
