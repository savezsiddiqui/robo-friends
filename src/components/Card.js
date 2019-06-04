import React from 'react';

//note that we write JSX, not HTML.
//thats why importing react is necessary because it has all 
//the files for JSX.

const Card = (props) => {
    const {name, id, email} = props
    return (
        <div className='tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/test${id}?200x200`} height='150px' width='auto' alt='' />
            <div>
                <h2>{name}</h2>
                <p>{id} - {email}</p>
            </div>
        </div>
    )
}

export default Card;