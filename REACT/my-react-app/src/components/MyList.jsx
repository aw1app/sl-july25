import React from 'react';

const MyList = ({items, func1}) => {


    const handleClick = (evt, id, name) => {
       
        console.log('Clicked:', name, evt.target);
    };



    return (
        <div>
        <button onClick={func1} > Vlick me to the parent function f1 </button>

        <ul>
            {
            items.map(

                ( { id, name } ) =>

                (
                    <li key={id} onClick={ (evt) => handleClick(evt, id, name) }>
                        {name}
                    </li>
                )
            )

            }
        </ul>
        </div>
    );
};

export default MyList;