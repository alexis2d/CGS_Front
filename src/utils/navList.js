import Sidebar from "../component/sidebar";
import HomePage from "../interfaces/home";
import Promotions from "../interfaces/promotions";
import Referents from "../interfaces/referents";
import Reservation from "../interfaces/reservation";
import Sites from "../interfaces/sites";
import Salles from "../interfaces/salles";
import SitesDetail from "../interfaces/sites/detail";


export const pages = [
    { route: "/", libelle: "Home", icone: "img/home.png", component: <HomePage /> },
    { route: "/reservation", libelle: "Réservation en attente", icone: "img/reservations.png", component: <Reservation /> },
    { route: "/sites", libelle: "Sites", icone: "img/sites.png", component: <Sites /> },
    { route: "/salles", libelle: "Salles", icone: "img/salles.png", component: <Salles /> },
    { route: "/referents", libelle: "Référents", icone: "img/referent.png", component: <Referents /> },
    { route: "/promotions", libelle: "Promotions", icone: "img/promotion.png", component: <Promotions /> },
]

export const details = [
    { route: "/sites/detail/:id", libelle: "Sites Détail", icone: "img/sites.png", component: <SitesDetail /> },

]