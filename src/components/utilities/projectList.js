const projectList = [
  {
    id: 0,
    name: "Project Devlab: L'Amour des Goodies",
    technologies: [
      "file-icons:nestjs",
      "mdi:vuejs",
      "fa6-brands:cc-stripe",
      "ant-design:console-sql-outlined",
      "teenyicons:tailwind-solid",
      "simple-icons:vite",
      "simple-icons:typescript",
    ],
    repoLink: [
      {
        backend: "https://github.com/lwilhem/devlab-goodies-backend",
        frontend: "https://github.com/lwilhem/vite-devlab-goodies-client",
      },
    ],
    description:
      "Dans le cadre de mes études à l’IIM, J’ai eu l’occasion de travailler sur un projet «DEVLAB» Qui se déroule sur toute l’année scolaire. Le projet sur lequel j’ai travaillé était la création et le développement d’un site E-Commerce, qui permettrait aux Associations du Pôle Léonard De Vinci d’avoir une plateforme interne sur laquelle elle pourrait vendre quelque Goodies. J’ai majoritairement contribué à l’architecture Back-end de ce projet, avec l’utilisation de technologies comme NestJS, un framework de développement NodeJS, qui se fonde sur le Language TypeScript; mySQL Pour nos base de données, et Stripe comme service de paiements.",
  },
  {
    id: 1,
    name: "Symfony: Site E-Commerce",
    technologies: [
      "cib:symfony",
      "file-icons:twig",
      "akar-icons:bootstrap-fill",
      "ant-design:console-sql-outlined",
    ],
    repoLink: [
      {
        backend: "https://github.com/lwilhem/symfony-e-commerce",
      },
    ],
    description:
      "Un projet que j’ai réalisé afin de me former sur le frameWork PHP Symfony et son écosystème, Basé sur un template de site e-commerce, j’y ai rajouté des fonctionnalités comme un back-office fonctionnel, avec de un système complet de gestions d’articles pour les vendeurs, Un filtre par catégories, et une authentification. Coté Front-Office, les utilisateurs peuvent parcourir la boutique, filtrer les articles par catégories, et se connecter pour gérer leurs paniers dans une page dédiée.",
  },
  {
    id: 2,
    name: "OOP Course: SPA Registration Site",
    technologies: [
      "akar-icons:php-fill",
      "akar-icons:bootstrap-fill",
      "akar-icons:html-fill",
      "akar-icons:css-fill",
    ],
    repoLink: [
      {
        deployedAt: "https://poo.wlecanu.com",
        backend: "https://github.com/lwilhem/spa-project",
      },
    ],
    description:
      "J’ai réalisé ce projet dans le cadre d’un cours de programmation Orienté-Objet en PHP, C’est un Site qui utilise pleinement la programmation Orienté-Objet, et qui mimique un système où il est possible d’enregistrer & de répartir des animaux abandonnés, Ainsi Qu’un système de permission entre admin & Utilisateurs, ce projet est déployé sur OVH, et a été l’occasion d’apprendre à travailler avec des hébergements et les protocoles SLL / HTTPS, ansi que des outils FTP.",
  },
  {
    id: 3,
    name: "NodeJS: Service de Messagerie Instantanée",
    technologies: [
      "akar-icons:node-fill",
      "simple-icons:express",
      "mdi:vuejs",
      "simple-icons:mongodb",
    ],
    repoLink: [
      {
        backend: "https://github.com/lwilhem/node-instant-messaging-api",
      },
    ],
    description:
      "Un Projet de messagerie Instantanée, Sur lequel J’ai Principalement contribué à l’architecture Back-End. Le project Utilise NodeJS, Le framework HTTP Express, Et MongoDB, Il possède un système de communication instantané entre utilisateurs, ainsi qu’un système d’authentification, les messages sont stockées sur MongoDb et servit via le service Socket.IO ",
  },
];

export default projectList;
