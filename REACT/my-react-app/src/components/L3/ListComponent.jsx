const ListComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <ul>
            {
                items.map( (item, i) =>
                (
                    <li key={i}>{item}, i={i} </li>
                )
                )
            }
        </ul>
    );
};


export default ListComponent;