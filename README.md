# P12_SportSee_12-2021

Openclassrooms - Parcours développeur Front-end

## Projet 12 : Développez un tableau de bord d'analytics avec React

### Scénario :

SportSee est une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

### Mission :

Travailler sur la nouvelle page de profil utilisateur du site. Utiliser les maquettes Figma et le Kanban avec les User Stories. Intégrer les US de la partie TODO.

- L'objectif est de refaire la page de profil avec React.
- Le projet intègre des graphiques sur l'activité sportive de l'utilisateur donc utiliser soit D3 soit Recharts.
- S'assurer que le projet puisse être lu sur des écrans d'au moins 1024 par 780 pixels (pas besoin d'être responsive).
- En ce qui concerne les données, un backend utilisant NodeJS est utilisé (voir les détails de l'installation ci-dessous). Cela permet d'effectuer des appels HTTP et de récupérer les données de l'exemple.
- Pour la gestion des appels eux-mêmes, on utilise soit Fetch soit Axios.
- Il est important que les appels soient effectués en dehors des composants React. Créez un service séparé qui se chargera d'effectuer ces appels.
- Démarrez le projet avec des données simulées. Dès que le projet est fonctionnel, intégrez l'API.
- Il est important que le projet soit documenté afin que tout le monde puisse travailler dessus.

## Installation :

### Prérequis

- [NodeJS](https://nodejs.org/en/) Version 14.16.0
- [npm](https://www.npmjs.com/) Version 6.14.11
- [Visual Studio Code](https://code.visualstudio.com/) ou un autre IDE de votre choix

### Dependencies

- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Version 6.2.1
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.7.2
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Recharts](https://recharts.org/en-US/) Version 2.1.8

### Installation et exécution du projet

#### Backend Api

- Clonez l'Api Backend sur votre ordinateur : `https://github.com/lallieau/P9-front-end-dashboard.git`

- Dans ce dépôt, installez les paquets/dépendances : `npm`

- Exécutez l'Api Backend, qui écoutera sur le port 3000 par défaut. : `npm start`

Vous verrez le message `Magic happens on port 3000` dans la fenêtre du terminal.

#### Frontend App

- Clonez ce référentiel sur votre ordinateur : `https://github.com/lallieau/P12_SportSee_12-2021.git`

- Dans ce dépôt, installez les paquets/dépendances : `npm`

- Exécutez l'application frontale : `npm start`

- Vous verrez le message :

  `? something is already running on port 3000.`
  `Would you like to run the app on another port instead >> (Y/n)`

- répondre: Y

L'application fonctionne normalement sur http://localhost:3001/

**Attention, actuellement seulement deux utilisateurs ont été simulés. Ils ont respectivement les userId 12 et 18.**
