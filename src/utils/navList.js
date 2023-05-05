import Sidebar from "../component/sidebar";
import HomePage from "../interfaces/home";
import Promotions from "../interfaces/promotions";
import Referents from "../interfaces/referents";
import Reservation from "../interfaces/reservation";
import Sites from "../interfaces/sites";
import Salles from "../interfaces/salles";
import SitesDetail from "../interfaces/sites/detail";
import SitesAdd from "../interfaces/sites/add";
import SitesEdit from "../interfaces/sites/edit";


export const pages = [
    { route: "/", libelle: "Home", icone: "img/home.png", component: <HomePage /> },
    { route: "/reservation", libelle: "Réservation en attente", icone: "img/reservations.png", component: <Reservation /> },
    { route: "/sites", libelle: "Sites", icone: "img/sites.png", component: <Sites /> },
    { route: "/sites/detail/:id", libelle: "Sites Détail", icone: "img/sites.png", component: <SitesDetail /> },
    { route: "/sites/add", libelle: "Sites Add", icone: "img/sites.png", component: <SitesAdd /> },
    { route: "/sites/edit/:id", libelle: "Sites Edit", icone: "img/sites.png", component: <SitesEdit /> },
    { route: "/salles", libelle: "Salles", icone: "img/salles.png", component: <Salles /> },
    { route: "/referents", libelle: "Référents", icone: "img/referent.png", component: <Referents /> },
    { route: "/promotions", libelle: "Promotions", icone: "img/promotion.png", component: <Promotions /> },
]