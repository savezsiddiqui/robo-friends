import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input className='pa3 ba b--green ma2 bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;