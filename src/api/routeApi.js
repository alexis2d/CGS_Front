export const ENTITIES = {
    site: {
        list: 'sites',
        detail: 'sites',
        classrooms: 'sites',
        add: 'sites/add',
        edit: 'sites',
        delete: 'sites'
    },

    reservation: {
        list: "reservation",
        detail: "reservation/:id",
        add: "reservation/add",
        classrooms: "reservation/classroom/:id"
    },
    promotion: {
        list: "promotion",
        detail: "promotion"
    },
}