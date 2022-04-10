export const ru = {
    views: {
        MainView: {
            header: 'Главная',
            vtubers: '@.capitalize:common.vtubers',
            groups: '@.capitalize:common.groups',
            languages: '@.capitalize:common.languages',
            tags: '@.capitalize:common.tags',
        },
        VtubersListView: {
            header: '@.capitalize:common.vtubers',
        },
        VtuberView: {
            header: 'Страница втубера',
            tofulllistlink: 'Все втуберы',
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
            header: 'Страница группы',
            tofulllistlink: 'Все группы',
            description: '@.capitalize:common.description',
            about: '@.capitalize:common.information',
            status: '@.capitalize:common.status',
            groups: '@.capitalize:common.groups',
            vtubers: '@.capitalize:common.vtubers',
            links: '@.capitalize:common.links',
            tags: '@.capitalize:common.tags',
        },
        AboutView: {
            header: 'О сайте',
            text: 'Просто щупаю vue 3',
        },
    },
    components: {
        TopMenu: {
            main: '@:common.sitename',
            vtubers: '@.capitalize:common.vtubers',
            groups: '@.capitalize:common.groups',
            about: 'О сайте',
        }
    },
    dictionaries: {
        vtuber: {
            sexes: {
                0: 'не указан',
                1: 'женский',
                2: 'мужской',
                3: 'другой',
            },
            statuses: {
                0: 'предебют',
                1: 'активен',
                2: 'перерыв',
                3: 'неактивен',
                4: 'выпустился',
            },
        },
        group: {
            types: {
                0: 'объединение',
                1: 'корпорация',
                2: 'поколение',
                3: 'другое'
            },
            statuses: {
                0: 'анонсирована',
                1: 'активна',
                2: 'перерыв',
                3: 'неактивна',
                4: 'закрылась',
            },
        },
        language: {
            level: {
                0: 'родной/свободный',
                1: 'продвинутый',
                2: 'средний',
                3: 'базовый',
            },
            usage: {
                0: 'основной',
                1: 'частый',
                2: 'редкий',
                3: 'легендарный',
                4: 'нет',
            },
        }
    },
    common: {
        sitename: 'vtdb',
        vtuber: 'втубер',
        vtubers: 'втуберы',
        about: 'черты',
        description: 'описание',
        name: 'имя',
        status: 'статус',
        tags: 'теги',
        sex: 'пол',
        species: 'вид',
        languages: 'языки',
        group: 'группа',
        groups: 'группы',
        links: 'ссылки',
        information: 'информация',
    },
};