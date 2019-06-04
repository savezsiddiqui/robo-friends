import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const Cardlist = robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email} />
    })
    return (
        <div> {Cardlist} </div>
    )
}

export default Cardlist;