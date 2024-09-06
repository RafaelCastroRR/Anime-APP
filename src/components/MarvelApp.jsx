import React, { useState } from 'react';
import { useAnime } from '../hooks/useAnime';

export const MarvelApp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { anime, episodes } = useAnime(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for an anime..."
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary mt-2">Search</button>
            </form>

            {anime && (
                <div className="mt-4">
                    <h2>{anime.attributes.canonicalTitle}</h2>
                    <img
                        src={anime.attributes.posterImage.large}
                        alt={anime.attributes.canonicalTitle}
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <p>{anime.attributes.synopsis}</p>

                    <h3>Episodes</h3>
                    {episodes.length > 0 && (
                        <ul>
                            {episodes.map(episode => (
                                <li key={episode.id}>{episode.attributes.canonicalTitle}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
