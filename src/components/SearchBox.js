import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2 mv2">
            <input
                className="pa3 ba b--green bg-lightes-blue"
                type="text"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
