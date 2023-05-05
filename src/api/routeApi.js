export const ENTITIES = {
    site: {
        list: 'sites',
        detail: 'sites',
        classrooms: 'sites'
    },

    reservation: {
        list: "reservation",
        detail: "reservation/:id",
        add: "reservation/add",
        classrooms: "reservation/classroom/:id"
    },

    promotion: {
        list: "promotion",
        detail: "promotion/:id"
    },
}