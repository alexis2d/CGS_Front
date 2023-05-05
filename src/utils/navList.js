import Sidebar from "../component/sidebar";
import HomePage from "../interfaces/home";
import Promotions from "../interfaces/promotions";
import Referents from "../interfaces/referents";
import Reservation from "../interfaces/reservation";
import Sites from "../interfaces/sites";
import SitesDetail from "../interfaces/sites/detail";
import Salles from "../interfaces/salles";
import SallesDetail from "../interfaces/salles/detail.jsx";
import SallesEdit from "../interfaces/salles/edit.jsx";


export const pages = [
    { route: "/", libelle: "Home", icone: "img/home.svg", component: <HomePage /> },
    { route: "/reservation", libelle: "Réservation en attente", icone: "img/reservation.svg", component: <Reservation /> },
    { route: "/sites", libelle: "Sites", icone: "img/sites.svg", component: <Sites /> },
    { route: "/sites/detail/:id", libelle: "Sites Détail", icone: "img/site.svg", component: <SitesDetail /> },
    { route: "/salles", libelle: "Salles", icone: "img/salles.svg", component: <Salles /> },
    { route: "/salles/:id", libelle: "Détail d'une salle", icone: "img/salles.svg", component: <SallesDetail /> },
    { route: "/salles/:id/edit", libelle: "Modification d'une salle", icone: "img/salles.svg", component: <SallesEdit /> },
    { route: "/referents", libelle: "Référents", icone: "img/referent.svg", component: <Referents /> },
    { route: "/promotions", libelle: "Promotions", icone: "img/promotion.svg", component: <Promotions /> },
]