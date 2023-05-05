export const ENTITIES = {
    site: {
        list: 'sites',
        detail: 'sites',
        classrooms: 'sites',
        add: 'sites/add',
        edit: 'sites',
        delete: 'sites'
    },
    classroom: {
        list: 'classroom/list',
        detail: 'classroom/'
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