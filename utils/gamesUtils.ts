export const getGameGenres = (genres: Genre[]): string => 
    genres.reduce((acc, item, i, arr) => i === arr.length - 1 ? acc + item.name : acc + item.name + ', ', '')

export const getGamePlatforms = (platforms: Platform[]): string => 
    platforms.reduce((acc, item, i, arr) => i === arr.length - 1 ? acc + item.platform.name : acc + item.platform.name + ', ', '')

