import List from "@/components/ui/List.astro";
import DrupalIcon from "@icons/DrupalIcon.astro";
import GithubIcon from "@icons/GithubIcon.astro";
import LinkedinIcon from "@icons/LinkedinIcon.astro";
import { list } from "postcss";

export const RESUME_DATA = {
	name: "Guillaume Astier",
    title: "Freelance, développeur sénior Drupal",
    location: "Clermont-Ferrand, France",
    contact: {
        email: "guillaume.astier.work@gmail.com",
        phone: "",
        social: [
            {
                icon: LinkedinIcon,
                link: "https://www.linkedin.com/in/guillaumeastier/",
                name: "Linkedin",
            },
            {
                icon: GithubIcon,
                link: "https://github.com/Spooky063/drupal",
                name: "Github",
            },
            {
                icon: DrupalIcon,
                link: "https://www.drupal.org/u/spooky063",
                name: "Drupal",
            },
        ]
    },
    summary: {
        title: "",
        content: "Passionné par le framework Drupal depuis sa version 7, je suis déterminé à mettre à profit mon expertise pour concevoir des applications Web robustes et évolutives, parfaitement adaptées à vos besoins."
    },
    skills: {
        title: "Compétences",
        list: [
            "PHP",
            "Drupal",
            "Symfony",
            "JavaScript",
            "AlpineJS",
            "SQL",
            "CSS",
            "Conception d'API",
            "Gitlab CI/CD",
            "Docker",
            "Gestion de projet",
            "Linux",
            "Anglais"
        ]
    },
    education: {
        title: "Education",
        list: [
            {
                school: "SUPINFO Clermont-Ferrand",
                degree: "(Niveau) M. Sc. 2 (Bac +5)",
                start: "2010",
                end: "2014",
            },
        ]
    },
    work: {
        title: "Expériences",
        list: [
            {
                title: "Freelancing",
                position: "Développement Drupal / Consultant",
                start: "2019",
                end: "Aujourd'hui",
                badges: [],
                link: "",
                description: "Les principaux clients avec lesquels j’ai travaillé sont Michelin (mission anglophone), l’Opéra de Limoges et Chamina Voyages."
            },
            {
                title: "De Bussac Multimedia",
                position: "Lead Développeur Drupal",
                start: "fév 2018",
                end: "mars 2019",
                badges: ["Agence Web"],
                link: "",
                description: "Mon rôle a été de développer des applications Web sous Drupal, mais aussi d’aider l'équipe à aller vers la bonne conception architecturale et logicielle."
            },
            {
                title: "Periscope",
                position: "Développeur Drupal",
                start: "oct 2014",
                end: "fév 2018",
                badges: ["Agence Web"],
                link: "",
                description: "C’est dans cette entreprise que j’ai pris goût au framework Drupal. Projets après projets, mon expérience avec mes pairs n’a fait que me conforter dans mon choix. Au fil du temps, j’ai su évoluer sur Drupal afin d’avoir une compréhension complète du framework."
            }
        ]
    },
    project: {
        title: "Projets",
        list: [
            {
                title: "Move'n See",
                url: {
                    name: "shop.movensee.com",
                    link: "https://shop.movensee.com"
                },
                badges: ["2025", "Backend", "DevOps"],
                description: `
                    <p class="mb-4">Mise en place et gestion d’un mode d’abonnement mensuel pour une plateforme de e-commerce.</p>
                    <p class="mb-1">Les fonctionnalités mises en place ont été :</p>
                `,
                missions: [
                    "la mise en place d’un serveur de préproduction via un script,",
                    "la mise en place et configuration du module de Stripe pour faire la liaison entre les produits Prestashop et les produits Stripe,",
                    "la gestion des abonnements selon les produits et les variantes de produits."
                ],
                skills: ["Prestashop", "API", "Stripe", "Ansible", "MariaDB"]
            },
            {
                title: "Alberto Motors",
                url: {
                    name: "alberto-motors.com",
                    link: "https://alberto-motors.com"
                },
                badges: ["2025", "Backend", "Frontend"],
                description: `
                    <p class="mb-4">Refonte du tunnel de conversion lead pour l’achat de moteur.</p>
                    <p class="mb-1">Mes missions ont été :</p>
                `,
                missions: [
                    "la mise en place du formulaire de lead ainsi que la transmission des données tout au long du processus via Cookie pour les moteurs et les offres,",
                    "la gestion de la partie ‘Réserver’ et ‘Commander’ sur les moteurs.",
                ],
                skills: ["Webflow", "JavaScript"]
            },
            {
                title: "Air Liquide",
                url: {
                    name: "airliquide.com",
                    link: "https://airliquide.com"
                },
                badges: ["2024", "Backend"],
                description: `
                    <p class="mb-4">
                    Consultant pour l’intégration d’une scène en ThreeJS sur un site Drupal.<br>
                    La scène a intégrer : <a href="https://plateforme-air-liquide.advitam.paris/" class="underline underline-offset-1">https://plateforme-air-liquide.advitam.paris/</a>
                    </p>
                    <p class="mb-1">Mes missions ont été :</p>
                `,
                missions: [
                    "réflexion sur l'interopérabilité entre Drupal et ThreeJS (transmission de données, structure évolutive et maintenable),",
                    "réflexion sur l’intégration de ThreeJS dans Drupal de manière optimale et performante."
                ],
                skills: ["Drupal 10", "Consultant technique", "Assets"]
            },
            {
                title: "RTE France",
                url: {
                    name: "rte-france.com",
                    link: "https://rte-france.com"
                },
                badges: ["2024", "Backend"],
                description: `
                    <p class="mb-4">Audit technique complet du site.</p>
                    <p class="mb-1">Le but de cette mission était :</p>
                `,
                missions: [
                    "l’audit de tous les modules Drupal sur de la bonne pratique, la recherche d’optimisation et la sensibilisation auprès de l’équipe du clean code,",
                    "la création d’une documentation relatant tout le processus de test, les observations, les axes d’amélioration."
                ],
                skills: ["Drupal 10", "Audit technique"]
            },
            {
                title: "Michelin API Portail",
                url: {
                    name: "developer.michelin.com",
                    link: "https://developer.michelin.com"
                },
                badges: ["2021-2023", "Backend", "Frontend"],
                description: `
                    <p class="mb-4">
                        Création d’un portail développeur d’API avec l’API manager Apigee.<br>
                        <span class="underline underline-offset-1">Cette mission a été réalisée avec des partenaires anglophones.</span>
                    </p>
                    <p class="mb-1">Sur cette mission, on peut citer comme tâches :</p>
                `,
                missions: [
                    "la refonte, avec l’aide des modules Apigee Edge et Apigee Monetization de tout le tunnel de création de clé d’API pour les besoins internes,",
                    "l’affichage de la partie catalogue des produits avec une librairie front (AlpineJS) pour une meilleure réactivité et gestion du cache,",
                    "la création de modules personnalisés tel que la partie FAQ et le système de sondage (A aimé / N’a pas aimé) pour les fiches produits,",
                    "la mise en place d’un SSO."
                ],
                skills: ["Drupal 9", "API REST", "Apigee", "Microsoft Azure", "AlpineJS", "Gitlab CI/CD", "Kubernetes", "PostgreSQL"]
            },
            {
                title: "Opéra de Limoges",
                url: {
                    name: "operalimoges.fr",
                    link: "https://operalimoges.fr"
                },
                badges: ["2020", "Backend"],
                description: `
                    <p class="mb-4">Refonte complète du site.</p>
                    <p class="mb-1">Certaines tâches que j’ai traitées sont :</p>
                `,
                missions: [
                    "la mise en place du système de recherche avec filtres multiples (texte, taxonomie, plage de dates) avec le module Views,",
                    "l’utilisation du module Paragraphs pour la gestion de toutes les pages."
                ],
                skills: ["Drupal 9", "Apache Solr", "Drupal:Views", "Drupal:Paragraphs", "PostgreSQL"]
            },
            {
                title: "Chamina Voyages",
                url: {
                    name: "chamina-voyages.com",
                    link: "https://chamina-voyages.com"
                },
                badges: ["2019", "Backend"],
                description: `
                    <p class="mb-4">Création complète du site vitrine de la marque avec création de contenu via une API SOAP.</p>
                    <p class="mb-1">Les parties les plus intéressantes sont :</p>
                `,
                missions: [
                    "la création d’un module personnalisé pour la récupération des randonnées via une API SOAP utilisant la Queue API pour une meilleure gestion de la charge,",
                    "la création d’un système de recherche via la Form API pour les départs confirmés,",
                    "l'implémentation des données structurées avec les résultats enrichis (fil d’ariane, avis, produits, ...)."
                ],
                skills: ["Drupal 9", "Apache SOAP", "Drupal:Queue API", "Drupal:Form API", "Drupal:Modules Custom", "PostgreSQL"]
            },
            {
                title: "Pêche 63",
                url: {
                    name: "peche63.com",
                    link: "https://peche63.com"
                },
                badges: ["2019", "Backend"],
                description: `
                    <p class="mb-4">Création complète du site en équipe.</p>
                    <p class="mb-1">Les fonctionnalités les plus marquantes ont été :</p>
                `,
                missions: [
                    "la création d’une carte interactive avec gestion de catégorie,",
                    "la création d’un module avec la Batch API pour l’upload de fichier cartographique,",
                    "la recherche globale du site via la Search API."
                ],
                skills: ["Drupal 9", "Cartographie (KML)", "API", "Drupal:Batch API", "MariaDB"]
            },
            {
                title: "Bis TV",
                url: {
                    name: "bis.tv",
                    link: "https://bis.tv"
                },
                badges: ["2018", "Backend"],
                description: `
                    <p class="mb-4">Création complète du site avec tunnel de commande.</p>
                    <p class="mb-1">Les fonctionnalités importantes que j’ai traitées sont :</p>
                `,
                missions: [
                    "la création d’un formulaire multi-étape de lead pour commander un abonnement à des chaînes TV avec l’aide de la Form API, la session et le private tempstore,",
                    "la mise en place d’une API pour la récupération des installateurs."
                ],
                skills: ["Drupal 9", "Module de réservation", "API", "Drupal:Form API", "MariaDB"]
            },
            {
                title: "Pépinière la forêt",
                url: {
                    name: "pepinieres-la-foret.com",
                    link: "https://pepinieres-la-foret.com"
                },
                badges: ["2018", "Backend"],
                description: `
                    <p class="mb-4">Création en équipe du site vitrine de la marque.</p>
                    <p class="mb-1">Pour ce projet, les points sur lesquels j’ai travaillé sont :</p>
                `,
                missions: [
                    "la migration (création et modification) journalière du catalogue via le module migrate et la récupération de fichiers CSV distants,",
                    "la personnalisation avec la Migrate API du système d’ajout/mise à jour du contenu,",
                    "la page catalogue du site avec son système de filtre par lettre alphabétique."
                ],
                skills: ["Drupal 8", "CSV", "Drupal:Module migrate", "Drupal:Migrate API", "Migration", "MariaDB"]
            },
            {
                title: "Buccotherm",
                url: {
                    name: "buccotherm.com",
                    link: "https://buccotherm.com"
                },
                badges: ["2018", "Backend"],
                description: `
                    <p class="mb-4">Création complète du site vitrine de la marque.</p>
                    <p class="mb-1">Voici une liste de point sur lesquels j’ai travaillé :</p>
                `,
                missions: [
                    "la création d’une API pour la récupération des points de vente,",
                    "la gestion complète du multilingue,",
                    "la recherche globale du site via la Search API."
                ],
                skills: ["Drupal 8", "Drupal:Search API", "Multilangue", "MariaDB"]
            },
            {
                title: "ASM Rugby",
                url: {
                    name: "asm-rugby.com",
                    link: "https://asm-rugby.com"
                },
                badges: ["2017", "Backend"],
                description: `
                    <p class="mb-4">Création en équipe du site de l'équipe de rugby Clermontoise.</p>
                    <p class="mb-1">Sur ce projet, j’ai travaillé sur les fonctionnalités suivantes :</p>
                `,
                missions: [
                    "la création d’un module pour la récupération des statistiques joueur via API,",
                    "la gestion du calendrier et du classement,",
                    "la mise en place d’un plan de tag Analytics."
                ],
                skills: ["Drupal 8", "API", "Analytics (GTM)", "MariaDB"]
            },
        ]
    }
};