export const en = {
    views: {
        MainView: {
            header: 'Home Page',
            vtubers: '@.capitalize:common.vtubers',
            groups: '@.capitalize:common.groups',
            languages: '@.capitalize:common.languages',
            tags: '@.capitalize:common.tags',
        },
        VtubersListView: {
            header: '@.capitalize:common.vtubers',
        },
        VtuberView: {
            header: 'Vtuber Page',
            tofulllistlink: 'All Vtubers',
            about: '@.capitalize:common.about',
            languages: '@.capitalize:common.languages',
            sex: '@.capitalize:common.sex',
            species: '@.capitalize:common.species',
            status: '@.capitalize:common.status',
            groups: '@.capitalize:common.groups',
            tags: '@.capitalize:common.tags',
            description: '@.capitalize:common.description',
            links: '@.capitalize:common.links',
        },
        GroupsListView: {
            header: '@.capitalize:common.groups',
        },
        GroupView: {
            header: '@.capitalize:common.group Page',
            tofulllistlink: 'All Groups',
            description: '@.capitalize:common.description',
            about: '@.capitalize:common.information',

            groups: '@.capitalize:common.groups',
            vtubers: '@.capitalize:common.vtubers',
            links: '@.capitalize:common.links',
            tags: '@.capitalize:common.tags',
        },
        AboutView: {
            header: 'About',
            text: 'Im just trying out vue 3',
        },
    },
    components: {
        GroupAbout: {
            status: '@.capitalize:common.status',
            type: 'Type',
        },
        TopMenu: {
            main: '@:common.sitename',
            vtubers: '@.capitalize:common.vtubers',
            groups: '@.capitalize:common.groups',
            about: 'About',
        },
    },
    dictionaries: {
        vtuber: {
            sexes: {
                0: 'unspecified',
                1: 'female',
                2: 'male',
                3: 'other',
            },
            statuses: {
                0: 'predebut',
                1: 'active',
                2: 'hiatus',
                3: 'inactive',
                4: 'graduated',
            },
        },
        group: {
            types: {
                0: 'union',
                1: 'corporation',
                2: 'generation',
                3: 'other'
            },
            statuses: {
                0: 'announced',
                1: 'active',
                2: 'hiatus',
                3: 'inactive',
                4: 'closed',
            },
        },
        language: {
            level: {
                0: 'native/fluent',
                1: 'advanced',
                2: 'intermediate',
                3: 'basic',
            },
            usage: {
                0: 'main',
                1: 'common',
                2: 'rare',
                3: 'legendary',
                4: 'no',
            },
        }
    },
    common: {
        sitename: 'vtdb',
        vtuber: 'vtuber',
        vtubers: 'vtubers',
        about: 'about',
        description: 'description',
        name: 'name',
        status: 'status',
        tags: 'tags',
        sex: 'sex',
        species: 'species',
        languages: 'languages',
        group: 'group',
        groups: 'groups',
        links: 'links',
        information: 'information',
    },
};