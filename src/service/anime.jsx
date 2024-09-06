// src/service/anime.jsx

export const getAnimeDetails = async (animeId) => {
    const url = `https://kitsu.io/api/edge/anime/${animeId}?include=episodes`;
    const response = await fetch(url);
    const { data, included } = await response.json();

    return {
        anime: data,
        episodes: included || []
    };
};
