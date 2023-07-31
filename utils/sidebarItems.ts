interface sidebarSubItems {
    title: string,
    value: string,
    icon?: string,
    to: string,
}

interface sidebarItems extends sidebarSubItems {
    subitems?: Array<sidebarSubItems>
}

export const sidebarItems: Array<sidebarItems> = [
    {
        title: 'Games',
        value: 'games',
        to: '/games',
        subitems: [
            {
                title: 'Going to play',
                value: 'goingToPlay',
                to: '/favorites',
            },
            {
                title: 'Finished',
                value: 'finished',
                to: '/finished',
            },
        ]
    },
    {
        title: 'Movies',
        value: 'movies',
        to: '/movies',
        subitems: [
            {
                title: 'Going to watch',
                value: 'goingToWatch',
                to: '/favorites',
            },
            {
                title: 'Watched',
                value: 'watchedFilms',
                to: '/watched',
            },
        ]
    }
]
