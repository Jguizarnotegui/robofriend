import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {//the list of robots from robots.js
    //Shows how an error shows when there is an error devs see error list but in production clients see the site by enableing and refreshing page you can see the error on the site before the dev error shows for a split second
    // if (true) {
    //     throw new Error('Nooo');
    // }
    return(
        <div>
            {
                robots.map((user, i) => {
                    return (<Card 
                        key={i}//better to be a value that doesnt change, i might change if an element is removed use the id instead for the key
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;