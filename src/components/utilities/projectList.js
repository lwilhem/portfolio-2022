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
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        backend: "https://github.com/lwilhem/devlab-goodies-backend",
        frontend: "https://github.com/lwilhem/vite-devlab-goodies-client",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
  {
    id: 1,
    name: "Symfony Course: Site E-Commerce",
    technologies: ["symfony", "twig", "bootstrap", "mySQL"],
    repoLink: [
      {
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        backend: "https://github.com/lwilhem/devlab-goodies-backend",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
  {
    id: 2,
    name: "OOP Course: SPA Registration Site",
    technologies: ["php", "bootsrap", "html", "css"],
    repoLink: [
      {
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        backend: "https://github.com/lwilhem/devlab-goodies-backend",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
  {
    id: 3,
    name: "Cours Node: Service de Messagerie Instantanée",
    technologies: ["node", "express", "vuejs", "mongoDB"],
    repoLink: [
      {
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        backend: "https://github.com/lwilhem/devlab-goodies-backend",
        frontend: "https://github.com/lwilhem/vite-devlab-goodies-client",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
  {
    id: 4,
    name: "Portfolio version 2022",
    technologies: ["vuejs", "tailwind", "vite"],
    repoLink: [
      {
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        frontend: "https://github.com/lwilhem/vite-devlab-goodies-client",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
  {
    id: 5,
    name: "QCM Apllication VueJS",
    technologies: ["vuejs", "vite"],
    repoLink: [
      {
        deployedAt: "https://github.com/lwilhem/devlab-goodies-backend",
        frontend: "https://github.com/lwilhem/vite-devlab-goodies-client",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum tortor mi. Vivamus non metus vel leo suscipit suscipit suscipit sit amet massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed pulvinar elit. Aliquam vitae aliquet libero, ac dignissim libero. Duis mattis nibh tortor, vitae sodales risus euismod non. Cras sed lobortis lacus. Sed sit amet elementum risus. Pellentesque varius auctor fermentum. Mauris id tempus tortor. Vestibulum hendrerit metus in mauris porta venenatis. Phasellus porta tincidunt nibh eu tempus. Sed tristique vitae tellus ut bibendum. Mauris interdum metus ut magna condimentum consequat.",
  },
];

export default projectList;
