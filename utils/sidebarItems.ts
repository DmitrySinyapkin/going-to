interface SidebarSubItems {
    title: string,
    value: string,
    icon?: string,
    to: string,
}

interface SidebarItems extends SidebarSubItems {
    subitems?: Array<SidebarSubItems>
}

export const sidebarItems: Array<SidebarItems> = [
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
