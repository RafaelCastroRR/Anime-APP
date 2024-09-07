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
        <div className="container mt-5">
            <form onSubmit={handleSearch} className="mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        name="search"
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>

            {anime && (
                <div className="row">
                    {}
                    <div className="col-md-6">
                        <h3>Episodios</h3>
                        <ul className="list-group">
                            {episodes.map((episode) => (
                                <li key={episode.id} className="list-group-item">
                                    {episode.attributes.canonicalTitle}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {}
                    <div className="col-md-6">
                        <div className="card">
                            <img
                                src={anime.attributes.posterImage.large}
                                alt={anime.attributes.canonicalTitle}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h2 className="card-title">{anime.attributes.canonicalTitle}</h2>
                                <p className="card-text">{anime.attributes.synopsis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
