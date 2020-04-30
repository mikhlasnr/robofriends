import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="bg-dark-gray near-white dib br3 pa3 ma3 grow bw2 shadow-5 tc">
            <img alt="robots" src={`https://robohash.org/${id}?100x200`} />
            <div>
                <h2>{name}</h2>
                <p className="silver">{email}</p>
            </div>
        </div>
    );
};

export default Card;
