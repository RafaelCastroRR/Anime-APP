import { useEffect, useState } from 'react';
import { getAnimeDetails } from '../service/anime';

export const useAnime = (searchTerm) => {
    const [anime, setAnime] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchAnimeData = async () => {
            const searchUrl = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(searchTerm)}`;
            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();
            const animeId = searchData.data[0]?.id;

            const { anime: fetchedAnime, episodes: fetchedEpisodes } = animeId
                ? await getAnimeDetails(animeId)
                : { anime: null, episodes: [] };

            setAnime(fetchedAnime);
            setEpisodes(fetchedEpisodes);
        };

        fetchAnimeData();
    }, [searchTerm]);

    return { anime, episodes };
};
