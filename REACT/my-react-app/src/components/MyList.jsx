import React from 'react';

const MyList = ({items}) => {


    const handleClick = (id, name) => {
        console.log('Clicked:', name);
    };



    return (
        <ul>
            {
            items.map(

                ( { id, name } ) =>

                (
                    <li key={id} onClick={ () => handleClick(id, name) }>
                        {name}
                    </li>
                )
            )

            }
        </ul>
    );
};

export default MyList;