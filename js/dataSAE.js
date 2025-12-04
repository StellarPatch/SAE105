var currentSAE_page = "";

const SAE_Data = {
  "SAE1.01": {
    "titre": "Auditer une communication numerique",
    "competences": ["Comprendre"],
    "description": "Cette SAE doit amener les etudiants a utiliser des outils d’audit objectifs comme les guides de bonne pratique ou les referentiels de qualite pour evaluer un site web.<br>Elle met en pratique les concepts theoriques explores dans les ressources liees a la culture numerique, a la strategie de communication et a l’economie.<br>Elle permet la mise en oeuvre des outils d’analyse statistique sur des donnees variees : donnees de trafic, sondages d’opinion ou etudes socio-economiques.",
    "AC": {
      "AC11.01": "Presenter une organisation, ses activites et son environnement (economique, sociologique, culturel, juridique, technologique, communicationnel et mediatique)",
      "AC11.02": "evaluer un site web, un produit multimedia ou un dispositif interactif existant en s’appuyant sur des guides de bonnes pratiques",
      "AC11.03": "Produire des analyses statistiques descriptives et les interpreter pour evaluer un contexte socio-economique",
      "AC11.04": "Analyser des formes mediatiques et leur semiotique",
      "AC11.05": "Identifier les cibles (critères socio-economiques, demographiques, geographiques, culturels...)"
    },
    "ressources": {
      "R1.03": "Ergonomie et Accessibilite",
      "R1.04": "Culture numerique",
      "R1.05": "Strategies de communication et marketing",
      "R1.09": "Culture artistique",
      "R1.14": "Representation et traitement de l’information",
      "R1.16": "economie, gestion et droit du numerique"
    },
    "semestre": 1
  },

  "SAE1.02": {
    "titre": "Concevoir une recommandation de communication numerique",
    "competences": ["Concevoir"],
    "description": "En tant que charges de communication juniors, les etudiants conçoivent une recommandation de communication pour la sortie ou le repositionnement d’un produit ou d’un service dans un contexte international.",
    "AC": {
      "AC12.03": "Proposer une recommandation marketing (cibles, objectifs, points de contact)",
      "AC12.04": "Proposer une strategie de communication"
    },
    "ressources": {
      "R1.01": "Anglais",
      "R1.02": "Anglais Renforce ou LV2",
      "R1.05": "Strategies de communication et marketing",
      "R1.06": "Expression, communication et rhetorique"
    },
    "semestre": 1
  },

  "SAE1.03": {
    "titre": "Produire les elements d’une communication visuelle",
    "competences": ["Exprimer"],
    "description": "En tant qu’infographistes juniors, les etudiants doivent mener un travail de conception, de creation et de production d’elements visuels pour une campagne de communication telle que la couverture d’un evenement, la sortie d’un produit ou un travail de positionnement d’une nouvelle marque.",
    "AC": {
      "AC13.02": "Produire des pistes graphiques et des planches d’inspiration",
      "AC13.03": "Creer, composer et retoucher des visuels",
      "AC13.06": "Optimiser les medias en fonction de leurs usages et supports de diffusion"
    },
    "ressources": {
      "R1.08": "Production graphique",
      "R1.09": "Culture artistique",
      "R1.14": "Representation et traitement de l’information"
    },
    "semestre": 1
  },

  "SAE1.04": {
    "titre": "Produire un contenu audio et video",
    "competences": ["Exprimer"],
    "description": "Cette SAE permet aux etudiants d’explorer les bases de la production audiovisuelle pour repondre a un objectif de communication simple, dans un contexte international.<br>Elle permet de decouvrir les outils et methodes de conception de scenario multimedia.<br>Une partie significative des voix-off, des sous-titres ou incrustations doit être en <b>anglais</b> ou dans une autre langue etrangère.",
    "AC": {
      "AC13.01": "Ecrire pour les medias numeriques",
      "AC13.04": "Tourner et monter une video (scenario, captation image et son...)",
      "AC13.06": "Optimiser les medias en fonction de leurs usages et supports de diffusion"
    },
    "ressources": {
      "R1.01": "Anglais",
      "R1.07": "ecriture multimedia et narration",
      "R1.10": "Production audio et video",
      "R1.14": "Representation et traitement de l’information"
    },
    "semestre": 1
  },

  "SAE1.05": {
    "titre": "Produire un site Web",
    "competences": ["Developper"],
    "description": "En tant qu’integrateurs ou developpeurs juniors dans une agence Web, les etudiants doivent mener un travail de conception, d’integration et de developpement des vues d’un site Web. Le cahier des charges comprend la description des elements statiques de l’application et un jeu de donnees structurees representant un echantillon des contenus a mettre en ligne.",
    "AC": {
      "AC14.01": "Exploiter de manière autonome un environnement de developpement efficace et productif",
      "AC14.02": "Produire des pages Web fluides incluant un balisage semantique efficace et des interactions simples",
      "AC14.03": "Generer des pages Web a partir de donnees structurees",
      "AC14.04": "Mettre en ligne une application Web en utilisant une solution d’hebergement standard"
    },
    "ressources": {
      "R1.11": "Integration",
      "R1.12": "Developpement Web",
      "R1.13": "Hebergement"
    },
    "semestre": 1
  },

  "SAE1.06": {
    "titre": "Gerer un projet de communication numerique",
    "competences": ["Entreprendre"],
    "description": "En se basant sur un objectif de communication, les etudiants doivent mener un travail de gestion de projet pour le deploiement de cette campagne de communication numerique, dans un contexte international.<br>Le contexte international doit conduire les etudiants a s’exprimer, a l’ecrit ou a l’oral, en langue etrangère.",
    "AC": {
      "AC15.01": "Gerer un projet avec une methode classique",
      "AC15.02": "Budgeter un projet et suivre sa rentabilite",
      "AC15.03": "Decouvrir les ecosystèmes d’innovation numerique (fab labs, living labs, tiers-lieux, incubateurs...)",
      "AC15.06": "Interagir au sein des organisations",
      "AC15.07": "Produire un message ecrit ou oral professionnel"
    },
    "ressources": {
      "R1.01": "Anglais",
      "R1.02": "Anglais Renforce ou LV2",
      "R1.06": "Expression, communication et rhetorique",
      "R1.15": "Gestion de projet",
      "R1.16": "economie, gestion et droit du numerique",
      "R1.17": "Projet Personnel et Professionnel"
    },
    "semestre": 1
  },

  "SAE2.01": {
    "titre": "Explorer les usages du numerique",
    "competences": ["Comprendre"],
    "description": "Les etudiants realisent une etude des besoins et des usages pour un site ou un service web et produisent un cahier des charges ou un dossier d’analyse des attentes.",
    "AC": {
      "AC11.01": "Presenter une organisation, ses activites et son environnement (economique, sociologique, culturel, juridique, technologique, communicationnel et mediatique)",
      "AC11.03": "Produire des analyses statistiques descriptives et les interpreter pour evaluer un contexte socio-economique",
      "AC11.06": "Realiser des entretiens utilisateurs pour construire des personae et des recits utilisateurs (user stories)"
    },
    "ressources": {
      "R2.03": "Ergonomie et Accessibilite",
      "R2.04": "Culture numerique",
      "R2.16": "Representation et traitement de l’information"
    },
    "semestre": 2
  },

  "SAE2.02": {
    "titre": "Concevoir un produit ou un service et sa communication",
    "competences": ["Concevoir","Exprimer","Developper","Entreprendre"],
    "description": "Cette SAE place les etudiants dans une situation rencontree dans des petites structures, comme des agences de communication ou des PME, qui ont des clients internationaux, par exemple dans le domaine du tourisme.<br>Une <b>partie significative</b> des contenus sera realisee en langue etrangère. La SAE doit prevoir des situations permettant d’evaluer la capacite des etudiants a <b>communiquer au sein d’organisations</b>.<br>En tant que charges de communication ou de produit juniors, les etudiants doivent imaginer un produit ou un service, concevoir une campagne de communication pour son lancement et realiser les supports de communication.",
    "AC": {
      "AC12.01": "Concevoir un produit ou un service en terme d’usage et de fonctionnalite",
      "AC12.02": "Construire la proposition de valeur d’un produit ou d’un service",
      "AC12.03": "Proposer une recommandation marketing (cibles, objectifs, points de contact)",
      "AC12.04": "Proposer une strategie de communication",
      "AC13.01": "Ecrire pour les medias numeriques",
      "AC13.02": "Produire des pistes graphiques et des planches d’inspiration",
      "AC13.03": "Creer, composer et retoucher des visuels",
      "AC13.04": "Tourner et monter une video (scenario, captation image et son...)",
      "AC13.05": "Designer une interface web (wireframes, UI)",
      "AC13.06": "Optimiser les medias en fonction de leurs usages et supports de diffusion",
      "AC14.06": "Deployer et personnaliser une application Web en utilisant un CMS ou un framework MVC",
      "AC15.01": "Gerer un projet avec une methode classique",
      "AC15.02": "Budgeter un projet et suivre sa rentabilite",
      "AC15.03": "Decouvrir les ecosystèmes d’innovation numerique (fab labs, living labs, tiers-lieux, incubateurs...)",
      "AC15.04": "Analyser un produit ou un service innovant en identifiant les propositions de valeurs et en evaluant les solutions proposees",
      "AC15.06": "Interagir au sein des organisations",
      "AC15.07": "Produire un message ecrit ou oral professionnel"
    },
    "ressources": {
      "R2.01": "Anglais",
      "R2.02": "Anglais Renforce ou LV2",
      "R2.05": "Strategies de communication et marketing",
      "R2.06": "Expression, communication et rhetorique",
      "R2.07": "ecriture multimedia et narration",
      "R2.08": "Production graphique",
      "R2.09": "Culture artistique",
      "R2.10": "Production audio et video",
      "R2.11": "Gestion de contenus",
      "R2.16": "Representation et traitement de l’information",
      "R2.17": "Gestion de projet",
      "R2.18": "economie, gestion et droit du numerique",
      "R2.19": "Projet Personnel et Professionnel"
    },
    "semestre": 2
  },

  "SAE2.03": {
    "titre": "Concevoir un site web avec une source de donnees",
    "competences": ["Developper"],
    "description": "Les etudiants doivent concevoir un site web lie a une source de donnees et permettant des interactions simples avec celle-ci.<br>Une attention particulière sera portee a l’accessibilite des pages produites, au positionnement precis des differents elements et a leur integration qui doit être fluide et inclure des interactions simples.",
    "AC": {
      "AC14.01": "Exploiter de manière autonome un environnement de developpement efficace et productif",
      "AC14.02": "Produire des pages Web fluides incluant un balisage semantique efficace et des interactions simples",
      "AC14.03": "Generer des pages Web a partir de donnees structurees",
      "AC14.04": "Mettre en ligne une application Web en utilisant une solution d’hebergement standard",
      "AC14.05": "Modeliser les donnees d’une application Web"
    },
    "ressources": {
      "R2.12": "Integration",
      "R2.13": "Developpement Web",
      "R2.14": "Système d’information",
      "R2.15": "Hebergement"
    },
    "semestre": 2
  },

  "SAE2.04": {
    "titre": "Construire sa presence en ligne",
    "competences": ["Entreprendre"],
    "description": "L’etudiant doit reflechir a la manière dont il souhaite être present en ligne. Cela peut commencer par une analyse de l’existant, tant pour lui que pour des profils similaires. Il est interessant d’etudier les outils a disposition (reseaux sociaux specialises, developpement d’un site web, CMS...).<br>L’etudiant peut ensuite faire un choix de presence en ligne, doit être capable de l’argumenter et de le mettre en place efficacement.<br>Une reflexion sur la manière de mettre en avant ses competences, ses realisations doit être mise en place.",
    "AC": {
      "AC15.05": "Construire une presence en ligne professionnelle (personal branding)",
      "AC15.07": "Produire un message ecrit ou oral professionnel"
    },
    "ressources": {
      "R2.06": "Expression, communication et rhetorique",
      "R2.19": "Projet Personnel et Professionnel"
    },
    "semestre": 2
  }
}