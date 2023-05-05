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
import ReservationEdit from "../interfaces/reservation/ReservationEdit";
import ReservationDetails from "../interfaces/reservation/ReservationDetails";


export const pages = [
    { route: "/", libelle: "Home", icone: "/img/home.png", component: <HomePage /> },
    { route: "/reservation", libelle: "Réservation en attente", icone: "/img/reservations.png", component: <Reservation /> },
    { route: "/sites", libelle: "Sites", icone: "/img/sites.png", component: <Sites /> },
    { route: "/salles", libelle: "Salles", icone: "/img/salles.png", component: <Salles /> },
    { route: "/referents", libelle: "Référents", icone: "/img/referent.png", component: <Referents /> },
    { route: "/promotions", libelle: "Promotions", icone: "/img/promotion.png", component: <Promotions /> },
]

export const details = [
    { route: "/reservation/detail/:id", component: <ReservationDetails /> },
    { route: "/reservation/add", component: <ReservationEdit /> },
    { route: "/sites/detail/:id", component: <SitesDetail /> },
    { route: "/sites/add", component: <SitesAdd /> },
    { route: "/sites/edit/:id", component: <SitesEdit /> },
]