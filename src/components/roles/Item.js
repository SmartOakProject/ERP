import React from 'react';
import { FaMinus } from 'react-icons/fa';

const Item = props => {
    return (
        <li class="list-group-item" style={{ color: props.color }}>
            {props.name}
            <FaMinus />
        </li>
    );
};
export default Item;
