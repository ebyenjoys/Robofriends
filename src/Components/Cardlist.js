import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {

    // if(true) {
    //     throw new Error('Hell no');
    // }
    return(
        <div>
            {robots.map((item,i) =>{
                return <Card key={i} 
                id={item.id} 
                name={item.name} 
                email={item.email}/>
    })}
        </div>
    );
}

export default Cardlist;