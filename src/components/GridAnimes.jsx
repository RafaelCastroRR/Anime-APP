import React from 'react';

export const GridAnimes = ({ animes, onSelectAnime }) => {
    if (!animes || animes.length === 0) {
        return null;
    }

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {animes.map((anime) => (
                    <div key={anime.id} className="col">
                        <div className="card h-100" onClick={() => onSelectAnime(anime.id)}>
                            <img
                                src={anime.attributes.posterImage.small}
                                className="card-img-top"
                                alt={anime.attributes.canonicalTitle}
                                style={{ height: '300px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">{anime.attributes.canonicalTitle}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
