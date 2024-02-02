import React from "react";

import { AppWindow, Atom, Briefcase, GlobeHemisphereWest, HardDrives, StripeLogo, Translate, UsersThree } from "phosphor-react";

export const experiences = [
  {
    id: 0,
    companyName: "Umbler",
    companyLogo: "umbler.jpg",
    jobTitle: "Analista de Customer Success",
    jobType: "Estágio",
    fromTo: "fev de 2021 - jun de 2022",
    competencies: "Trabalho em equipe ·| Atendimento ao cliente ·| WordPress ·| MySQL |· Elasticsearch"
  }
];

const diferenciaisSettings = {
  size: 23,
  color: "#557CF2",
  weight: "light"
};

export const diferenciais = [
  {
    id: 0,
    icon: <AppWindow {...diferenciaisSettings}/>,
    title: "Ecossistema NodeJs",
    description: "Experiência completa no desenvolvimento de aplicações NodeJs com diversas bibliotecas",
  },
  {
    id: 1,
    icon: <Atom {...diferenciaisSettings}/>,
    title: "Stack MERN",
    description: "Aplicações web completas criadas com a stack MongoDb, Express, React e Node",
  },
  {
    id: 2,
    icon: <StripeLogo {...diferenciaisSettings}/>,
    title: "Integração de APIs",
    description: "Experiência na integração de APIs de pagamentos no Front e Back-end para aplicações seguras",
  },
  {
    id: 3,
    icon: <GlobeHemisphereWest {...diferenciaisSettings}/>,
    title: "High Availability",
    description: "Aplicações de alta disponibilidade criadas com escabalibidade em mente, usando CDNs e Clusteres",
  },
  {
    id: 4,
    icon: <HardDrives {...diferenciaisSettings}/>,
    title: "Bare-Metal e Cloud",
    description: "Experiência na configuração de servidores Bare-Metal e Cloud nos principais serviços de hospedagem",
  },
  {
    id: 5,
    icon: <Translate {...diferenciaisSettings}/>,
    title: "Fluência em Inglês",
    description: "Nível CEFR C1 Advanced em inglês, para conversação, leitura e escrita",
  },
  {
    id: 6,
    icon: <UsersThree {...diferenciaisSettings}/>,
    title: "Customer Success",
    description: "Experiência em suporte tanto ao cliente técnico quanto ao cliente leigo",
  },
  {
    id: 7,
    icon: <Briefcase {...diferenciaisSettings}/>,
    title: "Experiência Comprovada",
    description: "Experiência comprovada no ramo, trabalhando em diversas empresas do ramo da tecnologia",
  },
];